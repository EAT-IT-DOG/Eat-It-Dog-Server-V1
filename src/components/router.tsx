import { Route, Routes } from "react-router-dom";
import * as P from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.homePage />} />
    </Routes>
  );
};
export default Router;
