export function getUserData() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    const username = userData?.username;
    const email = userData?.email;

    return { userData, username, email };
}