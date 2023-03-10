import { Route, Routes } from "react-router-dom";
import * as P from "../pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<P.homePage />} />
      <Route path="/profile" element={<P.profilePage />} />
      <Route path="/search" element={<P.searchPage />} />
      <Route path="/search/:name" element={<P.searchPage />} />
    </Routes>
  );
};
export default Router;
