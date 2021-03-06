import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Teacher from "./teacher";
import Kakaomap from "./kakaomap";
import Login from "./login";
import Signup from "./signup";

//container
import { Register } from "../containers";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/teacher" component={Teacher} />
      <Route path="/kakaomap" component={Kakaomap} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Register} />
    </Switch>
  );
};

export default Main;
