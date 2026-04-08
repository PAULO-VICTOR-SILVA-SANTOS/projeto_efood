import type { FoodItem } from '../../types'
import {
  Overlay,
  CartSidebar,
  CartTitle,
  CartItemsList,
  CartItem,
  CartItemImage,
  CartItemInfo,
  CartItemName,
  CartItemPrice,
  RemoveButton,
  CartDivider,
  CartTotal,
  CheckoutButton,
  EmptyCart,
} from './styles'

type CartItemType = {
  food: FoodItem
  quantity: number
}

type CartProps = {
  isOpen: boolean
  items: CartItemType[]
  onClose: () => void
  onRemoveItem: (foodId: number) => void
}

const Cart = ({ isOpen, items, onClose, onRemoveItem }: CartProps) => {
  if (!isOpen) return null

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const total = items.reduce((acc, item) => acc + item.food.preco * item.quantity, 0)

  return (
    <>
      <Overlay onClick={onClose} />
      <CartSidebar>
        {items.length === 0 ? (
          <EmptyCart>O carrinho está vazio, adicione pelo menos um produto para continuar.</EmptyCart>
        ) : (
          <>
            <CartTitle>Carrinho de compras</CartTitle>
            <CartItemsList>
              {items.map(({ food, quantity }) => (
                <CartItem key={food.id}>
                  <CartItemImage src={food.foto} alt={food.nome} />
                  <CartItemInfo>
                    <CartItemName>{food.nome}</CartItemName>
                    <CartItemPrice>
                      {quantity}x {formatPrice(food.preco)}
                    </CartItemPrice>
                  </CartItemInfo>
                  <RemoveButton onClick={() => onRemoveItem(food.id)}>Remover</RemoveButton>
                </CartItem>
              ))}
            </CartItemsList>
            <CartDivider />
            <CartTotal>
              <span>Valor total</span>
              <span>{formatPrice(total)}</span>
            </CartTotal>
            <CheckoutButton>Continuar com a entrega</CheckoutButton>
          </>
        )}
      </CartSidebar>
    </>
  )
}

export default Cart
