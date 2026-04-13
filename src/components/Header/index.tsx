import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import {
  HeaderContainer,
  HeaderContent,
  HomeLink,
  Logo,
  CartButton,
  HeroSection,
  HeroContent,
  HeroTitle,
} from './styles'

type HeaderProps = {
  isRestaurantPage?: boolean
  cartItemsCount?: number
  onCartOpen?: () => void
}

const Header = ({ isRestaurantPage = false, cartItemsCount = 0, onCartOpen }: HeaderProps) => {
  return (
    <HeaderContainer $isRestaurantPage={isRestaurantPage}>
      <HeaderContent $isRestaurantPage={isRestaurantPage}>
        {isRestaurantPage ? <HomeLink to="/">Restaurantes</HomeLink> : <div />}
        <Link to="/">
          <Logo src={logo} alt="eFood logo" />
        </Link>
        {isRestaurantPage ? (
          <CartButton onClick={onCartOpen}>
            {cartItemsCount} produto{cartItemsCount !== 1 ? 's' : ''} no carrinho
          </CartButton>
        ) : (
          <div />
        )}
      </HeaderContent>
      {!isRestaurantPage && (
        <HeroSection>
          <HeroContent>
            <HeroTitle>Viva experiências gastronômicas no conforto da sua casa!</HeroTitle>
          </HeroContent>
        </HeroSection>
      )}
    </HeaderContainer>
  )
}

export default Header
