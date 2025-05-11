import { useRef } from "react";
import { useRightAsideAnimation } from "../../hooks/useRightAsideAnimation";

const RightAside = () => {
  const rightAsideRef = useRef(null);

  useRightAsideAnimation(rightAsideRef);

  return (
    <aside className="right-aside" ref={rightAsideRef}>
      <div className="right-aside__container">
        <div className="right-aside__block">
          <h3 className="right-aside__block__title">Место работы</h3>
          <a
            href="https://xn--19-vlclgjk.xn--p1ai/"
            className="right-aside__block__img right-aside__block__img--work"
            target="_blank"
          />
        </div>
        <div className="right-aside__block">
          <h3 className="right-aside__block__title">Образование</h3>
          <a
            href="https://khsu.ru/"
            className="right-aside__block__img right-aside__block__img--university"
            target="_blank"
          />
        </div>
        <div className="right-aside__img right-aside__img--school" />
      </div>
    </aside>
  );
};

export default RightAside;
