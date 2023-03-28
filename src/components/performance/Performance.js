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
 * Composant qui affiche un graphique radar représentant les performances de l'utilisateur
 * @param {Object} props - Les props du composant
 * @param {Array} props.data - Les datas à afficher
 * @return {JSX.Element} Composant Performance
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
        fil="white"
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey="subject"
          stroke="white"
          line-stroke="none"
          tickLine={false}
          dy={1}
          dx={-2}
          tick={{ fontSize: 12 }}
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

/*Performance.propTypes = {
  data: PropTypes.array.isRequired,
};*/

export default Performance;