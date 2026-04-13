import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'
import heroBg from '../../assets/hero.png'

export const HeaderContainer = styled.header<{ $isRestaurantPage?: boolean }>`
  background-color: ${({ $isRestaurantPage }) =>
    $isRestaurantPage ? colors.darkGray : colors.cream};
  ${({ $isRestaurantPage }) =>
    !$isRestaurantPage
      ? `
      background-image: url(${heroBg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center top;
    `
      : ''}
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 16px;
    gap: 16px;
  }
`

export const Logo = styled.img`
  width: 125px;

  @media (max-width: ${breakpoints.mobile}) {
    width: 102px;
  }
`

export const CartButton = styled.button`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  line-height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
    text-align: right;
  }
`

export const HeroSection = styled.section`
  text-align: center;
  padding: 0 0 80px;
`

export const HeroContent = styled.div`
  max-width: 539px;
  margin: 0 auto;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
  }
`

export const HeroTitle = styled.h1`
  color: ${colors.salmon};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
  margin-top: 138px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 48px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    line-height: 34px;
    margin-top: 32px;
  }
`

export const HeroSubtitle = styled.p`
  color: ${colors.salmon};
  font-size: 16px;
  line-height: 24px;
  margin-top: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    line-height: 22px;
  }
`
