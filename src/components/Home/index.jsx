
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
  const [clickButton, setClickButton] = useState(Boolean);
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


  useEffect(() => {
    if(indicadores === undefined) {
      carregaIndicadores();
    } else {
      return null;
    }

    submeteFormulario();
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
          <h3>Simulador de Investimentos</h3>
        </Header>
        <Main className="container">
          <ContainerParametros> 
            {/* Formulário Rendimento */}
            <section>
              <ContainerInputButton id="form1">
                <h3>Simulador</h3>
                <p>Rendimento</p>
                <ContainerGroupButton>
                  <button className="botaoEsquerdo">Bruto</button>
                  <button className="botaoDireito">Líquido</button>
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
            </section>
            
            {/* Formulário Tipos de indexação */}

            <section>
              <ContainerInputButton id="form2">
                <h3>&ensp;</h3>
                <p>Tipos de indexação</p>
                <ContainerGroupButton>
                  <div class="control control-radio border-radius-left"> 
                          <input type="radio" name="radio" />
                      <div class="control_indicator border-radius-left">PRÉ</div>
                  </div>
                  <div class="control control-radio"> 
                        <input type="radio" name="radio" />
                    <div class="control_indicator">PÓS</div>
                  </div>
                  <div class="control control-radio border-radius-right">  
                          <input type="radio" name="radio" />
                      <div class="control_indicator border-radius-right">FIXADO</div>
                  </div>
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
            </section>
          
          </ContainerParametros>
          <ContainerGráfico>Gráfico</ContainerGráfico>
        </Main>
      </AppContainer>
    </AppStyled>
  );
}














