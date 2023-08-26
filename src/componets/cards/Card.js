import { styled} from "styled-components";
// import { styled , createGlobalStyle } from "styled-components";


// export const GlobalStyles = createGlobalStyle


export const ContainerPrincipal = styled.div`
  width: 373px;
  height: 567px;
  border-radius: 20px;
  border: 0.5px solid #d9d9d9;
  margin: 10px;
`;

export const Cabecalho = styled.header`
  height: 260px;
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #d9d9d9;
  margin: 0px;
`;

export const Main = styled.section`
  padding: 25px;
`;
export const Title = styled.h1`
  font-size: 28px;
  font-weight: 500;
  line-height: 26px;
  color: #191919;
`;
export const Description = styled.p`
font-weight: 300;
line-height: 26px;
font-size: 14px
color: #CCCCCC;       
`;
export const Skills = styled.p`
font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: 26px;
  color: #42446e;
  > span {
    font-weight: bold;
    color: red;
  }
`;
export const Footer = styled.footer`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

export const Navigation = styled.div`
display: flex;
  gap: 10px;
  align-items: center;
  > div {
    background-color: purple;
    width: 20px;
    height: 20px;
    border-radius: 100px;
  }
`;
  /* justify-content: space-between;
  align-items: center;
  width: 100%;
`;
// export const Span = styled.span` */
// font-size: 16px;
// color: red;

// `;

