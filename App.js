import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import NotFound from './components/NotFound'
import popupItem from './components/popupItem'
const App = () => (
  <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/popupItem" component={popupItem} />
      </Switch>
    </BrowserRouter>
  </>
)

export default App
