import "./styles/App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";
import WarehouseIndividual from "./pages/WarehouseIndividual/WarehouseIndividual";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";
import AddItem from "./components/AddItem/AddItem";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import AddInventoryPage from "./pages/AddInventoryPage/AddInventoryPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import EditInventoryPage from "./pages/EditInventoryPage/EditInventoryPage";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
         <Switch>
          {/* Warehouses Route Paths */}
          <Route path="/" exact component={WarehousePage} />
          <Route path="/warehouse/add" exact component={AddWarehousePage} />
          <Route path="/warehouse/:warehouseId" exact component={WarehouseIndividual} />
          <Route path="/warehouse/:warehouseId/edit" exact component={EditWarehousePage} />
          
          {/* Inventory Route Paths */}
          <Route path="/inventory" exact component={InventoryPage} />
          <Route path="/inventory/add" exact component={AddInventoryPage} />
          <Route path="/inventory/:itemId" exact component={ItemDetailsPage} />
          <Route path="/inventory/:itemId/edit" component={EditInventoryPage} />
          <Route path="/inventory/add" component={AddItem} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;