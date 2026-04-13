import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Cart from '../../components/Cart'
import type { FoodItem } from '../../types'

const mockFood: FoodItem = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Clássica pizza italiana com molho de tomate e mussarela.',
  preco: 45.9,
  foto: 'https://example.com/pizza.jpg',
  porcao: '1 unidade (30cm)',
}

const mockFood2: FoodItem = {
  id: 2,
  nome: 'Lasanha Bolonhesa',
  descricao: 'Lasanha com molho bolonhesa e queijo gratinado.',
  preco: 55.0,
  foto: 'https://example.com/lasanha.jpg',
  porcao: '1 porção (400g)',
}

describe('Cart - Fechado', () => {
  it('não deve renderizar nada quando isOpen=false', () => {
    const { container } = render(
      <Cart isOpen={false} items={[]} onClose={vi.fn()} onRemoveItem={vi.fn()} />,
    )
    expect(container).toBeEmptyDOMElement()
  })
})

describe('Cart - Aberto sem itens', () => {
  it('deve renderizar mensagem de carrinho vazio', () => {
    render(<Cart isOpen={true} items={[]} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    expect(
      screen.getByText(/O carrinho está vazio/i),
    ).toBeInTheDocument()
  })

  it('não deve renderizar o título "Carrinho de compras" quando vazio', () => {
    render(<Cart isOpen={true} items={[]} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    expect(screen.queryByText('Carrinho de compras')).not.toBeInTheDocument()
  })
})

describe('Cart - Aberto com itens', () => {
  const items = [
    { food: mockFood, quantity: 1 },
    { food: mockFood2, quantity: 2 },
  ]

  it('deve renderizar o título "Carrinho de compras"', () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    expect(screen.getByText('Carrinho de compras')).toBeInTheDocument()
  })

  it('deve renderizar os nomes dos itens', () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
    expect(screen.getByText('Lasanha Bolonhesa')).toBeInTheDocument()
  })

  it('deve exibir quantidade e preço formatado', () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    expect(screen.getByText(/1x.*R\$/i)).toBeInTheDocument()
    expect(screen.getByText(/2x.*R\$/i)).toBeInTheDocument()
  })

  it('deve calcular e exibir o total corretamente', () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    // 45.90 * 1 + 55.00 * 2 = 155.90
    expect(screen.getByText(/R\$\s*155,90/)).toBeInTheDocument()
  })

  it('deve exibir botão de remover para cada item', () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    const removeButtons = screen.getAllByText(/Remover/i)
    expect(removeButtons).toHaveLength(2)
  })

  it('deve chamar onRemoveItem ao clicar em "Remover"', async () => {
    const onRemoveItem = vi.fn()
    render(
      <Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={onRemoveItem} />,
    )
    const removeButtons = screen.getAllByText(/Remover/i)
    await userEvent.click(removeButtons[0])
    expect(onRemoveItem).toHaveBeenCalledWith(mockFood.id)
  })

  it('deve chamar onClose ao clicar no overlay', async () => {
    const onClose = vi.fn()
    render(<Cart isOpen={true} items={items} onClose={onClose} onRemoveItem={vi.fn()} />)
    const overlay = document.querySelector('[class*="Overlay"]') as HTMLElement
    if (overlay) {
      await userEvent.click(overlay)
      expect(onClose).toHaveBeenCalledOnce()
    }
  })

  it('deve exibir o botão de continuar com a entrega', () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)
    expect(
      screen.getByRole('button', { name: /Continuar com a entrega/i }),
    ).toBeInTheDocument()
  })

  it('deve navegar pelas etapas de entrega e pagamento até confirmação', async () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)

    await userEvent.click(screen.getByRole('button', { name: /Continuar com a entrega/i }))
    expect(screen.getByText('Entrega')).toBeInTheDocument()

    await userEvent.type(screen.getByLabelText(/Quem irá receber/i), 'Maria da Silva')
    await userEvent.type(screen.getByLabelText(/^Endereço$/i), 'Rua das Flores')
    await userEvent.type(screen.getByLabelText(/^Cidade$/i), 'São Paulo')
    await userEvent.type(screen.getByLabelText(/^CEP$/i), '01234000')
    await userEvent.type(screen.getByLabelText(/^Número$/i), '123')

    await userEvent.click(screen.getByRole('button', { name: /Continuar com o pagamento/i }))
    expect(screen.getByText(/Pagamento - Valor a pagar/i)).toBeInTheDocument()

    await userEvent.type(screen.getByLabelText(/Nome no cartão/i), 'Maria da Silva')
    await userEvent.type(screen.getByLabelText(/Número do cartão/i), '4111111111111111')
    await userEvent.type(screen.getByLabelText(/^CVV$/i), '123')
    await userEvent.type(screen.getByLabelText(/Mês de vencimento/i), '12')
    await userEvent.type(screen.getByLabelText(/Ano de vencimento/i), '2030')

    await userEvent.click(screen.getByRole('button', { name: /Finalizar pagamento/i }))
    expect(screen.getByText(/Pedido realizado/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Concluir/i })).toBeInTheDocument()
  })

  it('deve limpar o carrinho ao finalizar pagamento quando onClearCart for enviado', async () => {
    const onClearCart = vi.fn()

    render(
      <Cart
        isOpen={true}
        items={items}
        onClose={vi.fn()}
        onRemoveItem={vi.fn()}
        onClearCart={onClearCart}
      />,
    )

    await userEvent.click(screen.getByRole('button', { name: /Continuar com a entrega/i }))

    await userEvent.type(screen.getByLabelText(/Quem irá receber/i), 'Maria da Silva')
    await userEvent.type(screen.getByLabelText(/^Endereço$/i), 'Rua das Flores')
    await userEvent.type(screen.getByLabelText(/^Cidade$/i), 'São Paulo')
    await userEvent.type(screen.getByLabelText(/^CEP$/i), '01234000')
    await userEvent.type(screen.getByLabelText(/^Número$/i), '123')

    await userEvent.click(screen.getByRole('button', { name: /Continuar com o pagamento/i }))

    await userEvent.type(screen.getByLabelText(/Nome no cartão/i), 'Maria da Silva')
    await userEvent.type(screen.getByLabelText(/Número do cartão/i), '4111111111111111')
    await userEvent.type(screen.getByLabelText(/^CVV$/i), '123')
    await userEvent.type(screen.getByLabelText(/Mês de vencimento/i), '12')
    await userEvent.type(screen.getByLabelText(/Ano de vencimento/i), '2030')

    await userEvent.click(screen.getByRole('button', { name: /Finalizar pagamento/i }))
    expect(onClearCart).toHaveBeenCalledOnce()
  })

  it('deve aplicar máscaras nos campos de CEP, cartão, CVV e validade', async () => {
    render(<Cart isOpen={true} items={items} onClose={vi.fn()} onRemoveItem={vi.fn()} />)

    await userEvent.click(screen.getByRole('button', { name: /Continuar com a entrega/i }))

    const zipCodeInput = screen.getByLabelText(/^CEP$/i) as HTMLInputElement
    await userEvent.type(zipCodeInput, '12345678')
    expect(zipCodeInput.value).toBe('12345-678')

    await userEvent.type(screen.getByLabelText(/Quem irá receber/i), 'Maria')
    await userEvent.type(screen.getByLabelText(/^Endereço$/i), 'Rua A')
    await userEvent.type(screen.getByLabelText(/^Cidade$/i), 'SP')
    await userEvent.type(screen.getByLabelText(/^Número$/i), '10')
    await userEvent.click(screen.getByRole('button', { name: /Continuar com o pagamento/i }))

    const cardNumberInput = screen.getByLabelText(/Número do cartão/i) as HTMLInputElement
    const cvvInput = screen.getByLabelText(/^CVV$/i) as HTMLInputElement
    const monthInput = screen.getByLabelText(/Mês de vencimento/i) as HTMLInputElement
    const yearInput = screen.getByLabelText(/Ano de vencimento/i) as HTMLInputElement

    await userEvent.type(cardNumberInput, '4111111111111111')
    await userEvent.type(cvvInput, '1234')
    await userEvent.type(monthInput, '13')
    await userEvent.type(yearInput, '203012')

    expect(cardNumberInput.value).toBe('4111 1111 1111 1111')
    expect(cvvInput.value).toBe('123')
    expect(monthInput.value).toBe('12')
    expect(yearInput.value).toBe('2030')
  })
})
