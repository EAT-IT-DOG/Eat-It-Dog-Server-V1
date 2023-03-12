import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const useSearchFood = () => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const onSearchKeyword = (e: FormEvent) => {
    if (keyword === "") {
      return;
    }

    e.preventDefault();

    navigate(`/search/${keyword}`);

    setKeyword("");
  };

  return {
    keyword,
    onChangeKeyword,
    onSearchKeyword,
  };
};

export default useSearchFood;
