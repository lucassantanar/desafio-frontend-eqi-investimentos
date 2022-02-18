import styled from 'styled-components';

export const AppStyled = styled.div`
  text-align: center;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* background-color: blue; */
`;

export const AppContainer = styled.div`
  width: 85%;
  height: 85%;
  background-color: #efefef;
`;

export const Header = styled.header`
  /* #ffffff */
  background-color: red;
  height: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #282c34;
`;

export const Main = styled.main`
  height: 85%;
  display: flex;
  background-color: green;
`;

export const ContainerParametros = styled.form`
  display: flex;
  width: 45%;
  background-color: blue;

  section {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  input[type='text'] {
    outline: none;
    border: 0;
    background-color: transparent;
    border-bottom: 1px solid black;
  }
`;

export const ContainerInputButton = styled.div`
  display: flex;
  flex-direction: column;

  label {
    align-self: flex-start;
    padding-bottom: 0.5rem;
  }

  p {
    align-self: flex-start;
  }

  h3 {
    align-self: flex-start;
  }

  span {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
`;

export const ContainerGráfico = styled.div`
  width: 55%;
  background-color: yellow;
`;

// ---------- Container GroupButton -----------------

export const ContainerGroupButton = styled.div`
  .botaoEsquerdo {
    background: green;

    &:active {
    background-color: orange;

    &:focus {
    background-color: orange;
  }

  .botaoDireito {
    background: green;

    &:active {
    background-color: orange;}

    &:target {
    background-color: orange;}
  }

`;

export const ButtonStyled = styled.div`
  .btn {
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: transparent;
    border: 2px solid #ed8e53;
    border-radius: 0.6em;
    color: #ed8e53;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    margin: 20px;
    padding: 1.2em 2.8em;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    /* font-weight: 700; */
  }

  .btn:hover,
  .btn:focus {
    color: #fff;
    outline: 0;
  }

  .limparCampos {
    -webkit-transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
    transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
  }

  .limparCampos:hover {
    box-shadow: 0 0 40px 40px #ed8e53 inset;
  }

  .simular {
    border-color: #ed8e53;
    color: #fff;
    box-shadow: 0 0 40px 40px #ed8e53 inset, 0 0 0 0 #ed8e53;
    -webkit-transition: all 150ms ease-in-out;
    transition: all 150ms ease-in-out;
  }
  .simular:hover {
    box-shadow: 0 0 10px 0 #ed8e53 inset, 0 0 10px 4px #ed8e53;
  }
`;
