import styled from 'styled-components';

export const InputContainer = styled.input`
  background: ${(props) => props.theme.colors['base-input'] };
  border-radius: 4px;
  border: none;
  height: 42px;
  padding: 12px;

  &:hover, &:focus {
    border: 1px solid ${(props) => props.theme.colors['yellow-dark'] };  
  }
`