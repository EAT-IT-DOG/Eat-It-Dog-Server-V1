import {
  SearchBarContainer,
  SearchBarInput,
  SearchBarSubmitButton,
  SearchBarSubmitButtonIcon,
} from "./style";
import { BiSearch } from "@react-icons/all-files/bi/BiSearch";

const SearchBar = () => {
  return (
    <SearchBarContainer onSubmit={() => console.log("서브밋")}>
      <SearchBarInput placeholder="음식 이름을 입력하세요" />
      <SearchBarSubmitButton type="submit">
        <SearchBarSubmitButtonIcon>
          <BiSearch />
        </SearchBarSubmitButtonIcon>
      </SearchBarSubmitButton>
    </SearchBarContainer>
  );
};

export default SearchBar;
