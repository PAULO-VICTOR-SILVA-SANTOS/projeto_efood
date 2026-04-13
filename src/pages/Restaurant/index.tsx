import { useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { restaurants } from '../../data/restaurants'
import type { FoodItem } from '../../types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FoodCard from '../../components/FoodCard'
import Cart from '../../components/Cart'
import {
  RestaurantPageContainer,
  Banner,
  BannerCategory,
  BannerTitle,
  MenuSection,
  FoodGrid,
} from './styles'

type CartItemType = {
  food: FoodItem
  quantity: number
}

const Restaurant = () => {
  const { id } = useParams<{ id: string }>()
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])

  const restaurant = restaurants.find((r) => r.id === Number(id))

  if (!restaurant) return <Navigate to="/" />

  const handleAddToCart = (food: FoodItem) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.food.id === food.id)
      if (existing) {
        return prev.map((item) =>
          item.food.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...prev, { food, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const handleRemoveFromCart = (foodId: number) => {
    setCartItems((prev) => prev.filter((item) => item.food.id !== foodId))
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <RestaurantPageContainer>
      <Header
        isRestaurantPage
        cartItemsCount={totalItems}
        onCartOpen={() => setCartOpen(true)}
      />
      <Banner $bgImage={restaurant.capa}>
        <BannerCategory>{restaurant.tipo}</BannerCategory>
        <BannerTitle>{restaurant.titulo}</BannerTitle>
      </Banner>
      <MenuSection>
        <FoodGrid>
          {restaurant.cardapio.map((food) => (
            <FoodCard key={food.id} food={food} onAddToCart={handleAddToCart} />
          ))}
        </FoodGrid>
      </MenuSection>
      <Footer />
      <Cart
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={() => setCartItems([])}
      />
    </RestaurantPageContainer>
  )
}

export default Restaurant
