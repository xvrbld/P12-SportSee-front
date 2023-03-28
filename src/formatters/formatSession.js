export async function formatSession(data) {
    const days = data.sessions;
    const formattedSession = [];
    const dayLetters = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

    days.forEach((day, index) => {
        const dayLetter = dayLetters[index];
        formattedSession.push({
            name:dayLetter,
            time:day.sessionLength
        })
    })
    return formattedSession
}