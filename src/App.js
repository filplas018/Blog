
import './App.css';
import { Router } from "react-router-dom";
import { Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import PostList from './components/PostList';
import Content from './components/Content';
import NotFound from "./components/NotFound";
import LimitedPostList from './components/LimitedPostList';


const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Content>
          <Switch>         
            
            <Route path="/posts" component={PostList} />
            <Route path="/posty/:cnt" component={LimitedPostList} />

            <Route component={NotFound} />
          </Switch>
        </Content>  
      </Router>  
    </div>
  );
}

export default App;
