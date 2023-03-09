import { Route, Routes } from "react-router-dom";
import * as P from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.homePage />} />
      <Route path="/profile" element={<P.profilePage />} />
    </Routes>
  );
};
export default Router;
