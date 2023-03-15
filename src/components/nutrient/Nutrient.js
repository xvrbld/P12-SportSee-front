import React from "react";
import styles from "./Nutrient.module.scss";
import IconCalorie from "components/icons/Calorie";
import IconProtein from "components/icons/Protein";
import IconCarb from "components/icons/Carb";
import IconLipide from "components/icons/Lipide";

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

export default Nutrient;
