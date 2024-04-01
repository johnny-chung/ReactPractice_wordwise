import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";

import Product from "./pages/Product";
import PageNotFound from "./pages/PageNotFound";
import Pricing from "./pages/Pricing";
import Layout from "./pages/Layout";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

import { CitiesProvider } from "./contexts/CityiesContext";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CitiesProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route path="app" element={<AppLayout />}>
                <Route index element={<Navigate replace to="cities " />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </CitiesProvider>
      </BrowserRouter>
    </>
  );
}
