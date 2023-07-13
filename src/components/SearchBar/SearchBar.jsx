import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import style from "./SearchBar.module.scss";

const SearchBar = ({ formSubmit }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <form
      className={style.search_bar}
      onSubmit={handleSubmit(formSubmit)}
    >
      <input
        type="text"
        {...register("searchTerm")}
        className={style.search_bar__input}
      />
      <button>Search</button>
    </form>
  );
};

export default SearchBar;
