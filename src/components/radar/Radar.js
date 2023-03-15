import React from "react";
import styles from "./Radar.module.scss";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

function RadarGraph() {
  const data = [
    {
      subject: "Intensité",
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: "Vitesse",
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Force",
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: "Endurance",
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: "Energie",
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: "Cardio",
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="50%" data={data} >
          <PolarGrid stroke="#FFFFFF" />
          <PolarAngleAxis stroke="#FFFFFF" dataKey="subject" />
          <Radar
            dataKey="A"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RadarGraph;
