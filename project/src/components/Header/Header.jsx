import style from "./Header.module.scss";

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.header__main_heading}>
        Google Books Search App
      </h1>
      <p className={style.header__sub_heading}>
        A simple app to search Google Books. Get searching!
      </p>
    </header>
  );
};

export default Header;
