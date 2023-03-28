import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NoData.module.scss"

function NoData() {
    return (
        <div className={styles.nodata}>
            <NavLink to='/12'>Utilisateur 12</NavLink>
            <NavLink to='/18'>Utilisateur 18</NavLink>
        </div>
    )
}

export default NoData;