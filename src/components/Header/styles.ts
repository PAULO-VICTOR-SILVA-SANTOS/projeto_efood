import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const HeaderContainer = styled.header<{ $isRestaurantPage?: boolean }>`
  background-color: ${({ $isRestaurantPage }) =>
    $isRestaurantPage ? colors.darkGray : colors.cream};
  padding: 24px 0;
`

export const HeaderContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
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
  font-size: 14px;
  font-weight: 900;
  line-height: 22px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 12px;
    line-height: 18px;
    text-align: right;
  }
`

export const HeroSection = styled.section`
  background-color: ${colors.salmon};
  padding: 40px 0;
  text-align: center;
`

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
  }
`

export const HeroTitle = styled.h1`
  color: ${colors.cream};
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 28px;
    line-height: 34px;
  }
`

export const HeroSubtitle = styled.p`
  color: ${colors.cream};
  font-size: 16px;
  line-height: 24px;
  margin-top: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    line-height: 22px;
  }
`

export const RestaurantBanner = styled.div<{ $bgImage: string }>`
  height: 280px;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  position: relative;
`

export const RestaurantBannerOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
`

export const RestaurantBannerTitle = styled.h2`
  position: absolute;
  bottom: 24px;
  left: 24px;
  color: ${colors.white};
  font-size: 36px;
  font-weight: 900;
`
