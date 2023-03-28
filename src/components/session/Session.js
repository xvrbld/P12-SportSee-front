import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Session.module.scss";
import { formatSession } from "formatters/formatSession";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

/**
 * Un composant à courbe qui affiche la durée des sessions de l'utilisateur pendant la semaine
 * @param {Object[]} props - Les props du composant
 * @param {SessionData[]} props.data - Un tableau avec les data contenant le nom des jours et le temps de chaque session
 * @return {JSX.Element} Composant Session
 */

function Session({ data }) {
  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    async function formateData() {
      const formattedSession = await formatSession(data);
      setSessionData(formattedSession);
    }
    formateData();
  }, [data]);

  /**
   * Une info-bulle pour le graphique à courbe
   * @param {Object} props - Les props du composant
   * @param {boolean} props.active - L'info-bulle est active ou non
   * @param {Object[]} props.payload - Un tableau d'objets des data pour l'info-bulle
   * @returns {JSX.Element} - Composant CustomTooltip
   */

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className={styles.tooltip}>
          <p className="label">{`${data.time} min`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={sessionData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis
            axisLine={false}
            tickLine={false}
            dataKey="name"
            stroke="#FFFFFF"
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="time"
            strokeWidth={2}
            stroke="#FFFFFF"
            activeDot={{ r: 6 }}
            dot={false}
          />
          <Line
            type="monotone"
            dataKey="time"
            strokeWidth={2}
            stroke="#FFFFFF"
            activeDot={{ r: 6 }}
            dot={false}
          />
          <text
            x={100}
            y={30}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255, 255, 255, 0.5)"
          >
            Durée moyenne des
          </text>
          <text
            x={60}
            y={50}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255, 255, 255, 0.5)"
          >
            sessions
          </text>
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

/*Session.propTypes = {
  data: PropTypes.array.isRequired,
};*/

export default Session;
