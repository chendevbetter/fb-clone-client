import React from "react";
import Signup from "./components/authentication/signup/signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./reduxStore/index";
import { Provider } from "react-redux";
import Home from "./Home/Home";
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
