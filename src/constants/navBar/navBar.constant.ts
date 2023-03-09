import { VscHome } from "@react-icons/all-files/vsc/VscHome";
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { FaRegPlusSquare } from "@react-icons/all-files/fa/FaRegPlusSquare";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";

export const NAVBAR_SECTION_ITEMS = [
  { sectionName: "홈", link: "/", icon: VscHome },
  { sectionName: "내정보", link: "/profile", icon: CgProfile },
  { sectionName: "제안", link: "/suggestion", icon: FaRegPlusSquare },
  { sectionName: "검색", link: "/search", icon: BiSearch },
] as const;
