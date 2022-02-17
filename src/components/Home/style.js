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

export const ContainerInputButton = styled.form`
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
  .control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
  }
  .control input {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  .control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 30px;
    width: 35px;
    background: #e6e6e6;
    border: 0px solid #000000;
    border-radius: 0px;
  }
  .control:hover input ~ .control_indicator,
  .control input:focus ~ .control_indicator {
    background: #e7d0c1;
  }

  .control input:checked ~ .control_indicator {
    background: #e7894f;
  }
  .control:hover input:not([disabled]):checked ~ .control_indicator,
  .control input:checked:focus ~ .control_indicator {
    background: #e7d0c1;
  }
  .control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
  }
  .control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
  }
  .control input:checked ~ .control_indicator:after {
    display: block;
  }
  .control-checkbox .control_indicator:after {
    left: 8px;
    top: 4px;
    width: 3px;
    height: 8px;
    border: solid #ff0000;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
  .control-checkbox input:disabled ~ .control_indicator:after {
    border-color: #7b7b7b;
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
