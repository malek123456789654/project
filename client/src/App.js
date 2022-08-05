import "./App.css";
import Navigation from "./Components/Navigation";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

import Footer from "./Components/Footer";
import ProductList from "./Components/ProductList";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_current } from "./redux/actions/authAction";
import MainProduct from "./Components/MainProduct";
import { listProducts } from "./redux/actions/ProductAction";

import Newproduct from "./Components/Newproduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
    dispatch(listProducts());
  }, []);

  return (
    <div className="App">
      {/* <AlertErrors /> */}
      <Navigation />

      <Routes>
        <Route path="/home" element={<Home></Home>} />
        <Route
          path="/Profile/*"
          element={
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        />
        <Route path="/signin" element={<Login></Login>} />
        <Route path="/signup" element={<Register></Register>} />

        <Route path="/product" element={<MainProduct></MainProduct>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
