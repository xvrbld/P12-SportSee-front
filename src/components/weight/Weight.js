import { React, useEffect, useState } from "react";
import styles from "./Weight.module.scss";
import { formateActivity } from "formatters/formateActivity";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

function Weight({data}) {
  const [activityData, setActivityData] = useState([])
  useEffect(() => {
    async function formateData() {
      const activityFormated = await formateActivity(data)
      setActivityData(activityFormated)
    }
    formateData();
  },[data])
  

  return (
    <div className={styles.container}>
      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={activityData}>
          <CartesianGrid
            vertical={false}
            strokeDasharray="4 4"
            stroke="#9B9EAC"
          />
          <XAxis
            dataKey="name"
            axisLine={true}
            tickLine={false}
            stroke="#9B9EAC"
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            yAxisId="left"
            orientation="right"
            tickCount={3}
            domain={["dataMin -2", "dataMax +1"]}
          />
          <YAxis hide yAxisId="right" />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            cursor={{ fill: "gray", opacity: 0.3 }}
            content={""}
            offset={30}
            allowEscapeViewBox={{ x: true }}
            position={{ y: 0 }}
          />

          <text x={30} y={30} className={styles.container__title}>
            Activité quotidienne
          </text>

          <Legend
            align="right"
            verticalAlign="top"
            height={80}
            iconSize={14}
            iconType="circle"
            wrapperStyle={{ right: 30, top: 12 }}
          />
          <Bar
            dataKey="weight"
            barSize={8}
            radius={[10, 10, 0, 0]}
            yAxisId="left"
            className={styles.container__barKilo}
            name="Poids (kg)"
            fill="#282D30"
          />
          <Bar
            dataKey="calorie"
            barSize={8}
            radius={[10, 10, 0, 0]}
            yAxisId="right"
            className={styles.container__barCalories}
            name="Calories brûlées (kCal)"
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Weight;
