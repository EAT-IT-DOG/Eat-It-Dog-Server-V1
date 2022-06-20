import { MdOutlineHome } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegPlusSquare } from "react-icons/fa";
import { RiSearchLine } from "react-icons/ri";

export const NAVBAR_SECTION_ITEMS = [
  { sectionName: "홈", link: "/home", icon: MdOutlineHome },
  { sectionName: "내정보", link: "/profile", icon: CgProfile },
  { sectionName: "제안", link: "/suggestion", icon: FaRegPlusSquare },
  { sectionName: "검색", link: "/search", icon: RiSearchLine },
] as const;
