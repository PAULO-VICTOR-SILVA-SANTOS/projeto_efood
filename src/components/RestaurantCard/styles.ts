import styled from 'styled-components'
import { colors, breakpoints } from '../../styles/theme'

export const Card = styled.div`
  background-color: ${colors.white};
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
  display: block;

  @media (max-width: ${breakpoints.mobile}) {
    height: 220px;
  }
`

export const CardContent = styled.div`
  padding: 8px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid ${colors.salmon};
  border-top: none;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${colors.salmon};
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
  color: ${colors.salmon};

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
  color: ${colors.salmon};
  flex: 1;
  margin-bottom: 16px;
`

export const TagsContainer = styled.div`
  position: absolute;
  top: 16px;
  right: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`

export const Tag = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: ${colors.cream};
  background-color: ${colors.salmon};
  padding: 6px 10px;
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
  border: none;
  cursor: pointer;
  margin-top: auto;
  width: 100%;
  text-align: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d4584c;
  }
`
