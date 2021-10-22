import Navbar from "./component/elements/Navbar";
import "./style/App.scss";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import addItem from "./component/Item/AddItem";
import EditContact from "./component/Item/EditItem";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import AGList from "./component/Item/itemIist";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-5 mt-5">
              <Switch>
                <Route exact path="/" component={AGList}></Route>
                <Route exact path="/contact/add" component={addItem}></Route>
                <Route
                  exact
                  path="/contact/edit/:id"
                  component={EditContact}
                ></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
