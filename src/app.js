import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => <div>Dashboard Page</div>;

const AddExpensePage = () => <div>Add Expense Page</div>;

const EditExpensePage = () => <div>Edit Expense Page</div>;

const HelpExpensePage = () => <div>Help Expense Page</div>;

const NotFoundPage = () => <div>404 Not Found!</div>;

const Header = () => (
    <div>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </div>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpExpensePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
