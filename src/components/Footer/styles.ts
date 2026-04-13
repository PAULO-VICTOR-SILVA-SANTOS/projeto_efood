import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const FooterContainer = styled.footer`
  background-color: ${colors.salmon};
  padding: 40px 0;
  text-align: center;
`

export const FooterContent = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 0 16px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 0 16px;
    gap: 24px;
  }
`

export const FooterLogo = styled.img`
  width: 125px;
`

export const SocialLinks = styled.div`
  display: flex;
  gap: 8px;
`

export const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: 24px;
    filter: brightness(0) invert(1);
  }
`

export const FooterText = styled.p`
  color: ${colors.cream};
  font-size: 10px;
  line-height: 16px;
  max-width: 480px;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 11px;
    line-height: 18px;
  }
`
