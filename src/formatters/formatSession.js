/**
 * Formats session data into a specific format.
 * @async
 * @function
 * @param {Object} data - The session data to format.
 * @param {Array} data.sessions - The array of session data to format.
 * @param {number} data.sessions[].sessionLength - The length of the session in minutes.
 * @returns {Promise<Array>} The formatted session data.
 */

export async function formatSession(data) {
    const days = data.sessions;
    const formattedSession = [];
    const dayLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    days.forEach((day, index) => {
        const dayLetter = dayLetters[index];
        formattedSession.push({
            name: dayLetter,
            time: day.sessionLength
        });
    });

    return formattedSession;
}