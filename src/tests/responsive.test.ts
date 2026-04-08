import { describe, it, expect, vi, beforeEach } from 'vitest'
import { breakpoints } from '../styles/theme'

function simulateViewport(width: number) {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  })

  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => {
      const maxWidthMatch = query.match(/max-width:\s*(\d+)px/)
      const minWidthMatch = query.match(/min-width:\s*(\d+)px/)
      let matches = false

      if (maxWidthMatch) {
        matches = width <= parseInt(maxWidthMatch[1])
      } else if (minWidthMatch) {
        matches = width >= parseInt(minWidthMatch[1])
      }

      return {
        matches,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      }
    },
  })
}

describe('Responsividade - Definição dos Breakpoints', () => {
  it('breakpoint mobile deve ser 480px', () => {
    expect(parseInt(breakpoints.mobile)).toBe(480)
  })

  it('breakpoint tablet deve ser 768px', () => {
    expect(parseInt(breakpoints.tablet)).toBe(768)
  })

  it('breakpoint desktop deve ser 1024px', () => {
    expect(parseInt(breakpoints.desktop)).toBe(1024)
  })

  it('breakpoints devem estar em formato px válido', () => {
    expect(breakpoints.mobile).toMatch(/^\d+px$/)
    expect(breakpoints.tablet).toMatch(/^\d+px$/)
    expect(breakpoints.desktop).toMatch(/^\d+px$/)
  })
})

describe('Responsividade - Simulação de Viewport Mobile (≤ 480px)', () => {
  beforeEach(() => simulateViewport(375))

  it('viewport de 375px deve corresponder ao breakpoint mobile', () => {
    const isMobile = window.matchMedia(`(max-width: ${breakpoints.mobile})`).matches
    expect(isMobile).toBe(true)
  })

  it('viewport de 375px deve corresponder ao breakpoint tablet', () => {
    const isTablet = window.matchMedia(`(max-width: ${breakpoints.tablet})`).matches
    expect(isTablet).toBe(true)
  })

  it('viewport de 375px NÃO deve corresponder ao min-width desktop', () => {
    const isDesktop = window.matchMedia(`(min-width: ${breakpoints.desktop})`).matches
    expect(isDesktop).toBe(false)
  })
})

describe('Responsividade - Simulação de Viewport Tablet (≤ 768px)', () => {
  beforeEach(() => simulateViewport(768))

  it('viewport de 768px deve corresponder ao breakpoint tablet', () => {
    const isTablet = window.matchMedia(`(max-width: ${breakpoints.tablet})`).matches
    expect(isTablet).toBe(true)
  })

  it('viewport de 768px NÃO deve corresponder ao breakpoint mobile', () => {
    const isMobile = window.matchMedia(`(max-width: ${breakpoints.mobile})`).matches
    expect(isMobile).toBe(false)
  })

  it('viewport de 600px deve ser reconhecido como tablet', () => {
    simulateViewport(600)
    const isTablet = window.matchMedia(`(max-width: ${breakpoints.tablet})`).matches
    expect(isTablet).toBe(true)
  })

  it('viewport de 600px NÃO deve ser reconhecido como mobile', () => {
    simulateViewport(600)
    const isMobile = window.matchMedia(`(max-width: ${breakpoints.mobile})`).matches
    expect(isMobile).toBe(false)
  })
})

describe('Responsividade - Simulação de Viewport Desktop (> 1024px)', () => {
  beforeEach(() => simulateViewport(1280))

  it('viewport de 1280px deve corresponder ao min-width desktop', () => {
    const isDesktop = window.matchMedia(`(min-width: ${breakpoints.desktop})`).matches
    expect(isDesktop).toBe(true)
  })

  it('viewport de 1280px NÃO deve corresponder ao breakpoint mobile', () => {
    const isMobile = window.matchMedia(`(max-width: ${breakpoints.mobile})`).matches
    expect(isMobile).toBe(false)
  })

  it('viewport de 1280px NÃO deve corresponder ao breakpoint tablet', () => {
    const isTablet = window.matchMedia(`(max-width: ${breakpoints.tablet})`).matches
    expect(isTablet).toBe(false)
  })
})

describe('Responsividade - Meta Viewport', () => {
  it('deve ter innerWidth acessível no ambiente de teste', () => {
    simulateViewport(1280)
    expect(window.innerWidth).toBe(1280)
  })

  it('deve atualizar innerWidth ao simular dispositivo mobile', () => {
    simulateViewport(390)
    expect(window.innerWidth).toBe(390)
  })

  it('deve atualizar innerWidth ao simular tablet', () => {
    simulateViewport(768)
    expect(window.innerWidth).toBe(768)
  })
})
