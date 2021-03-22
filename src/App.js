import { ApolloProvider } from '@apollo/client';
import { client } from './lib/apollo';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Details from './pages/details';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path='/' exact={true}>
            <Home />
          </Route>
          <Route path='/:name/:id'>
            <Details />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
