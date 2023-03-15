import React from "react";
import styles from "./Kpi.module.scss";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function Kpi() {
  const data = [{ name: "A", x: 1, fill: "#FF0000" }];
  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          data={data}
          innerRadius={75}
          barSize={8}
          startAngle={-270}
          endAngle={-180}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 10]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey="value"
            cornerRadius={30 / 2}
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
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Kpi;
