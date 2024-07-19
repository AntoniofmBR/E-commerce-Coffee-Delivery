import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
`

export const HeaderActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;
`

export const HeaderLocation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;
  background: ${ (props) => props.theme.colors['purple-light'] };

  padding: 8px;
  gap: 4px;

  transition: ease;

  svg {
    color: ${ (props) => props.theme.colors.purple };
  }

  p {
    color: ${ (props) => props.theme.colors['purple-dark'] };
    font-size: 15px;
  }

  &:hover {
    border: 1px solid ${ (props) => props.theme.colors['purple'] };
  }

`

export const HeaderShopping = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 6px;
  background: ${ (props) => props.theme.colors['yellow-light'] };

  padding: 8px;

  svg {
    color: ${ (props) => props.theme.colors['yellow-dark'] };
  }

  &:hover {
    border: 1px solid ${ (props) => props.theme.colors['yellow'] };
  }
`

export const HeaderShoppingNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 20px;

  position: relative;
  width: 20px;

  border-radius: 50%;
  top: -35%;
  left: -10%;

  background: ${ (props) => props.theme.colors['yellow-dark'] };
  color: ${ (props) => props.theme.colors['white'] };

  font-family: 'Baloo 2', sans-serif;
  font-weight: 600;
  font-size: 15px;
`