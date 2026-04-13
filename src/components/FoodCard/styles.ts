import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${colors.salmon};
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FoodImageWrapper = styled.div`
  padding: 8px 8px 0;
  background-color: ${colors.salmon};
`

export const FoodImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
    height: 140px;
  }
`

export const FoodContent = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const FoodName = styled.h4`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.lightOrange};
`

export const FoodDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.lightOrange};
  flex: 1;
`

export const FoodPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.lightOrange};
`

export const AddButton = styled.button`
  background-color: ${colors.lightOrange};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border: none;
  width: 100%;
  margin-top: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #ffe0c5;
  }
`
