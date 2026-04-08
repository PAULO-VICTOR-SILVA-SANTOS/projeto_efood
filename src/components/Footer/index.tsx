import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  SocialLinks,
  SocialIcon,
  FooterText,
} from './styles'
import logo from '../../assets/images/logo.svg'
import facebookIcon from '../../assets/images/icon-facebook.svg'
import xIcon from '../../assets/images/icon-x.svg'
import instagramIcon from '../../assets/images/icon-instagram.svg'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo src={logo} alt="eFood logo" />
        <SocialLinks>
          <SocialIcon href="#" aria-label="Facebook">
            <img src={facebookIcon} alt="Facebook" />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter/X">
            <img src={xIcon} alt="Twitter" />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <img src={instagramIcon} alt="Instagram" />
          </SocialIcon>
        </SocialLinks>
        <FooterText>
          A eFood é uma plataforma para divulgação de perfis de restaurantes, pratos e itens de
          alimentação. &copy; 2026 eFood
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
