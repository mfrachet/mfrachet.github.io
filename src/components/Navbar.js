import { Link } from "gatsby";
import * as React from "react";
import { MenuIcon } from "./MenuIcon";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export const Navbar = () => {
  const [theme, setTheme] = React.useState("dark");
  const [visibleOnMobile, setVisibleOnMobile] = React.useState(false);

  React.useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || "dark";

    setTheme(localTheme);
  }, []);

  const listMenu = (
    <ul className="navbar-list">
      <li>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </li>

      <li>
        <Link to="/blog" activeClassName="active">
          Blog posts
        </Link>
      </li>

      <li>
        <Link to="/snippets" activeClassName="active">
          {`Code Snippets & Tricks`}
        </Link>
      </li>
    </ul>
  );

  return (
    <div className="wrapper">
      <nav className="navbar-wrapper">
        <div className="navbar">
          <button
            className="navbar-toggle"
            onClick={() => setVisibleOnMobile((s) => !s)}
          >
            <MenuIcon aria-hidden /> Toggle menu
          </button>

          <div className="not-mobile">{listMenu}</div>

          <button
            className="btn"
            onClick={() => {
              const nextTheme = theme === "light" ? "dark" : "light";

              setTheme(nextTheme);

              window.clickToSwitchTheme(nextTheme);
            }}
          >
            {theme === "dark" && <SunIcon aria-hidden />}
            {theme === "light" && <MoonIcon aria-hidden />}
            <span>
              Switch to <strong>{theme === "light" ? "dark" : "light"}</strong>
            </span>
          </button>
        </div>

        <div
          className={`mobile-only ${visibleOnMobile ? "visible" : "invisible"}`}
        >
          {listMenu}
        </div>
      </nav>
    </div>
  );
};
