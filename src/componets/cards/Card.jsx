import { ContainerPrincipal, Cabecalho, Main, Title, Description, Navigation, Skills } from "./Card.js"
// import { ContainerPrincipal, Cabecalho, Main, Title, Description, Navigation, Span } from "../../Styles/Card.js"


export default function Card(props) {
  return (
    <ContainerPrincipal>   
      <Cabecalho/>
      <Main>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
        <Skills>
          <span>Tech stack :</span> HTML , JavaScript, SASS, React
        </Skills>
        <footer>
         <Navigation>
          <div/>
          Live Preview
          </Navigation> 
         <Navigation>
          <div/>
          View Code
          </Navigation> 
        </footer>
      </Main>
  </ContainerPrincipal> 
  );
}
