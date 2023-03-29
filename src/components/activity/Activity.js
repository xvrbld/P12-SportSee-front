import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Activity.module.scss";
import { formatActivity } from "formatters/formatActivity";
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

/**
 * Custom tooltip component for activity bar chart
 * @module CustomTooltip
 * @param {Object} props - Component props
 * @param {boolean} props.active - Whether tooltip is active
 * @param {Array} props.payload - Array of tooltip data
 * @returns {null|JSX.Element} - React component or null
 */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.tooltip}>
        <p>{`${payload[0].value}kg`}</p>
        <p>{`${payload[1].value}kCal`}</p>
      </div>
    );
  }
  return null;
};

/**
 * React component that displays a bar chart of daily activity data
 * @module Activity
 * @param {Object} props - Component props
 * @param {Object} props.data - User's activity data
 * @param {number} props.data.userId - User ID
 * @param {Array} props.data.sessions - Array of daily activity sessions
 * @returns {JSX.Element} - React component
 */
function Activity({ data }) {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    async function formatData() {
      const formattedActivity = await formatActivity(data);
      setActivityData(formattedActivity);
    }
    formatData();
  }, [data]);

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
            content={<CustomTooltip />}
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
            className={styles.barCalories}
            name={
              <span style={{ color: "black" }}>Calories brûlées (kCal)</span>
            }
            fill="#E60000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

Activity.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    sessions: PropTypes.array.isRequired,
  }).isRequired,
};

export default Activity;
