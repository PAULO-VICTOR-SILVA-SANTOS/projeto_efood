import { useState } from 'react'
import { restaurants } from '../../data/restaurants'
import type { FoodItem } from '../../types'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import RestaurantCard from '../../components/RestaurantCard'
import Cart from '../../components/Cart'
import { RestaurantList, Grid } from './styles'

type CartItemType = {
  food: FoodItem
  quantity: number
}

const Home = () => {
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItemType[]>([])

  const handleRemoveFromCart = (foodId: number) => {
    setCartItems((prev) => prev.filter((item) => item.food.id !== foodId))
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <>
      <Header
        isRestaurantPage={false}
        cartItemsCount={totalItems}
        onCartOpen={() => setCartOpen(true)}
      />
      <RestaurantList>
        <Grid>
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </Grid>
      </RestaurantList>
      <Footer />
      <Cart
        isOpen={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onRemoveItem={handleRemoveFromCart}
      />
    </>
  )
}

export default Home
