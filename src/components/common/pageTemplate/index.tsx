import { ReactNode } from "react";
import NavBar from "../navBar";
import ProfileBar from "../profileBar";
import { PageTemplateContaier, PageTemplateWrap } from "./style";

interface Props {
  children: ReactNode;
}

const PageTemplate = ({ children }: Props) => {
  return (
    <PageTemplateContaier>
      <NavBar />
      <PageTemplateWrap>{children}</PageTemplateWrap>
      <ProfileBar />
    </PageTemplateContaier>
  );
};

export default PageTemplate;
