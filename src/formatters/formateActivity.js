export async function formateActivity(data) {
    const days = data.sessions;
    const activityFormated = [];

    days.forEach((day, index) => {
        activityFormated.push({
            name:index+1,
            weight:day.kilogram,
            calorie:day.calories
        })
    })
    return activityFormated
}