import { NavBar } from '../../components/NavBar/NavBar'
import './contato.css'

export const Contato = ()=>{
    return(
        <div>
            <NavBar rota1='/' descricaoRota1='Pagina principal' rota2='/Sobre' descricaoRota2='Sobre Mim'/>
            <h1>pagina de contato</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, libero vitae repudiandae perferendis beatae numquam impedit rerum est doloremque atque, quo unde accusamus facilis alias fuga soluta, odio culpa obcaecati!</p>
        </div>
    )
}

