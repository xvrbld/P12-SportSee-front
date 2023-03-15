export async function getUser(id) {
  const data = {
    id: 19,
    userInfos: {
      firstName: "Xavier",
      lastName: "Baldacchino",
      age: 30,
    },
    todayScore: 0.8,
    keyData: {
      calorieCount: 3000,
      proteinCount: 255,
      carbohydrateCount: 900,
      lipidCount: 280,
    },
  };
  return data;
}

export async function getActivity(id) {
  const data = {
    userId: 19,
    sessions: [
      {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240,
      },
      {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220,
      },
      {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280,
      },
      {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290,
      },
      {
        day: "2020-07-05",
        kilogram: 80,
        calories: 200,
      },
      {
        day: "2020-07-06",
        kilogram: 78,
        calories: 262,
      },
      {
        day: "2020-07-07",
        kilogram: 76,
        calories: 590,
      },
    ],
  };
  return data;
}
