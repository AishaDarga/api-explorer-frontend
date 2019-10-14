import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Button } from 'carbon-components-react';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import Page_Header from './components/Page_Header';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import './app.scss';

class App extends Component {
  render() {
    return (
      <>
        <Page_Header />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/repos" component={RepoPage} />
          </Switch>
        </Content>
      </>
    );
  }
}

export default App;
