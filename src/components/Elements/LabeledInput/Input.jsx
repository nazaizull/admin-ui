import { useContext } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";

const Input = ({ name, type, placeholder, register }) => {
  const { isDarkMode } = useContext(ColorModeContext);

  // Gunakan warna yang sama dengan background aplikasi
  const variant = isDarkMode
    ? "bg-black text-white border-gray-700 placeholder-gray-500" // Sama dengan warna latar Dark Mode
    : "bg-special-mainBg text-gray-01 border-gray-03 placeholder-gray-500";

  return (
    <input
      type={type}
      className={`${variant} py-3 ps-4 text-sm rounded-md w-full focus:border-primary focus:outline-none focus:ring-0`}
      placeholder={placeholder}
      name={name}
      id={name}
      {...register}
    />
  );
};

export default Input;
