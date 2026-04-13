import { useState, type FormEvent } from 'react'
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
  Form,
  FieldGroup,
  Label,
  Input,
  InputRow,
  ButtonGroup,
  TextBlock,
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
  onClearCart?: () => void
}

const Cart = ({ isOpen, items, onClose, onRemoveItem, onClearCart }: CartProps) => {
  const [step, setStep] = useState<'cart' | 'delivery' | 'payment' | 'confirmation'>('cart')
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [number, setNumber] = useState('')
  const [complement, setComplement] = useState('')
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cvv, setCvv] = useState('')
  const [expiresMonth, setExpiresMonth] = useState('')
  const [expiresYear, setExpiresYear] = useState('')
  const [orderId] = useState(() => Math.floor(1000000000 + Math.random() * 9000000000))

  const digitsOnly = (value: string) => value.replace(/\D/g, '')

  const formatZipCode = (value: string) => {
    const digits = digitsOnly(value).slice(0, 8)
    if (digits.length <= 5) return digits
    return `${digits.slice(0, 5)}-${digits.slice(5)}`
  }

  const formatCardNumber = (value: string) => {
    const digits = digitsOnly(value).slice(0, 16)
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ').trim()
  }

  const formatCvv = (value: string) => digitsOnly(value).slice(0, 3)

  const formatMonth = (value: string) => {
    const digits = digitsOnly(value).slice(0, 2)
    if (digits.length < 2) return digits
    const numeric = Number(digits)
    if (numeric <= 0) return '01'
    if (numeric > 12) return '12'
    return digits
  }

  const formatYear = (value: string) => digitsOnly(value).slice(0, 4)

  if (!isOpen) return null

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  const total = items.reduce((acc, item) => acc + item.food.preco * item.quantity, 0)

  const handleDeliverySubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStep('payment')
  }

  const handlePaymentSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStep('confirmation')
    onClearCart?.()
  }

  const handleClose = () => {
    setStep('cart')
    onClose()
  }

  return (
    <>
      <Overlay onClick={handleClose} />
      <CartSidebar>
        {step === 'cart' && items.length === 0 ? (
          <EmptyCart>O carrinho está vazio, adicione pelo menos um produto para continuar.</EmptyCart>
        ) : null}

        {step === 'cart' && items.length > 0 ? (
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
            <CheckoutButton type="button" onClick={() => setStep('delivery')}>
              Continuar com a entrega
            </CheckoutButton>
          </>
        ) : null}

        {step === 'delivery' ? (
          <>
            <CartTitle>Entrega</CartTitle>
            <Form onSubmit={handleDeliverySubmit}>
              <FieldGroup>
                <Label htmlFor="fullName">Quem irá receber</Label>
                <Input
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="address">Endereço</Label>
                <Input
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" value={city} onChange={(e) => setCity(e.target.value)} required />
              </FieldGroup>

              <InputRow>
                <FieldGroup>
                  <Label htmlFor="zipCode">CEP</Label>
                  <Input
                    id="zipCode"
                    value={zipCode}
                    onChange={(e) => setZipCode(formatZipCode(e.target.value))}
                    placeholder="00000-000"
                    inputMode="numeric"
                    required
                  />
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor="number">Número</Label>
                  <Input
                    id="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    inputMode="numeric"
                    required
                  />
                </FieldGroup>
              </InputRow>

              <FieldGroup>
                <Label htmlFor="complement">Complemento (opcional)</Label>
                <Input
                  id="complement"
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                />
              </FieldGroup>

              <ButtonGroup>
                <CheckoutButton type="submit">Continuar com o pagamento</CheckoutButton>
                <CheckoutButton type="button" onClick={() => setStep('cart')}>
                  Voltar para o carrinho
                </CheckoutButton>
              </ButtonGroup>
            </Form>
          </>
        ) : null}

        {step === 'payment' ? (
          <>
            <CartTitle>Pagamento - Valor a pagar {formatPrice(total)}</CartTitle>
            <Form onSubmit={handlePaymentSubmit}>
              <FieldGroup>
                <Label htmlFor="cardName">Nome no cartão</Label>
                <Input
                  id="cardName"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  required
                />
              </FieldGroup>

              <InputRow $columns="2fr 1fr">
                <FieldGroup>
                  <Label htmlFor="cardNumber">Número do cartão</Label>
                  <Input
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="0000 0000 0000 0000"
                    inputMode="numeric"
                    required
                  />
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    value={cvv}
                    onChange={(e) => setCvv(formatCvv(e.target.value))}
                    placeholder="000"
                    inputMode="numeric"
                    required
                  />
                </FieldGroup>
              </InputRow>

              <InputRow>
                <FieldGroup>
                  <Label htmlFor="expiresMonth">Mês de vencimento</Label>
                  <Input
                    id="expiresMonth"
                    value={expiresMonth}
                    onChange={(e) => setExpiresMonth(formatMonth(e.target.value))}
                    placeholder="MM"
                    inputMode="numeric"
                    required
                  />
                </FieldGroup>

                <FieldGroup>
                  <Label htmlFor="expiresYear">Ano de vencimento</Label>
                  <Input
                    id="expiresYear"
                    value={expiresYear}
                    onChange={(e) => setExpiresYear(formatYear(e.target.value))}
                    placeholder="AAAA"
                    inputMode="numeric"
                    required
                  />
                </FieldGroup>
              </InputRow>

              <ButtonGroup>
                <CheckoutButton type="submit">Finalizar pagamento</CheckoutButton>
                <CheckoutButton type="button" onClick={() => setStep('delivery')}>
                  Voltar para a edição de endereço
                </CheckoutButton>
              </ButtonGroup>
            </Form>
          </>
        ) : null}

        {step === 'confirmation' ? (
          <>
            <CartTitle>Pedido realizado - {orderId}</CartTitle>
            <TextBlock>
              Estamos felizes em informar que seu pedido já está em processo de preparação e, em
              breve, será entregue no endereço fornecido.
            </TextBlock>
            <TextBlock>
              Lembre-se de higienizar as mãos após o recebimento do pedido, garantindo assim sua
              segurança e bem-estar durante a refeição.
            </TextBlock>
            <TextBlock>
              Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom
              apetite!
            </TextBlock>
            <CheckoutButton type="button" onClick={handleClose}>
              Concluir
            </CheckoutButton>
          </>
        ) : null}
      </CartSidebar>
    </>
  )
}

export default Cart
