import './item.css';
import { ReactNode } from 'react'

interface ItemRootProps {
    children: ReactNode,
}

export const ItemRoot = ({ children}:ItemRootProps)=>{


    return(
        <div className='container-item-cardapio'>
                {children}
        </div>
    )
}