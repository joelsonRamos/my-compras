import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Compras from './pages/Compras/Compras'
import Itens from './pages/Itens/Itens'
import Mensal from './pages/Mensal/Mensal'

function Routes() {
  return (
  
    <Switch >
        <Route  path="/" exact component={Compras} />
            
        <Route  path="/itens" exact component={Itens} />
            
        <Route  path="/mensal" exact component={Mensal} />
      
    </Switch>
   
   
    
  )
}

export default Routes
