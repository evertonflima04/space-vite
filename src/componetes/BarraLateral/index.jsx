import { styled } from "styled-components";
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width:212px;
    
`

const BarraLateral = () => {
    return (
        <aside>
            <nav >
                <ListaEstilizada>
                   <ItemNavegacao 
                    iconeAtivo="/icones/home-ativo.png" 
                    iconeInativo="/icones/home-inativo.png"
                    ativo= {true} >
                            Inicio
                   </ItemNavegacao>
                   <ItemNavegacao 
                    iconeAtivo="/icones/mais-vistas-ativo.png" 
                    iconeInativo="/icones/mais-vistas-inativo.png">
                            Mais vistas
                   </ItemNavegacao>
                   <ItemNavegacao 
                    iconeAtivo="/icones/mais-vistas-ativo.png" 
                    iconeInativo="/icones/mais-curtidas-inativo.png">
                            Mais Curtidas
                   </ItemNavegacao>
                   <ItemNavegacao 
                    iconeAtivo="/icones/mais-vistas-ativo.png" 
                    iconeInativo="/icones/novas-inativo.png">
                            Novas
                   </ItemNavegacao>
                   <ItemNavegacao 
                    iconeAtivo="/icones/mais-vistas-ativo.png" 
                    iconeInativo="/icones/surpreenda-me-inativo.png">
                            Surpreenda-me
                   </ItemNavegacao>
                </ListaEstilizada>
            </nav>
        </aside>
    )
}

export default BarraLateral;