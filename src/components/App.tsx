import { Route, Routes } from "react-router-dom";
import { Deal } from "./deal/Deal";
import { Login } from "./auth/login/Login";
import { Main } from "./main/Main";
import { ContainerAuth } from "../shared/styles/container";
import { Registration } from "./auth/registration/Registration";

export const App = () => {
  return (
    <ContainerAuth>
      <Routes>
        <Route path={"/"} element={<Login />}></Route>
        <Route path={"/registration"} element={<Registration />}></Route>
        <Route path={"/main"} element={<Main />}></Route>
        <Route path={"/deal"} element={<Deal />}></Route>
      </Routes>
    </ContainerAuth>
  );
};
