import {
  FooterContainer,
  FooterContent,
  FooterLogo,
  SocialLinks,
  SocialIcon,
  FooterText,
} from './styles'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo
          src="https://raw.githubusercontent.com/felipeAguiarCode/react-play/main/src/assets/logo.svg"
          alt="eFood logo"
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
          }}
        />
        <SocialLinks>
          <SocialIcon href="#" aria-label="Facebook">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="Facebook"
            />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Twitter/X">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
              alt="Twitter"
            />
          </SocialIcon>
          <SocialIcon href="#" aria-label="Instagram">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </SocialIcon>
        </SocialLinks>
        <FooterText>
          A eFood é uma plataforma para divulgação de perfis de restaurantes, pratos e itens de
          alimentação. &copy; 2024 eFood
        </FooterText>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
