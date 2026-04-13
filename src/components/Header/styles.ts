import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors, breakpoints } from '../../styles/theme'

export const HeaderContainer = styled.header<{ $isRestaurantPage?: boolean }>`
  background-color: ${colors.cream};
  background-image:
    linear-gradient(45deg, rgba(230, 103, 103, 0.06) 25%, transparent 25%),
    linear-gradient(-45deg, rgba(230, 103, 103, 0.06) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(230, 103, 103, 0.06) 75%),
    linear-gradient(-45deg, transparent 75%, rgba(230, 103, 103, 0.06) 75%);
  background-size: 24px 24px;
  background-position: 0 0, 0 12px, 12px -12px, -12px 0;
  padding: 24px 0 40px;
`

export const HeaderContent = styled.div<{ $isRestaurantPage?: boolean }>`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: ${({ $isRestaurantPage }) =>
    $isRestaurantPage ? 'space-between' : 'center'};

  div {
    width: 180px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 24px;

    div {
      width: 130px;
    }
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
    gap: 16px;

    div {
      width: 90px;
    }
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
  line-height: 21px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: right;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 14px;
    line-height: 18px;
  }
`

export const HomeLink = styled(Link)`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`

export const HeroSection = styled.section`
  padding-top: 138px;
  text-align: center;

  @media (max-width: ${breakpoints.mobile}) {
    padding-top: 72px;
  }
`

export const HeroContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 24px;

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
  max-width: 539px;
  margin: 0 auto;

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
