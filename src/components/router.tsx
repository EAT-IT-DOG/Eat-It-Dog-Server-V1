import { Route, Routes } from "react-router-dom";
import * as P from "../pages";
import withFix from "./HOC/withFix";

const Router = () => {
  const Home = withFix(P.HomePage, false);
  const Profile = withFix(P.ProfilePage, true);
  const Search = withFix(P.SearchPage, false);
  const Suggestion = withFix(P.SuggestionPage, true);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/search" element={<Search />} />
      <Route path="/search/:name" element={<Search />} />
      <Route path="/suggestion" element={<Suggestion />} />
      <Route path="*" element={<P.NotFoundPage />} />
    </Routes>
  );
};
export default Router;
