import SquareGrid1x1 from "../template/SquareGrid1x1";

const Skill1_1x1 = () => {
  return (
    <SquareGrid1x1
      tooltipId="habilidades-frontend-tooltip"
      tooltipContent="Habilidades-FrontEnd"
    >
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="src/assets/react.png"
            alt="User"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className="rounded-xl transition-transform duration-300 ease-in-out hover:scale-110">
        <a
          href="https://www.linkedin.com/in/tu-perfil"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-full"
        >
          <img
            src="src/assets/Tailwindcss.png"
            alt="User"
            className="w-full h-full mp:rounded-xl"
          />
        </a>
      </div>
      <div className=""></div>
      <div className=""></div>
    </SquareGrid1x1>
  );
};

export default Skill1_1x1;
