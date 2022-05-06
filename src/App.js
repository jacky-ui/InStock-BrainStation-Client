import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import DeleteWarehouse from "./components/DeleteWarehouse/DeleteWarehouse";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import AddWarehousePage from "./pages/AddWarehousePage/AddWarehousePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
         <Switch>

          {/*<Route path="/" exact component={HomePage} />*/}
          {/* <Route path="/warehouse/:warehouseId" component={WarehouseIndividual} />
          <Route

            path="/warehouse/:warehouseId/edit"
            component={EditWarehousePage}
          /> */}
          <Route path="/warehouse/add" component={AddWarehousePage} />
          {/* <Route path="/inventory" component={Inventory} />
          <Route path="/inventory/:itemId" component={ItemDetailsPage} />
          <Route path="/inventory/:itemId/edit" component={EditItem} />
  <Route path="/inventory/add" component={AddItem} /> */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
