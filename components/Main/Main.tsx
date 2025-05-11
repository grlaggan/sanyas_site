const Main = () => (
  <main className="main">
    <h1 className="main__title">Для студентов</h1>
    <div className="main__block">
      <a href="#" className="main__link">
        Лекционный материал (Математика)
      </a>
      <a
        href="https://drive.google.com/drive/u/0/folders/180dV6lH-Yc6nT1idh0T3rwfjvPkAT8U4"
        className="main__link"
        target="_blank"
      >
        Практикум (Математика)
      </a>
      <a
        href="https://drive.google.com/drive/u/0/folders/1O-0PiWR83ckrczRd43uzJNUGO0HtzLQz"
        className="main__link main-small"
        target="_blank"
      >
        Рабочие программы
      </a>
    </div>
    <div className="main__block">
      <a
        href="https://drive.google.com/drive/u/0/folders/1Bz2fflc3K_6hojdWFH2T_yrVbaEyAhLb"
        className="main__link"
        target="_blank"
      >
        Лекционный материал (Физика)
      </a>
      <a href="#" className="main__link">
        Практикум (Физика)
      </a>
      <a
        href="https://drive.google.com/drive/u/0/folders/1gr-qPZ0K-PI7yz0VmJ0bt0eoIVhvKaca"
        className="main__link"
        target="_blank"
      >
        Лабораторный практикум
      </a>
      <a
        href="https://drive.google.com/drive/u/0/folders/1p82e8txuTpyE0t0NEWOa0kx5S8asm8NP"
        className="main__link main-small"
        target="_blank"
      >
        Рабочие программы
      </a>
    </div>
    <div className="link-center">
      <a
        href="https://drive.google.com/drive/u/0/folders/1fAZNirygYqgP_aQsrUkvhiYb-9i2YqZJ"
        className="main__link main-small uppercase"
        target="_blank"
      >
        Промежуточная аттестация
      </a>
    </div>
    <div className="main__feedback">
      <span className="main__text main-small">связь:</span>
      <a href="#" className="main__feedback__link">
        <img src="../../public/img/Main/vk.svg" alt="" />
      </a>
      <a
        href="mailto:EvTevs@yandex.ru"
        className="main__feedback__link"
        target="_blank"
      >
        <img src="../../public/img/Main/yandex.svg" alt="" />
      </a>
    </div>
    <img
      src="../../public/img/Main/bg.png"
      alt="Background"
      className="main__bg"
    />
  </main>
);

export default Main;
