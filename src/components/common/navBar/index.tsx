import {
  NavBarContainer,
  NavBarLogOutBtn,
  NavBarLogOutIcon,
  NavBarSectionItem,
  NavBarSectionItemIcon,
  NavBarSectionItemWrap,
  NavBarSectionWrap,
  NavBarTitle,
} from "./style";
import { useState } from "react";
import { NAVBAR_SECTION_ITEMS } from "../../../constants/navBar/navBar.constant";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const NavBar = () => {
  const [section, setSection] = useState<String>("홈");
  const navigate = useNavigate();

  return (
    <NavBarContainer>
      <NavBarTitle>먹어보시개</NavBarTitle>
      <NavBarSectionWrap>
        {NAVBAR_SECTION_ITEMS.map((sectionItem) => (
          <NavBarSectionItemWrap selected={sectionItem.sectionName === section}>
            <NavBarSectionItem
              selected={sectionItem.sectionName === section}
              onClick={() => {
                setSection(sectionItem.sectionName);
                navigate(sectionItem.link);
              }}
            >
              <NavBarSectionItemIcon
                selected={sectionItem.sectionName === section}
              >
                <sectionItem.icon />
              </NavBarSectionItemIcon>
              {sectionItem.sectionName}
            </NavBarSectionItem>
          </NavBarSectionItemWrap>
        ))}
      </NavBarSectionWrap>
      <NavBarLogOutBtn>
        <NavBarLogOutIcon>
          <FiLogOut />
        </NavBarLogOutIcon>
        로그아웃
      </NavBarLogOutBtn>
    </NavBarContainer>
  );
};

export default NavBar;
