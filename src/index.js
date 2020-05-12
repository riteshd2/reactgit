import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


import 'semantic-ui-css/semantic.min.css';
import './index.css';
import { Container, Label, Divider } from 'semantic-ui-react';
import Exam from './Exam';
import Covid from './Covid';
import Quotes from './Quotes';
import Cocktail from './Cocktail';
import MenuBar from './MenuBar';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <MenuBar /> */}
    <Router>
      <Container style={{ paddingTop: "15px" }}>
        <Divider horizontal>
            <Link to="/quotes">
              <Label as='a' style={{marginRight:"10px"}} ribbon="left"   color='purple'>Quotes</Label>
            </Link>
            <Link to="/cocktail">
              <Label as='a' ribbon="left" color='pink' style={{marginRight:"10px"}} >Cocktail</Label>
            </Link>
            <Link to="/covid">
              <Label as='a' ribbon="left" color='olive'>Covid-19</Label>
            </Link>
      </Divider>
        <Switch>


          <Route exact path="/">
            <Quotes />
          </Route>
          <Route path="/reactgit">
            <Quotes />
          </Route>
          <Route path="/quotes">
            <Quotes />
          </Route>
          <Route path="/cocktail">
            <Cocktail />
          </Route>
          <Route path="/covid">
            <Covid />
          </Route>
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
