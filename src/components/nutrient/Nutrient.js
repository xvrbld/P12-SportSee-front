import React from "react";
import PropTypes from "prop-types";
import styles from "./Nutrient.module.scss";
import IconCalorie from "components/icons/Calorie";
import IconProtein from "components/icons/Protein";
import IconCarb from "components/icons/Carb";
import IconLipide from "components/icons/Lipide";

/**
 * A nutrient component displaying an icon, value, and label.
 * @module Nutrient
 * @param {Object} props - The props object.
 * @param {("IconCalorie"|"IconProtein"|"IconCarb"|"IconLipide")} props.icon - The icon to display.
 * @param {string} props.value - The value to display.
 * @param {string} props.label - The label to display.
 * @param {string} props.color - The color of the icon.
 * @returns {JSX.Element} - The rendered Nutrient component.
 */

function Nutrient({ icon, value, label, color }) {
  return (
    <div className={styles.nutrient}>
      <div className={styles.content}>
        <div
          className={styles.icon}
          style={{
            backgroundColor: color,
          }}
        >
          {icon === "IconCalorie" && <IconCalorie />}
          {icon === "IconProtein" && <IconProtein />}
          {icon === "IconCarb" && <IconCarb />}
          {icon === "IconLipide" && <IconLipide />}
        </div>
        <div className={styles.text}>
          <div className={styles.value}>{value}</div>
          <div className={styles.label}>{label}</div>
        </div>
      </div>
    </div>
  );
}

Nutrient.propTypes = {
  icon: PropTypes.oneOf(["IconCalorie", "IconProtein", "IconCarb", "IconLipide"]).isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Nutrient;