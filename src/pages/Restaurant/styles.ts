import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const RestaurantPageContainer = styled.main``

export const Banner = styled.div<{ $bgImage: string }>`
  height: 280px;
  background-image: url(${({ $bgImage }) => $bgImage});
  background-size: cover;
  background-position: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  }

  @media (max-width: ${breakpoints.mobile}) {
    height: 210px;
  }
`

export const BannerCategory = styled.span`
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1024px;
  padding: 0 24px;
  color: ${colors.white};
  font-size: 32px;
  font-weight: 100;
  z-index: 1;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 24px;
    padding: 0 16px;
  }
`

export const BannerTitle = styled.h2`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 1024px;
  padding: 0 24px;
  color: ${colors.white};
  font-size: 36px;
  font-weight: 900;
  z-index: 1;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
    font-size: 28px;
  }
`

export const MenuSection = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 56px 24px 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 40px 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 28px 16px;
  }
`

export const FoodGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`
