/**
 * Formats performance data into a specific format.
 * @async
 * @function
 * @param {Object} data - The performance data to format.
 * @param {Object[]} data.data - An array of performance data objects.
 * @param {number} data.data[].kind - The kind of performance data (1-6).
 * @param {number} data.data[].value - The value of the performance data.
 * @returns {Promise<Array>} The formatted performance data.
 */

export async function formatPerformance(data) {
  const translation = {
    "1": "Cardio",
    "2": "Energie",
    "3": "Endurance",
    "4": "Force",
    "5": "Vitesse",
    "6": "Intensité"
  };
  const formattedPerformance = [];

  data.data.forEach((d) => {
    formattedPerformance.push({
      label: translation[d.kind],
      value: d.value,
    });
  });

  return formattedPerformance;
}
