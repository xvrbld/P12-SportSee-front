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
      calorieCount: 300,
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

export async function getSession(id) {
  const data = {
    userId: 19,
    sessions: [
      {
        day: 1,
        sessionLength: 10
      },
      {
        day: 2,
        sessionLength: 25
      },
      {
        day: 3,
        sessionLength: 50
      },
      {
        day: 4,
        sessionLength: 38
      },
      {
        day: 5,
        sessionLength: 27
      },
      {
        day: 6,
        sessionLength: 8
      },
      {
        day: 7,
        sessionLength: 0
      }
    ]
  };
  return data;
}

export async function getPerformance(id) {
  const data = {
    "userId": 19,
    "kind": {
      "1": "cardio",
      "2": "energy",
      "3": "endurance",
      "4": "strength",
      "5": "speed",
      "6": "intensity"
    },
    "data": [
      {
        "value": 60,
        "kind": 1
      },
      {
        "value": 135,
        "kind": 2
      },
      {
        "value": 170,
        "kind": 3
      },
      {
        "value": 30,
        "kind": 4
      },
      {
        "value": 80,
        "kind": 5
      },
      {
        "value": 70,
        "kind": 6
      }
    ]
  };
  
  return data;
}
