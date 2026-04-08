import { describe, it, expect } from 'vitest'
import { breakpoints, colors } from '../styles/theme'

describe('Theme - Breakpoints', () => {
  it('deve definir breakpoints para desktop, tablet e mobile', () => {
    expect(breakpoints.desktop).toBeDefined()
    expect(breakpoints.tablet).toBeDefined()
    expect(breakpoints.mobile).toBeDefined()
  })

  it('deve definir breakpoint de desktop como 1024px', () => {
    expect(breakpoints.desktop).toBe('1024px')
  })

  it('deve definir breakpoint de tablet como 768px', () => {
    expect(breakpoints.tablet).toBe('768px')
  })

  it('deve definir breakpoint de mobile como 480px', () => {
    expect(breakpoints.mobile).toBe('480px')
  })

  it('mobile deve ser menor que tablet (ordem correta)', () => {
    const mobileNum = parseInt(breakpoints.mobile)
    const tabletNum = parseInt(breakpoints.tablet)
    const desktopNum = parseInt(breakpoints.desktop)

    expect(mobileNum).toBeLessThan(tabletNum)
    expect(tabletNum).toBeLessThan(desktopNum)
  })
})

describe('Theme - Colors', () => {
  it('deve definir todas as cores necessárias', () => {
    expect(colors.salmon).toBeDefined()
    expect(colors.cream).toBeDefined()
    expect(colors.darkGray).toBeDefined()
    expect(colors.white).toBeDefined()
    expect(colors.black).toBeDefined()
    expect(colors.lightGray).toBeDefined()
  })

  it('deve ter cor salmon correta (#E66767)', () => {
    expect(colors.salmon).toBe('#E66767')
  })

  it('deve ter cor cream correta (#FFF8F2)', () => {
    expect(colors.cream).toBe('#FFF8F2')
  })
})
