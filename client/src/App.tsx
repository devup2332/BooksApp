import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/Header/HeaderComponent";

const HomePage = React.lazy(() => import("./pages/Home/HomePage"));

function App() {
  return (
    <Router>
        <HeaderComponent />
        <Switch>
          <Route path="/">
            <Suspense fallback="loading">
              <HomePage />
            </Suspense>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
