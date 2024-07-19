import styled from 'styled-components';

export const ProductContainer = styled.div`
  background-color: ${(props) => props.theme.colors['base-card']};
  padding: 0px 20px 20px;
  border-radius: 6px 36px;

  height: 300px;
  width: 256px;

  gap: 15px;


  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  img {
    height: 120px;
    width: 120px;
  }
`

export const ProductTags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 2px;
  width: 100%;
`

export const ProductTag = styled.h3`
  color:  ${(props) => props.theme.colors['yellow-dark']};
  background: ${(props) => props.theme.colors['yellow-light']};

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;
  padding: 4px 8px;

  width: 90px;
  border-radius: 90px;
`

export const ProductTitles = styled.div`
  gap: 8px;

  h1 {
    font-size: 20px;
    color: ${(props) => props.theme.colors['base-subtitle']};
  }

  p {
    font-size: 13px;
    text-align: center;
    line-height: 1;

    width: 100%;
    color: ${(props) => props.theme.colors['base-label']};
  }
`

export const ProductFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 50px;
`

export const ProductPrice = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  font-family: 'Baloo 2', sans-serif;


  p {
    font-size: 15px;
  }

  strong {
    font-size: 25px;
  }
`

export const ProductQuantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 8px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 10px;
    padding: 8px;
    border-radius: 6px;

    background: ${ (props) => props.theme.colors['base-button'] };
  }

  div button {
    border: none;
    background: none;
    margin: none;
  }

  div span {
    font-size: 15px;
    color: ${(props) => props.theme.colors['base-title']};
  }
`

export const ProductBuy = styled.button`
  height: 38px;
  width: 38px;

  background: ${(props) => props.theme.colors['purple']};
  padding: 8px;
  
  border: none;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme.colors['purple-dark']};
  }
`