import { useLeftAsideAnimation } from "../../hooks/useLeftAsideAnimation";
import { useRef } from "react";

const LeftAside = () => {
  const leftAsideRef = useRef(null);

  useLeftAsideAnimation(leftAsideRef);

  return (
    <aside className="left-aside" ref={leftAsideRef}>
      <img
        src="../../public/img/LeftAside/photo.png"
        alt="Photo"
        className="left-aside__photo"
      />
      <span className="left-aside__info-text margin-top text-center">
        Самостоятельная подготовка
      </span>
      <div className="left-aside__info-exams">
        <a
          href="https://sdamgia.ru/?ysclid=mai3kemod8806992403"
          className="left-aside__link"
          target="_blank"
        >
          <img src="../../public/img/LeftAside/oge.jpg" alt="Oge" />
        </a>
        <a
          href="https://sdamgia.ru/?ysclid=mai3kemod8806992403"
          className="left-aside__link"
          target="_blank"
        >
          <img src="../../public/img/LeftAside/ege.jpg" alt="Oge" />
        </a>
      </div>
      <div className="left-aside__video-lessons">
        <span className="left-aside__info-text">Видеоуроки:</span>
        <a
          href="https://rutube.ru/channel/39163190/"
          className="left-aside__info-link"
          target="_blank"
        >
          Павел Виктор(RT)
        </a>
        <a
          href="https://videouroki.net/"
          className="left-aside__info-link"
          target="_blank"
        >
          Videouroki.net
        </a>
      </div>
      <div className="left-aside__books">
        <span className="left-aside__info-text small">
          Электронные учебники:
        </span>
        <a
          href="https://drive.google.com/drive/u/0/folders/1OLhRUm9TRph6sBY2fbaon9LmAnCdsViR"
          className="left-aside__info-link big"
          target="_blank"
        >
          Физика
        </a>
        <a
          href="https://drive.google.com/drive/u/0/folders/1D_uivqKFtUwbxqXKsBC_E42IfPOqnjTe"
          className="left-aside__info-link big"
          target="_blank"
        >
          Математика
        </a>
      </div>
    </aside>
  );
};

export default LeftAside;
