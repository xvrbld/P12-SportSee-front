import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Session.module.scss";
import { formatSession } from "formatters/formatSession";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

function Session({ data }) {
  const [sessionData, setSessionData] = useState([]);
  useEffect(() => {
    async function formateData() {
      const formattedSession = await formatSession(data);
      setSessionData(formattedSession);
    }
    formateData();
  }, [data]);

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
          <Tooltip />
          <Line
            type="monotone"
            dataKey="time"
            strokeWidth={2}
            stroke="#FFFFFF"
            activeDot={{ r: 6 }}
            dot={false}
          />
          <text
            x={130}
            y={30}
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
            fill="rgba(255, 255, 255, 0.5)"
          >
            Durée moyenne des sessions
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
