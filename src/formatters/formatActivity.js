export async function formatActivity(data) {
    const days = data.sessions;
    const formattedActivity = [];

    days.forEach((day, index) => {
        formattedActivity.push({
            name:index+1,
            weight:day.kilogram,
            calorie:day.calories
        })
    })
    return formattedActivity
}