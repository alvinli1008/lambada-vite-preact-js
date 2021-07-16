import Router from 'preact-router';
import { Link } from 'preact-router/match';
import AsyncRoute from 'preact-async-route';


import './App.css';

import Home from './views/Home';

const App = () => {
  return (
    <>
      <nav>
        <Link activeClassName="active" className="tw-p-2" href="/">
          home
        </Link>
        <Link activeClassName="active" className="tw-p-2" href="/demo">
          demo
        </Link>
        <Link activeClassName="active" className="tw-p-2" href="/test">
          test
        </Link>
      </nav>
      <Router>
        <Home path="/" />
        <AsyncRoute
          path="/demo"
          getComponent={() => import('./views/Demo').then((module) => module.default)}
          loading={() => <div>loading...</div>}
        />
        <AsyncRoute
          path="/test"
          getComponent={() => import('./views/Test').then((module) => module.default)}
          loading={() => <div>loading...</div>}
        />
      </Router>
    </>
  );
};

export default App;
