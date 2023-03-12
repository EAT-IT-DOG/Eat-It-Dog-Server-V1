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
import { NAVBAR_SECTION_ITEMS } from "../../../constants/navBar/navBar.constant";
import { useLocation, useNavigate } from "react-router-dom";
import { FiLogOut } from "@react-icons/all-files/fi/FiLogOut";

const NavBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <NavBarContainer>
      <NavBarTitle>먹어보시개</NavBarTitle>
      <NavBarSectionWrap>
        {NAVBAR_SECTION_ITEMS.map((sectionItem) => (
          <NavBarSectionItemWrap
            selected={sectionItem.selector === pathname}
            key={sectionItem.sectionName}
          >
            <NavBarSectionItem
              selected={sectionItem.selector === pathname}
              onClick={() => {
                navigate(sectionItem.link);
              }}
            >
              <NavBarSectionItemIcon
                selected={sectionItem.selector === pathname}
              >
                <sectionItem.icon />
              </NavBarSectionItemIcon>
              {sectionItem.sectionName}
            </NavBarSectionItem>
          </NavBarSectionItemWrap>
        ))}
      </NavBarSectionWrap>
      {/* <NavBarLogOutBtn>
        <NavBarLogOutIcon>
          <FiLogOut />
        </NavBarLogOutIcon>
        로그아웃
      </NavBarLogOutBtn> */}
    </NavBarContainer>
  );
};

export default NavBar;
