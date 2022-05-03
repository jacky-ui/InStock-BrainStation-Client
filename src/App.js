import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehouseIndividual from "./components/WarehouseIndividual/WarehouseIndividual";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/*<Switch>
          <Route path="/" exact component={HomePage} />*/}
          <Route path="/warehouse/:warehouseId" component={WarehouseIndividual} />
          {/*<Route
            path="/warehouse/:warehouseId/edit"
            component={EditWarehouse}
          />*/}
          {/*<Route path="/warehouse/add" component={AddWarehouse} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/:itemId" component={Item} />
          <Route path="/inventory/:itemId/edit" component={EditItem} />
          <Route path="/inventory/add" component={AddItem} />
  </Switch>
        <Footer />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
