import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import Footer from "./components/Footer/Footer";
import DeleteWarehouse from "./components/DeleteWarehouse/DeleteWarehouse";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseIndividual from "./components/WarehouseIndividual/WarehouseIndividual";
import EditWarehousePage from "./pages/EditWarehousePage/EditWarehousePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
         <Switch>

          <Route path="/" exact component={WarehousePage} />
          <Route path="/warehouse/:warehouseId" component={WarehouseIndividual} />
          <Route

            path="/warehouse/:warehouseId/edit"
            component={EditWarehousePage}
          />
          <Route path="/warehouse/:warehouseId/delete" component={DeleteWarehouse} />
          {/* <Route path="/warehouse/add" component={AddWarehouse} /> */}
          {/* <Route path="/inventory" component={Inventory} /> */}
          {/* <Route path="/inventory/:itemId" component={ItemDetailsPage} /> */}
          {/* <Route path="/inventory/:itemId/edit" component={EditItem} /> */}
  {/* <Route path="/inventory/add" component={AddItem} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
