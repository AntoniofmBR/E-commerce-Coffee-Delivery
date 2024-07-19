import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 20px;

  padding-bottom: 24px;
  border-bottom: 1px solid ${(props) => props.theme.colors['base-button']};

  img {
    height: 64px;
    width: 64px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 64px;
  }
`

export const ProductCardTitle = styled.p`
  color: ${(props) => props.theme.colors['base-subtitle']};
`

export const ProductCardButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const ProductCardQuantityButton = styled.div`
  background: ${(props) => props.theme.colors['base-button']};

  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;


  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  &:focus {
    border: 29px solid ${(props) => props.theme.colors['purple']};
  }
`

export const ProductCardButtonPlusAndMinus = styled.button`
  background: none;
  border: none;
  padding: 8px;
`

export const ProductCardRemoveButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors['base-button']};

  height: 32px;

  border-radius: 6px;
  border: none;

  gap: 4px;
  padding: 8px;

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 500;
    color: ${(props) => props.theme.colors['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme.colors['base-hover']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors['purple']};
  }
`

export const ProductCardPrice = styled.div`
  color: ${(props) => props.theme.colors['base-text']};

  font-size: 17px;
  font-weight: 600;
`
