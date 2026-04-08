import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Footer from '../../components/Footer'

describe('Footer', () => {
  it('deve renderizar o logo', () => {
    render(<Footer />)
    expect(screen.getByAltText('eFood logo')).toBeInTheDocument()
  })

  it('deve renderizar o ícone do Facebook', () => {
    render(<Footer />)
    expect(screen.getByAltText('Facebook')).toBeInTheDocument()
  })

  it('deve renderizar o ícone do Twitter', () => {
    render(<Footer />)
    expect(screen.getByAltText('Twitter')).toBeInTheDocument()
  })

  it('deve renderizar o ícone do Instagram', () => {
    render(<Footer />)
    expect(screen.getByAltText('Instagram')).toBeInTheDocument()
  })

  it('deve renderizar os 3 links de redes sociais', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter/X')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('deve renderizar o texto de copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/eFood é uma plataforma/i)).toBeInTheDocument()
  })

  it('deve renderizar o ano de copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 eFood/i)).toBeInTheDocument()
  })
})
