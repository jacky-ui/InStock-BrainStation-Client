import "./App.scss";
import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/warehouse/:warehouseId" component={Warehouse} />
          <Route
            path="/editWarehouse/:editWarehouseId"
            component={EditWarehouse}
          />
          <Route path="/addWarehouse" component={AddWarehouse} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/item" component={Item} />
          <Route path="/editItem/editItemId" component={EditItem} />
          <Route path="/addItem/addItemId" component={AddItem} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
