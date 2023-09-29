import LinkToContact from '../../routes/Contato/component/LinkToContact';
import './footer.css';

export const Footer = ()=>{
    return(
        <div className="footer">
            <div className='descricao'>
                <p>Desenvolvido por Diogo Henrique</p> 
            </div>

            <div className='links'>
                <LinkToContact link='/RistoPastaRoni/Contato' logo='bx bxs-phone' name='- Contato' />
                <LinkToContact link='/RistoPastaRoni/Sobre' logo='bx bxs-user' name='- Sobre Mim' />
            </div>
        </div>
    )
}