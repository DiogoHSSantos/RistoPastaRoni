import { NavBar } from '../../components/NavBar/NavBar'
import './sobre.css'

export const Sobre = ()=>{
    return(
        <div>
            <NavBar rota1='/' descricaoRota1='Pagina principal' rota2='/Contato' descricaoRota2='Contato'/>
            <h1>pagina Sobre mim</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium iure, deserunt architecto unde, dicta nesciunt temporibus nam dolor, reprehenderit qui sit. Unde mollitia, exercitationem ipsum incidunt ducimus fugiat laudantium deleniti.</p>
        </div>
    )
}