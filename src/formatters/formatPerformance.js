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
      subject: translation[d.kind],
      value: d.value,
    });
  });

  return formattedPerformance;
}
