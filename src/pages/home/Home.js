import { React, useState, useEffect } from "react";
import styles from "./Home.module.scss";
import Nav from "components/nav/Nav";
import Activity from "components/activity/Activity";
import Session from "components/session/Session";
import Performance from "components/performance/Performance";
import Score from "components/score/Score";
import Nutrient from "components/nutrient/Nutrient";
import { getUser, getActivity, getSession, getPerformance } from "api/Api";
import { useParams } from "react-router-dom";

/**
 * A React component that displays a user's home page and their daily statistics.
 * @component
 */

function Home() {
  const [user, setUser] = useState({});
  const [activity, setActivity] = useState({});
  const [session, setSession] = useState({});
  const [performance, setPerformance] = useState({});
  const [score, setScore] = useState(null);
  const { id } = useParams();

  /**
   * Retrieves user, activity, session, performance data and sets state variables for these data when the component mounts.
   * @function
   * @async
   * @returns {void}
   */

  useEffect(() => {
    async function data() {
      const userInfo = await getUser(id);
      setUser(userInfo);

      const userActivity = await getActivity(id);
      setActivity(userActivity);

      const userSession = await getSession(id);
      setSession(userSession);

      const userPerformance = await getPerformance(id);
      setPerformance(userPerformance);

      const userScore = userInfo.todayScore;
      setScore(userScore ? userScore : userInfo.score);
    }

    data();
  }, [id]);

  /**
   * Renders a div with an error message if user, userInfos, activity.sessions, session.sessions, or performance.kind is falsy.
   * @function
   * @returns {JSX.Element}
   */

  if (
    !user ||
    !user.userInfos ||
    !activity.sessions ||
    !session.sessions ||
    !performance.kind
  ) {
    return <div>Erreur</div>;
  }

  /**
   * Renders the component's UI
   * @function
   * @returns {JSX.Element}
   */
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
              <Activity data={activity} />
            </div>
            <div className={styles.thumbs}>
              <Session data={session} />
              <Performance data={performance} />
              <Score score={score} />
            </div>
          </div>
          <div className={styles.nutrients}>
            <Nutrient
              color="rgba(255, 0, 0, 0.07)"
              icon="IconCalorie"
              value={`${user.keyData.calorieCount}kCal`}
              label="Calories"
            />
            <Nutrient
              color="rgba(74, 184, 255, 0.1)"
              icon="IconProtein"
              value={`${user.keyData.proteinCount}g`}
              label="Proteines"
            />
            <Nutrient
              color="rgba(249, 206, 35, 0.1)"
              icon="IconCarb"
              value={`${user.keyData.carbohydrateCount}g`}
              label="Glucides"
            />
            <Nutrient
              color="rgba(253, 81, 129, 0.1)"
              icon="IconLipide"
              value={`${user.keyData.lipidCount}g`}
              label="Lipides"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
