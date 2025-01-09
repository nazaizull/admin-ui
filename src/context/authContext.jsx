import { createContext, useState, useEffect } from "react";

const INITIAL_STATE = localStorage.getItem("refreshToken") ? true : false;
const INITIAL_NAME = localStorage.getItem("name") || ""; // Ambil nama dari localStorage

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(INITIAL_STATE);
  const [name, setName] = useState(INITIAL_NAME);

  useEffect(() => {
    // Simpan nama pengguna ke localStorage saat berubah
    localStorage.setItem("name", name);
  }, [name]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};
