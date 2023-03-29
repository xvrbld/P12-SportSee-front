/**
 * Formats activity data into a specific format.
 * @async
 * @function
 * @param {Object} data - The activity data to format.
 * @param {Array} data.sessions - The array of session data to format.
 * @param {number} data.sessions[].kilogram - The weight in kilograms for the session.
 * @param {number} data.sessions[].calories - The number of calories burned during the session.
 * @returns {Promise<Array>} The formatted activity data.
 */

export async function formatActivity(data) {
    const days = data.sessions;
    const formattedActivity = [];

    days.forEach((day, index) => {
        formattedActivity.push({
            name: index+1,
            weight: day.kilogram,
            calorie: day.calories
        });
    });

    return formattedActivity;
}