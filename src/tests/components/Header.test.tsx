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

  it('não deve renderizar o subtítulo hero na página inicial', () => {
    renderHeader({ isRestaurantPage: false })
    expect(screen.queryByText(/Com o eFood, você tem acesso/i)).not.toBeInTheDocument()
  })

  it('não deve renderizar a seção hero na página de restaurante', () => {
    renderHeader({ isRestaurantPage: true })
    expect(
      screen.queryByText(/Viva experiências gastronômicas/i),
    ).not.toBeInTheDocument()
  })

  it('não deve exibir botão de carrinho na página inicial', () => {
    renderHeader()
    expect(
      screen.queryByRole('button', { name: /produtos?\s*no\s*carrinho/i }),
    ).not.toBeInTheDocument()
  })

  it('deve exibir "1 produto no carrinho" no singular na página de restaurante', () => {
    renderHeader({ isRestaurantPage: true, cartItemsCount: 1 })
    expect(screen.getByText(/1 produto no carrinho/i)).toBeInTheDocument()
  })

  it('deve exibir "3 produtos no carrinho" no plural na página de restaurante', () => {
    renderHeader({ isRestaurantPage: true, cartItemsCount: 3 })
    expect(screen.getByText(/3 produtos no carrinho/i)).toBeInTheDocument()
  })

  it('deve chamar onCartOpen ao clicar no botão do carrinho na página de restaurante', () => {
    const onCartOpen = vi.fn()
    renderHeader({ isRestaurantPage: true, onCartOpen })
    screen.getByRole('button', { name: /0\s*produtos\s*no\s*carrinho/i }).click()
    expect(onCartOpen).toHaveBeenCalledOnce()
  })

  it('deve ter link para a página inicial no logo', () => {
    renderHeader()
    const logoLink = screen.getByAltText('eFood logo').closest('a')
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
