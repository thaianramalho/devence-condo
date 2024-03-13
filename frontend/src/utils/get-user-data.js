export function getUserData() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const username = userData?.username;

    return { userData, username };
}