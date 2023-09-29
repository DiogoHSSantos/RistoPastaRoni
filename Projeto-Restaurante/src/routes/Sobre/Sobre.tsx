import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import HeaderRoutes from '../components/HeaderRoutes'
import './sobre.css'

export const Sobre = ()=>{
    return(
        <div className='about-container-all'>
            <HeaderRoutes 
                primeiraRota='/' 
                logoPrimeiraRota='bx bx-left-arrow-alt' 
                tituloHeader='Sobre' 
                segundaRota='/Contato' 
                logoSegundaRota='bx bxs-phone' 
            />

            <div className="container-description-about">
                <p className="description-about">
                    Me chamo Diogo Henrique, sou estudante de tecnologia a um bom tempo, sou formado em cursos da <Link to='https://www.alura.com.br/'> Alura</Link>, <Link to='https://www.cursoemvideo.com/'> Curso em vídeo</Link>, <Link to='https://www.udemy.com/'>Udemy</Link> e entre outros sem formação atravez do YouTube, inclusive esse projeto é inspirado graças aos ensinamentos da Alura. <br/><br/>

                    Espero que tenha gostado do projeto, por ser uma primeira versão do mesmo, pode ser que ainda esteja meio "cru", mas melhorias estão por vir. <br/> <br/>

                    Desde ja agradeço !
                </p>
            </div>

            <Footer />
        </div>
    )
}