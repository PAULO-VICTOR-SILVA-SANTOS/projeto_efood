import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from '../../components/Header'

const renderHeader = (props?: Partial<Parameters<typeof Header>[0]>) =>
  render(
    <MemoryRouter>
      <Header {...props} />
    </MemoryRouter>,
  )

describe('Header', () => {
  it('deve renderizar o logo', () => {
    renderHeader()
    expect(screen.getByAltText('eFood logo')).toBeInTheDocument()
  })

  it('deve renderizar a seção hero na página inicial', () => {
    renderHeader({ isRestaurantPage: false })
    expect(
      screen.getByText(/Viva experiências gastronômicas no conforto da sua casa/i),
    ).toBeInTheDocument()
  })

  it('deve renderizar o subtítulo hero na página inicial', () => {
    renderHeader({ isRestaurantPage: false })
    expect(screen.getByText(/Com o eFood, você tem acesso/i)).toBeInTheDocument()
  })

  it('não deve renderizar a seção hero na página de restaurante', () => {
    renderHeader({ isRestaurantPage: true })
    expect(
      screen.queryByText(/Viva experiências gastronômicas/i),
    ).not.toBeInTheDocument()
  })

  it('deve exibir "0 produtos no carrinho" por padrão', () => {
    renderHeader()
    expect(
      screen.getByRole('button', { name: /0\s*produtos\s*no\s*carrinho/i }),
    ).toBeInTheDocument()
  })

  it('deve exibir "1 produto no carrinho" no singular', () => {
    renderHeader({ cartItemsCount: 1 })
    expect(screen.getByText(/1 produto no carrinho/i)).toBeInTheDocument()
  })

  it('deve exibir "3 produtos no carrinho" no plural', () => {
    renderHeader({ cartItemsCount: 3 })
    expect(screen.getByText(/3 produtos no carrinho/i)).toBeInTheDocument()
  })

  it('deve chamar onCartOpen ao clicar no botão do carrinho', () => {
    const onCartOpen = vi.fn()
    renderHeader({ onCartOpen })
    screen.getByRole('button', { name: /0\s*produtos\s*no\s*carrinho/i }).click()
    expect(onCartOpen).toHaveBeenCalledOnce()
  })

  it('deve ter link para a página inicial no logo', () => {
    renderHeader()
    const logoLink = screen.getByAltText('eFood logo').closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
