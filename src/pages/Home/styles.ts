import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const RestaurantList = styled.section`
  max-width: 1024px;
  margin: 0 auto;
  padding: 80px 120px;

  @media (max-width: ${breakpoints.tablet}) {
    padding: 48px 24px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    padding: 32px 16px;
  }
`

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.darkGray};
  margin-bottom: 48px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`
