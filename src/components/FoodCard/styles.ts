import styled from 'styled-components'
import { colors } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${colors.cream};
  border: 1px solid ${colors.salmon};
  max-width: 304px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const FoodImage = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
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
  color: ${colors.darkGray};
`

export const FoodDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.darkGray};
  flex: 1;
`

export const FoodPrice = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.darkGray};
`

export const AddButton = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border-radius: 4px;
  width: 100%;
  margin-top: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d4584c;
  }
`
