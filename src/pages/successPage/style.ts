import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 102px;
  margin-top: 80px;

  #illustration {
    height: 320px;
    width: 35%;
  }
`

export const SuccessPageOrderInfo = styled.div`
  width: 520px;

  h1 {
    color: ${(props) => props.theme.colors['yellow-dark']};
    font-family: 'Baloo 2', sans-serif;
  }

  p {
    color: ${(props) => props.theme.colors['base-subtitle']};
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    margin-bottom: 40px;
  }
`

export const SuccessPageBorder = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5px; 
  background: linear-gradient(to right, #DBAC2C, #8047F8);
  border-radius: 10px 40px;
  position: relative;
`

export const SuccessPageUserData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: start;


  background: ${(props) => props.theme.colors['background']};
  height: 270px;
  width: 100%;

  border-radius: 10px 40px;
  padding: 20px;
  gap: 32px;
`

export const SuccessPageUserDetails = styled.div`
  display: flex;
  align-items: center;
  border: none;

  padding: 8px;
  gap: 7px;

  section h3 {
    font-size: 17px;
    font-weight: 300;
  }
`

export const SuccessPageMapPinIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;

  border-radius: 50%;

  background: ${(props) => props.theme.colors['purple']};
`

export const SuccessPageTimerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;

  border-radius: 50%;

  background: ${(props) => props.theme.colors['yellow']};
`

export const SuccessPageDollarIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 32px;
  width: 32px;

  border-radius: 50%;

  background: ${(props) => props.theme.colors['yellow-dark']};
`
