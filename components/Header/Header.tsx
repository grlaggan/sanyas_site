import { useRef } from "react";
import { useHeaderAnimation } from "../../hooks/useHeaderAnimation";

const Header = () => {
  const headerRef = useRef(null);

  useHeaderAnimation(headerRef);

  return (
    <header className="header" ref={headerRef}>
      <div className="header__wrapper">
        <h2 className="header__title">Афанасьева Евгения Викторовна</h2>
        <p className="header__info">
          преподаватель физики, математики - стаж работы: 4 года
        </p>
      </div>
      <img src="/img/Header/bg.png" alt="Background" className="header__bg" />
    </header>
  );
};

export default Header;
