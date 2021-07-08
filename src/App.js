
import { Home } from './componet/page';
import { BrowserRouter, Switch ,Route} from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home}/>      
    </Switch>  
  </BrowserRouter>
   
  );
}

export default App;
