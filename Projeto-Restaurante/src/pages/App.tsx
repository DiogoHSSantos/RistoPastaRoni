import { useState } from 'react'
import Cardapio from '../components/Cardapio'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './index.css'

// 2 - Reaproveitamento de estrutura

const App = ()=>{


  const itensDoCarrinho:object[] = [];
  const [totalDeItens, setTotalDeItens] = useState(itensDoCarrinho);


  return(
    <div className='container'>
      <Header totalDeItens={totalDeItens}/>
      <Cardapio totalDeItens={totalDeItens}  setTotalDeItens={setTotalDeItens}/>
      <Footer/>
    </div>
  )
}

export default App;