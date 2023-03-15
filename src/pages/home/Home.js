import { React, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Nav from "components/nav/Nav";
import Weight from "components/weight/Weight";
import Goals from "components/goals/Goals";
import RadarGraph from "components/radar/Radar";
import Kpi from "components/kpi/Kpi";
import Nutrient from "components/nutrient/Nutrient";
import { getUser, getActivity } from "mock/mock";

function Home() {
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState({});
  const id=12; // A remplacer par l'ID dans l'URL
  useEffect(() => {
    async function data() {
      const userInfo = await getUser(id)
      setUser(userInfo)

      const userActivity = await getActivity(id)
      setActivity(userActivity)
    }
    data();
  },[id])
  if (!user || !user.userInfos) {
    return(<div>Erreur</div>)
  }
  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.main}>
        <h1 className={styles.userName}>
          <span className={styles.firstName}>Bonjour</span>{" "}
          <span className={styles.lastName}>{user.userInfos.firstName}</span>
        </h1>
        <p className={styles.greet}>
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
        <div className={styles.stats}>
          <div className={styles.graphics}>
            <div className={styles.weight}>
              <Weight data={activity}/>
            </div>
            <div className={styles.thumbs}>
              <Goals />
              <RadarGraph />
              <Kpi />
            </div>
          </div>
          <div className={styles.nutrients}>
            <Nutrient color="rgba(255, 0, 0, 0.07)" icon="IconCalorie" value={`${user.keyData.calorieCount}kCal`} label="Calories" />
            <Nutrient color= "rgba(74, 184, 255, 0.1)" icon="IconProtein" value="155g" label="Proteines"/>
            <Nutrient icon="IconCarb" value="290g" label="Glucides"/>
            <Nutrient icon="IconLipide" value="50g" label="Lipides"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
