import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { FiSun, FiMoon } from "react-icons/fi";
import "./ThemeSetter.scss";

const themes = { light: "light-theme", dark: "dark-theme" };
const initialTheme = themes.light;

const ThemeSetter = () => {
  const [theme, setTheme] = useState();

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme !== themes.light && currentTheme !== themes.dark)
      setThemeConfig(initialTheme);
    else setThemeConfig(currentTheme);
  }, []);

  const changeTheme = () => {
    document.body.classList.remove(theme);
    if (theme === themes.dark) {
      setThemeConfig(themes.light);
    } else {
      setThemeConfig(themes.dark);
    }
  };

  const setThemeConfig = (newTheme) => {
    localStorage.setItem("theme", newTheme);
    document.body.classList.add(newTheme);
    setTheme(newTheme);
  };

  return (
    <IconContext.Provider value={{ className: "theme-icon" }}>
      <div className="theme-setter" onClick={changeTheme}>
        {theme === themes.dark ? <FiSun /> : <FiMoon />}
      </div>
    </IconContext.Provider>
  );
};

export default ThemeSetter;
