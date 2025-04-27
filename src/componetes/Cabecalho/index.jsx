import { styled } from "styled-components";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  .logo {
    max-width: 212px;
  }
  .pesquisa{
    position: relative;
    display: inline-block;
  }
  .input_pesquisa{
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
  }
  .input_img{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
  }
`;


const Cabecalho = () => {
  return (
    <HeaderEstilizado>
        <div>
            <img className='logo' src="/imagens/logo.png" alt="Logo" />
        </div>  
        <div className="pesquisa">
            <input className="input_pesquisa" type="text" placeholder="O que você procura?" />
            <img  className="input_img" src="/imagens/search.png"/>   
        </div>
    </HeaderEstilizado>
  );
};

export default Cabecalho;
