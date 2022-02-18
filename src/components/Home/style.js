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

  @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerParametros = styled.section`
  display: flex;
  width: 45%;
  background-color: blue;

  @media(max-width: 800px) {
    width: 100%;
  }

  form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
    margin: 0.5rem 0;
  }

  h3 {
    align-self: flex-start;
    margin: 0;
  }

  span {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
`;

export const ContainerGráfico = styled.section`
  width: 55%;
  background-color: yellow;

  @media(max-width: 800px) {
    width: 100%;
  }
`;

// ---------- Container GroupButton -----------------

export const ContainerGroupButton = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  input[type="radio"] {
  display:none;
}

input[type="radio"] + label {
  background-color: rgb(212, 212, 212);
  border: 1px solid rgb(172, 172, 172);
  display:flex;
  justify-content: center;
  align-content: center;
  width: 4rem;
  height: 1rem;
  padding-top: 0.1rem;
  margin: 0.1rem;
  cursor:pointer;
}
input[type="radio"]:checked + label {
  background-color: #e98a50;
}

.border-radius-centro {
  border-radius: 2px;
}

.border-radius-esquerda {
  border-radius: 5px 0 0 5px;
}

.border-radius-direita {
  border-radius: 0 5px 5px 0;
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
    padding: 0.5rem 1.5rem;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
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
    box-shadow: 0 0 10px 0 #ed8e53 inset, 0 0 10px 1px #ed8e53;
  }
`;
