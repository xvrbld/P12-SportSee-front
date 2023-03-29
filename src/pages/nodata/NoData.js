/**
 * A React component for rendering a message when there is no data available.
 * @function
 * @returns {JSX.Element} The NoData component
 */

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