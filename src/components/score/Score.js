import React from "react";
import PropTypes from "prop-types";
import styles from "./Score.module.scss";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function Score({ score }) {
  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius={75}
          outerRadius={100}
          barSize={8}
          startAngle={-270}
          endAngle={90}
          data={[{ value: score / 100 }]}
          margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 1]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            dataKey="value"
            fill="#FF0000"
            background
            cornerRadius={50}
            startAngle={-270}
            endAngle={(score / 100) * 180 - 270}
          />
          <text
            x={50}
            y={25}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            className="progress-label"
          >
            Score
          </text>
          <text
            x={130}
            y={100}
            fontWeight="bold"
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-label"
          >
            {`${score * 100}%`}
          </text>
          <text
            x={130}
            y={120}
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-label"
          >
            de votre
          </text>
          <text
            x={130}
            y={140}
            textAnchor="middle"
            dominantBaseline="middle"
            className="score-label"
          >
            objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

Score.propTypes = {
  score: PropTypes.number.isRequired,
};

export default Score;
