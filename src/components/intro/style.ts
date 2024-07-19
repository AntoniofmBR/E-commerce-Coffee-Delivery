import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  gap: 56px;
  justify-content: space-between;

  margin: 92px 160px;

  img {
    height: 360px;
    width: 476px;
  }
`

export const IntroTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 66px;
  width: 600px;
`

export const IntroTitle = styled.div`
  /* text-align: justify; */
  
  h1 {
  font-family: 'Baloo 2';
  font-size: 35px;
  font-weight: 900;
  color: ${ (props) => props.theme.colors['base-title'] };
  margin-bottom: 16px;
}

  p {
    color: ${ (props) => props.theme.colors['base-subtitle'] };
  }
`

export const IntroTopics = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;


  div {
    display: flex;
    justify-content: space-between;
  }
`

export const IntroTropicShopping = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  div {
    height: 32px;
    width: 32px;
    border-radius: 99px;
    background: ${ (props) => props.theme.colors['yellow-dark'] };
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    justify-content: start;
    width: 250px;
    color: ${ (props) => props.theme.colors['base-text'] };
  }
`

export const IntroTopicPackage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;


  div {
    height: 32px;
    width: 32px;
    border-radius: 99px;
    background: ${ (props) => props.theme.colors['base-text'] };
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    justify-content: start;
    width: 250px;
    color: ${ (props) => props.theme.colors['base-text'] };
  }
`

export const IntroTropicCoffee = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: 292px; */
  gap: 12px;

  div {
    height: 32px;
    width: 32px;
    border-radius: 99px;
    background: ${ (props) => props.theme.colors['purple'] };
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    justify-content: start;
    width: 250px;
    color: ${ (props) => props.theme.colors['base-text'] };
  }
`

export const IntroTropicTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 12px;

  div {
    height: 32px;
    width: 32px;
    border-radius: 99px;
    background: ${ (props) => props.theme.colors['yellow'] };
    justify-content: center;
    align-items: center;
  }

  p {
    display: flex;
    justify-content: start;
    width: 250px;
    color: ${ (props) => props.theme.colors['base-text'] };
  }
`

