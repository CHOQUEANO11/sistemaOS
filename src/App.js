import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Aguade...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Cards = React.lazy(() => import('./views/Base/Cards'));
const Buttons = React.lazy(() => import('./views/Buttons/Buttons'));
const Buttons1 = React.lazy(() => import('./views/Buttons/ButtonDropdowns'));
const Buttons2 = React.lazy(() => import('./views/Buttons/ButtonGroups'));
const Charts = React.lazy(() => import('./views/Charts'));
const Notify = React.lazy(() => import('./views/Notifications/Modals'));
const Clear = React.lazy(() => import('./views/Pages/Login'));
const Base = React.lazy(() => import('./views/Base/Breadcrumbs'))
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {

  render() {
    return (
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" name="Login Page" render={props => <Login {...props}/>}/>
              <Route exact path="/" name="sair" render={props => <Clear {...props}/>}/>
              <Route exact path="/base/cards" name="solicitar" render={props => <Cards {... props}/>} />
              <Route exact path="/buttons/buttons" name="listEquipamentos" render={props => <Buttons {...props}/>} />
              <Route exact path="/buttons/button-dropdowns" name="cadastrarEquipamentos" render={props => <Buttons1 {...props}/>} />
              <Route exact path="/buttons/button-groups" name="carga" render={props => <Buttons2 {...props}/>} />
              <Route exact path="/charts" name="manutenções" render={props => <Charts {...props}/>} />
              <Route exact path="/notifications" name="relatórios" render={props => <Notify {...props}/>} />
              <Route exact path="/base/breadcrumbs" name="listar" render={props => <Base {...props}/>}  />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/dashboard" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
