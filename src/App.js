import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage.js";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Route
            path="/warehouse/:warehouseId/edit"
            component={EditWarehousePage}
          />
        {/* <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/warehouse/:warehouseId" component={Warehouse} />
          <Route
            path="/warehouse/:warehouseId/edit"
            component={EditWarehousePage}
          />
          <Route path="/warehouse/add" component={AddWarehouse} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/:itemId" component={Item} />
          <Route path="/inventory/:itemId/edit" component={EditItem} />
          <Route path="/inventory/add" component={AddItem} />
        </Switch> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
