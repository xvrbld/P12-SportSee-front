import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Performance.module.scss";
import { formatPerformance } from "formatters/formatPerformance";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

/**
 * A component that displays the performance of a user as a radar chart.
 * @module Performance
 * @param {Object} props - The props object.
 * @param {Object} props.data - An object that contains the performance data of a user.
 * @param {number} props.data.userId - The ID of the user.
 * @param {Array} props.data.data - An array of performance data for the user.
 * @param {Object} props.data.kind - The type of performance data.
 * @returns {JSX.Element} - The rendered Performance component.
 */

function Performance({ data }) {
  const [performanceData, setPerformanceData] = useState([]);
  useEffect(() => {
    async function formatData() {
      const formattedPerformance = await formatPerformance(data);
      setPerformanceData(formattedPerformance);
    }
    formatData();
  }, [data]);

  return (
    <div className={styles.container}>
      <ResponsiveContainer>
        <RadarChart
          cx={130}
          cy={130}
          outerRadius={60}
          data={performanceData}
          fill="white"
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="label"
            stroke="white"
            strokeWidth={0}
            tickLine={false}
            dy={1}
            dx={-2}
            tick={{ fontSize: 12 }}
            radialLines={false}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

Performance.propTypes = {
  data: PropTypes.shape({
    userId: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    kind: PropTypes.object.isRequired,
  }).isRequired,
};

export default Performance;
