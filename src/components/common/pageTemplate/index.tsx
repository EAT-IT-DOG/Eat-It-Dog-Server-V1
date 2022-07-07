import { ReactNode } from "react";
import DarkmodeButton from "../darkmodeButton";
import NavBar from "../navBar";
import ProfileBar from "../profileBar";
import SearchBar from "../searchBar";
import {
  PageTemplateContaier,
  PageTemplateHeaderWrap,
  PageTemplateWrap,
} from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContaier>
      <NavBar />
      <PageTemplateWrap>
        <PageTemplateHeaderWrap>
          <SearchBar />
          <DarkmodeButton />
        </PageTemplateHeaderWrap>
        {children}
      </PageTemplateWrap>
      <ProfileBar />
    </PageTemplateContaier>
  );
};

export default PageTemplate;
