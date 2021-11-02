import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './container/Home/Home';
import CartPage from './container/ProductDetail/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/detail/id=:page" component={CartPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
