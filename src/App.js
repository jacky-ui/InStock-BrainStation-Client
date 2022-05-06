import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseIndividual from "./components/WarehouseIndividual/WarehouseIndividual";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>

          {/*<Route path="/" exact component={HomePage} />*/}
          <Route path="/warehouse/:warehouseId" component={WarehouseIndividual} />
          {/*<Route

            path="/warehouse/:warehouseId/edit"
            component={EditWarehousePage}
          />
          <Route path="/warehouse/add" component={AddWarehouse} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/:itemId" component={Item} />*/}
          <Route path="/inventory/:itemId/edit" component={EditInventoryPage} />
          {/* <Route path="/inventory/add" component={AddItem} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
