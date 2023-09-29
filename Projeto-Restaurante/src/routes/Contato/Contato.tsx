

import HeaderRoutes from '../components/HeaderRoutes'
import LinkToContact from './component/LinkToContact'
import './contato.css'

export const Contato = ()=>{
    return(
        <div className='container-contact-area'>
            <HeaderRoutes 
                primeiraRota='/' 
                logoPrimeiraRota='bx bx-left-arrow-alt' 
                tituloHeader='Contato' 
                segundaRota='/Sobre' 
                logoSegundaRota='bx bxs-user' 
            />

            <h3 className='context-contact'>
                E aí, curtiu ? então acesse o meu portfólio, lá tem vários outros projetos que você pode curtir !
            </h3>

            <div className='area-contant-links-to-contact'>
            
                <div className='social-contacts'>
                    <LinkToContact link='https://diogohssantos.github.io/Portfolio-Diogo/' logo='bx bx-book-open' name='- Meu Portfólio'/>
                </div>

                <h3 className='context-contact'>
                    Porém se preferir pode entrar em contato comigo agora mesmo !
                </h3>

                <div className="social-contacts">
                    <LinkToContact link='https://www.linkedin.com/in/diogo-henrique-22732221b/' logo='bx bxl-linkedin' name='- LinkedIn'/>
                    <LinkToContact link='https://github.com/DiogoHSSantos' logo='bx bxl-github' name='- GitHub'/>
                    <LinkToContact link='https://wa.me/11958784456' logo='bx bxl-whatsapp' name='- WhatsApp'/>
                    <LinkToContact link='https://www.instagram.com/diogoo_h._dev/' logo='bx bxl-instagram' name='- Instagram'/>
                </div>
            </div>

            <h3 className='context-contact'>
                Obrigado por visitar meu restaurante!
                Ateciosamente Diogo Henrique.
            </h3>
        </div>
    )
}

