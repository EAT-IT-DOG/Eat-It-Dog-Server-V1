import { MdOutlineHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegPlusSquare } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

export const NAVBAR_SECTION_ITEMS = [
  { sectionName: "홈", link: "/home", icon: MdOutlineHome },
  { sectionName: "내정보", link: "/profile", icon: CgProfile },
  { sectionName: "제안", link: "/suggestion", icon: FaRegPlusSquare },
  { sectionName: "검색", link: "/search", icon: BiSearch },
] as const;
