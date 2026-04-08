import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  CartButton,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
} from './styles'

type HeaderProps = {
  isRestaurantPage?: boolean
  cartItemsCount?: number
  onCartOpen?: () => void
}

const Header = ({ isRestaurantPage = false, cartItemsCount = 0, onCartOpen }: HeaderProps) => {
  return (
    <HeaderContainer $isRestaurantPage={isRestaurantPage}>
      <HeaderContent>
        <Link to="/">
          <Logo src={logo} alt="eFood logo" />
        </Link>
        <CartButton onClick={onCartOpen}>
          {cartItemsCount} produto{cartItemsCount !== 1 ? 's' : ''} no carrinho
        </CartButton>
      </HeaderContent>
      {!isRestaurantPage && (
        <HeroSection>
          <HeroContent>
            <HeroTitle>Viva experiências gastronômicas no conforto da sua casa!</HeroTitle>
            <HeroSubtitle>
              Com o eFood, você tem acesso aos melhores restaurantes da sua cidade e os pratos
              favoritos chegam até você.
            </HeroSubtitle>
          </HeroContent>
        </HeroSection>
      )}
    </HeaderContainer>
  )
}

export default Header
