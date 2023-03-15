import React from "react";
import styles from "./Goals.module.scss"
import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function Goals() {
  const data = [
    {
      name: "L",
      time: 2400,
    },
    {
      name: "M",
      time: 1398,
    },
    {
      name: "M",
      time: 9800,
    },
    {
      name: "J",
      time: 3908,
    },
    {
      name: "V",
      time: 4800,
    },
    {
      name: "S",
      time: 3800,
    },
    {
      name: "D",
      time: 4300,
    },
  ];

  return (
    <div className={styles.container}>
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis axisLine={false} tickLine={false} dataKey="name" stroke="#FFFFFF" />
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

export default Goals;
