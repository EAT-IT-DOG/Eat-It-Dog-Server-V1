import { ReactNode } from "react";
import DarkmodeButton from "../DarkmodeButton";
import NavBar from "../NavBar";
import ProfileBar from "../ProfileBar";
import SearchBar from "../SearchBar";
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
