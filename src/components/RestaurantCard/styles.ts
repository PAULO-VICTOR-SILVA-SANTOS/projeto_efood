import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGray};
  max-width: 472px;
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const CardImage = styled.img`
  width: 100%;
  height: 217px;
  object-fit: cover;
  object-position: left center;

  @media (max-width: ${breakpoints.mobile}) {
    height: 180px;
  }
`

export const CardContent = styled.div`
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: ${colors.darkGray};
  line-height: 22px;
  text-align: left;
  flex: 1;
  min-width: 0;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: ${colors.darkGray};

  img {
    width: 21px;
    height: 21px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 16px;
  }
`

export const CardDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  color: ${colors.darkGray};
  flex: 1;
`

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.cream};
  background-color: ${colors.salmon};
  padding: 4px 6px;
  border-radius: 2px;
`

export const FeaturedTag = styled(Tag)`
  background-color: ${colors.yellow};
  color: ${colors.darkGray};
`

export const CardButton = styled.button`
  background-color: ${colors.salmon};
  color: ${colors.cream};
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-top: 12px;
  width: 100%;
  text-align: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d4584c;
  }
`
