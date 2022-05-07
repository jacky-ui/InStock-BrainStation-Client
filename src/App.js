import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseIndividual from "./components/WarehouseIndividual/WarehouseIndividual";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
         <Switch>
          <Route path="/" exact component={WarehousePage} />
          <Route path="/warehouse/add" exact component={AddWarehousePage} />
          <Route path="/warehouse/:warehouseId" exact component={WarehouseIndividual} />
          <Route path="/warehouse/:warehouseId/edit" exact component={EditWarehousePage} />
          {/* <Route path="/warehouse/:warehouseId/delete" exact component={DeleteWarehouse} /> */}
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/inventory/:itemId" component={ItemDetailsPage} /> */}
          {/* <Route path="/inventory/:itemId/edit" component={EditItem} /> */}
          <Route path="/inventory/add" component={AddInventoryPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;