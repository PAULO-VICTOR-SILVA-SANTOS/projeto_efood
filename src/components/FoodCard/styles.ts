import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${colors.salmon};
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8px;
`

export const FoodImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;

  @media (max-width: ${breakpoints.mobile}) {
    height: 190px;
  }
`

export const FoodContent = styled.div`
  padding-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`

export const FoodName = styled.h4`
  font-size: 16px;
  font-weight: 900;
  color: ${colors.cream};
`

export const FoodDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.cream};
  flex: 1;
`

export const FoodPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.cream};
`

export const AddButton = styled.button`
  background-color: ${colors.cream};
  color: ${colors.salmon};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  width: 100%;
  margin-top: 8px;
`
