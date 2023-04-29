import { useMemo, useState, createContext } from "react";

const ThemeContext = createContext(false);

const ThemeProvider = ({ children }) => {
  const [toggleTheme, setToggleTheme] = useState(false);

  const toggleThemeColor = () => {
    setToggleTheme(!toggleTheme);
  };

  const val = useMemo(() => ({ toggleTheme, toggleThemeColor }), [toggleTheme])

  return (
    <ThemeContext.Provider value={val}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };