import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { ETheme } from "../../../enum/theme/theme.enum";
import useTheme from "../../../hooks/theme/useTheme";
import { themeModeAtom } from "../../../store/theme/themeStore";
import { DarkmodeButtonContainer, DarkmodeButtonIcon } from "./style";
import { BiMoon } from "react-icons/bi";
import { HiOutlineSun } from "react-icons/hi";

const DarkmodeButton = () => {
  const [currentTheme, setCurrentTheme] = useRecoilState<ETheme>(themeModeAtom);
  const { handleTheme, themeColor } = useTheme();

  useEffect(() => {
    console.log(currentTheme);
  }, [currentTheme]);

  return (
    <DarkmodeButtonContainer onClick={handleTheme}>
      <DarkmodeButtonIcon>
        {currentTheme === ETheme.LIGHT ? <HiOutlineSun /> : <BiMoon />}
      </DarkmodeButtonIcon>
    </DarkmodeButtonContainer>
  );
};

export default DarkmodeButton;
