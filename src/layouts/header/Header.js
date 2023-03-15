import React from "react";
import { ReactComponent as Logo } from "assets/logo.svg";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink className={styles.link} to={"/"}>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to={"/profile"}>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to={"/setup"}>
                Réglage
              </NavLink>
            </li>
            <li>
              <NavLink className={styles.link} to={"/community"}>
                Communauté
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
