import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 998;
`

export const CartSidebar = styled.aside`
  position: fixed;
  top: 0;
  right: 0;
  width: 360px;
  height: 100vh;
  background-color: ${colors.salmon};
  z-index: 999;
  padding: 32px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow-y: auto;

  @media (max-width: ${breakpoints.mobile}) {
    width: min(100vw, 320px);
    padding: 24px 12px;
  }
`

export const CartTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${colors.cream};
`

export const CartItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const CartItem = styled.li`
  display: flex;
  gap: 8px;
  background-color: ${colors.cream};
  padding: 8px;
  position: relative;
`

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const CartItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const CartItemName = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.darkGray};

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const CartItemPrice = styled.p`
  font-size: 14px;
  color: ${colors.darkGray};
`

export const RemoveButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${colors.darkGray};
  font-size: 12px;
  text-decoration: underline;
`

export const CartDivider = styled.hr`
  border: 1px solid ${colors.lightOrange};
  margin: 8px 0;
`

export const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
`

export const CheckoutButton = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border-radius: 4px;
  width: 100%;
  margin-top: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.lightOrange};
  }
`

export const EmptyCart = styled.p`
  color: ${colors.cream};
  font-size: 14px;
  text-align: center;
  margin-top: 24px;
`
