import styled from 'styled-components'



export const ContainerPrincipal = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`
export const PrimeiroContainer = styled.div`
  background-color: #f67280;
  height: 100vh;
  width: 20vw;
  display: flex;
  place-content: center;
`
export const MainDiv = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: #cccccc;
  padding: 0 15px;
`
export const SegundoContainer = styled.div`
  /* background-color: #c06c84; */
  background: linear-gradient(to left, #c06c84 0%, #355c7d 100%);
  height: 100vh;
  width: 10vw;
`
export const TerceiroContainer = styled.div`
  background-color: #6c5b7b;
  background: linear-gradient(to left, #355c7d 0%, #c06c84  100%);
  height: 100vh;
  width: 10vw;
`
export const UltimoContainer = styled.div`
  /* background-color: #355c7d; */
  background: linear-gradient(to right, #6c5b7b 0%,  #c06c84 100%);
  height: 100vh;
  width: 10vw;
`