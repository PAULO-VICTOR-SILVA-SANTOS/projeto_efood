import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FoodCard from '../../components/FoodCard'
import type { FoodItem } from '../../types'

const mockFood: FoodItem = {
  id: 1,
  nome: 'Pizza Margherita',
  descricao: 'Molho de tomate, mussarela e manjericão fresco.',
  preco: 45.9,
  foto: 'https://example.com/pizza.jpg',
  porcao: '1 unidade (30cm)',
}

describe('FoodCard', () => {
  it('deve renderizar o nome do prato', () => {
    render(<FoodCard food={mockFood} onAddToCart={vi.fn()} />)
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
  })

  it('deve renderizar a descrição do prato', () => {
    render(<FoodCard food={mockFood} onAddToCart={vi.fn()} />)
    expect(
      screen.getByText('Molho de tomate, mussarela e manjericão fresco.'),
    ).toBeInTheDocument()
  })

  it('deve renderizar o preço formatado em BRL', () => {
    render(<FoodCard food={mockFood} onAddToCart={vi.fn()} />)
    expect(screen.getByText(/R\$\s*45,90/i)).toBeInTheDocument()
  })

  it('deve renderizar a imagem com alt correto', () => {
    render(<FoodCard food={mockFood} onAddToCart={vi.fn()} />)
    expect(screen.getByAltText('Pizza Margherita')).toBeInTheDocument()
  })

  it('deve renderizar o botão "Adicionar ao carrinho"', () => {
    render(<FoodCard food={mockFood} onAddToCart={vi.fn()} />)
    expect(
      screen.getByRole('button', { name: /adicionar ao carrinho/i }),
    ).toBeInTheDocument()
  })

  it('deve chamar onAddToCart com o item correto ao clicar no botão', async () => {
    const onAddToCart = vi.fn()
    render(<FoodCard food={mockFood} onAddToCart={onAddToCart} />)
    await userEvent.click(screen.getByRole('button', { name: /adicionar ao carrinho/i }))
    expect(onAddToCart).toHaveBeenCalledWith(mockFood)
    expect(onAddToCart).toHaveBeenCalledOnce()
  })
})
