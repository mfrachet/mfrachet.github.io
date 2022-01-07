import { Link } from "gatsby";
import * as React from "react";

export const Navbar = () => {
  const [theme, setTheme] = React.useState("light");
  const [visibleOnMobile, setVisibleOnMobile] = React.useState(false);

  React.useLayoutEffect(() => {
    const localTheme = window.localStorage.getItem("theme") || "light";

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
            Toggle menu
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
            Switch to <strong>{theme === "light" ? "dark" : "light"}</strong>{" "}
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
