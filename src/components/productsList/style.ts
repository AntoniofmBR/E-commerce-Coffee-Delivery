import styled from 'styled-components';

export const ProductsListContainer = styled.div`
  padding: 32px 160px;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 900;
    color: ${ (props) => props.theme.colors['base-title'] };
  }
`

export const ProductsListComponents = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;

  gap: 40px;
  margin-top: 52px;

  height: 100%;
  width: 100%;
`