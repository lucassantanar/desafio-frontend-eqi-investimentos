
import { useEffect, useState } from 'react';
import {
  AppContainer,
  AppStyled,
  ButtonStyled,
  ContainerGroupButton,
  ContainerGráfico,
  ContainerInputButton,
  ContainerParametros,
  Header,
  Main,
} from './style';
import { api } from '../../utils/api'

export default function Home() {
  const [indicadores, setIndicadores] = useState();
  const [valorBotao, setValorBotao] = useState('');
  const [clickButao, setClickBotao] = useState(Boolean)
  const [idButton, setIdButton] = useState();
  
  async function carregaIndicadores() {
    try {
      await api.get('/indicadores').then((response) => {
        setIndicadores(response.data)
      })
    } catch (error) {
      console.log(error)
    }
    return indicadores;
  }

  function recebeValor(e) {
    e.preventDefault();
    setValorBotao(e.target.id)

    const valorBotao = document.getElementById("containerBotao1");
    valorBotao.addEventListener("click", function(event) {
        console.log(event.target.id); 

        if(valorBotao == event.target.id) {
          setClickBotao(Boolean);
          setClickBotao(true);
        } else {
          setClickBotao(Boolean);
          setClickBotao(false);
        }
    })

  }

  useEffect(() => {
    console.log(valorBotao)
    console.log(clickButao)

    // if(indicadores === undefined) {
    //   carregaIndicadores();
    // } else {
    //   return null;
    // }

    // submeteFormulario();
  })  

  function submeteFormulario(){
    const input = document.querySelector("#aporte");
    const texto = `${input === undefined? '' : input.value}`;
    console.log(texto);
  }
 
  return (
    <AppStyled>
      <AppContainer>
        <Header>
          <h3>Simulador</h3>
        </Header>
        <Main className="container">
          <ContainerParametros> 
            {/* Formulário Rendimento */}
            <form id='form1'>
              <ContainerInputButton id="containerBotao1">
                <h3>Simulador</h3>
                <p>Rendimento</p>
                <ContainerGroupButton>
                <input type="radio" id="d1" name="cc" />
                  <label class="border-radius-esquerda" for="d1">Bruto</label>

                  <input type="radio" id="d2" name="cc" />
                  <label class="border-radius-direita" for="d2">Líquido</label>
                </ContainerGroupButton>
                <span>
                  <label htmlFor="aporteInicial">Aporte Inicial</label>
                  <input type="text" name="aporteInicial" id="aporteInicial"/>
                </span>
                <span>
                  <label htmlFor="prazoM">Prazo (Em meses)</label>
                  <input type="text" name="prazoM" id="prazoM"/>
                </span>
                <span>
                  <label htmlFor="ipca">IPCA (Ao ano)</label>
                  {/* value={indicadores[1].valor + '%'} */}
                  <input type="text" name="ipca" defaultValue={indicadores === undefined? 'Sem indicador': indicadores[1].valor+'%'} id="ipca" />
                </span>
                <ButtonStyled>
                  <button className="btn limparCampos">Limpar Campos</button>
                </ButtonStyled>
              </ContainerInputButton>
            </form>
            
            {/* Formulário Tipos de indexação */}

            <form id='form2'>
              <ContainerInputButton id="form2">
                <h3>&ensp;</h3>
                <p>Tipos de indexação</p>
                <ContainerGroupButton id='containerBotao2'>
                  <input type="radio" id="c1" name="cc" />
                  <label class="border-radius-esquerda" for="c1">PRÉ</label>

                  <input type="radio" id="c2" name="cc" />
                  <label for="c2" class="border-radius-centro">PÓS</label>

                  <input type="radio" id="c3" name="cc" />
                  <label class="border-radius-direita" for="c3">FIXADO</label>
                </ContainerGroupButton>
                <span>
                  <label htmlFor="aporte">Aporte Mensal</label>
                  <input type="text" name="aporte" id="aporte"/>
                </span>
                <span>
                  <label htmlFor="rentabilidade">Rentabilidade</label>
                  <input type="text" name="rentabilidade" id="rentabilidade"/>
                </span>
                <span>
                  <label htmlFor="cdi">CDI (Ao ano)</label>
                  {/* value={indicadores[0].valor + '%'} */}
                  <input type="text" name="cdi" defaultValue={indicadores === undefined? 'Sem indicador': indicadores[0].valor+'%'} id="cdi" />
                </span>
                <ButtonStyled>
                  <button onClick={submeteFormulario} className="btn simular">Simular</button>
                </ButtonStyled>
              </ContainerInputButton>
            </form>
          
          </ContainerParametros>
          <ContainerGráfico>Gráfico</ContainerGráfico>
        </Main>
      </AppContainer>
    </AppStyled>
  );
}














