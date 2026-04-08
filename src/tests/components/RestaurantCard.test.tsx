import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RestaurantCard from '../../components/RestaurantCard'
import type { Restaurant } from '../../types'

const mockedNavigate = vi.fn()

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom')
  return { ...actual, useNavigate: () => mockedNavigate }
})

const mockRestaurant: Restaurant = {
  id: 1,
  titulo: 'La Bella Vista',
  destacado: true,
  tipo: 'Italiana / Massa',
  avaliacao: 4.8,
  descricao: 'O melhor restaurante italiano da cidade.',
  capa: 'https://example.com/capa.jpg',
  cardapio: [],
}

const renderCard = (restaurant = mockRestaurant) =>
  render(
    <MemoryRouter>
      <RestaurantCard restaurant={restaurant} />
    </MemoryRouter>,
  )

describe('RestaurantCard', () => {
  beforeEach(() => {
    mockedNavigate.mockClear()
  })

  it('deve renderizar o nome do restaurante', () => {
    renderCard()
    expect(screen.getByText('La Bella Vista')).toBeInTheDocument()
  })

  it('deve renderizar a avaliação', () => {
    renderCard()
    expect(screen.getByText('4.8')).toBeInTheDocument()
  })

  it('deve renderizar a descrição', () => {
    renderCard()
    expect(screen.getByText('O melhor restaurante italiano da cidade.')).toBeInTheDocument()
  })

  it('deve renderizar a tag de destaque quando destacado=true', () => {
    renderCard()
    expect(screen.getByText('Destaque da semana')).toBeInTheDocument()
  })

  it('não deve renderizar a tag de destaque quando destacado=false', () => {
    renderCard({ ...mockRestaurant, destacado: false })
    expect(screen.queryByText('Destaque da semana')).not.toBeInTheDocument()
  })

  it('deve renderizar as tags de tipo separadas por "/"', () => {
    renderCard()
    expect(screen.getByText('Italiana')).toBeInTheDocument()
    expect(screen.getByText('Massa')).toBeInTheDocument()
  })

  it('deve renderizar o botão "Saiba mais"', () => {
    renderCard()
    expect(screen.getByRole('button', { name: /saiba mais/i })).toBeInTheDocument()
  })

  it('deve renderizar a imagem de capa com alt correto', () => {
    renderCard()
    expect(screen.getByAltText('La Bella Vista')).toBeInTheDocument()
  })

  it('deve renderizar o ícone de estrela', () => {
    renderCard()
    expect(screen.getByAltText('estrela')).toBeInTheDocument()
  })

  it('deve navegar ao clicar em "Saiba mais"', () => {
    mockedNavigate.mockClear()
    renderCard()
    screen.getByRole('button', { name: /saiba mais/i }).click()
    expect(mockedNavigate).toHaveBeenCalledWith('/restaurante/1')
    expect(mockedNavigate).toHaveBeenCalledOnce()
  })
})
