import React from "react";
import PropTypes from "prop-types"; // import PropTypes
import styles from "./Nutrient.module.scss";
import IconCalorie from "components/icons/Calorie";
import IconProtein from "components/icons/Protein";
import IconCarb from "components/icons/Carb";
import IconLipide from "components/icons/Lipide";

/**
 * Un composant pour afficher la valeur d'un nutriment avec une icone, un label et une couleur de background.
 * @param {Object} props - Les props du composant
 * @param {string} props.icon - L'icone du nutriment affiché
 * @param {number} props.value - La valeur du nutriment affiché
 * @param {string} props.label - Le label du nutriment affiché
 * @param {string} props.color - La couleur à utiliser pour le background
 * @returns {JSX.Element} Le composant d'un nutriment
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

// Define PropTypes
/*Nutrient.propTypes = {
  icon: PropTypes.oneOf(["IconCalorie", "IconProtein", "IconCarb", "IconLipide"]).isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};*/

export default Nutrient;