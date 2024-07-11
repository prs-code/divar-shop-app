import { Route, Routes } from "react-router-dom";
import PageNotFound from "src/pages/404";
import Admin from "src/pages/Admin";
import Auth from "src/pages/Auth";
import Dashboard from "src/pages/Dashboard";
import Home from "src/pages/Home";

function Router() {
  return (
    <Routes>
        <Route index element={ <Home /> }/>
        <Route path="/dashboard" element={ <Dashboard /> }/>
        <Route path="/admin" element={ <Admin /> }/>
        <Route path="/login" element={ <Auth /> }/>
        <Route path="*" element={ <PageNotFound /> }/>
    </Routes>
  )
};

export default Router;