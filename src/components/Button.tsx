import { ButtonUI } from "./Types";

const btnTheme = {
  primary: "bg-blue-500 hover:bg-blue-600",
  secondary: "bg-green-500 hover:bg-green-600",
  danger: "bg-red-500 hover:bg-red-600",
  warning: "bg-orange-500 hover:bg-orange-600",
  info: "bg-gray-500 hover:bg-gray-600",
};

const btnclass =
  "text-white max-w-xs border-0 py-2 px-8 focus:outline-none rounded-xl text-lg scale-95 shadow-lg transform transition duration-500  ";

const TButton = ({ label, btnType, ...rest }: ButtonUI) => {
  return (
    <button
      className={
        btnType
          ? `${btnclass} ${btnTheme[btnType]}  `
          : `${btnclass} ${btnTheme["primary"]}`
      }
      {...rest}
    >
      {label}
    </button>
  );
};

export default TButton;
