import {keys} from './keys.js';

const options = {
    headers: {
        'Authorization': `token ${keys.github}`
    }
};

function fetchData(url) {
    return fetch(url, options)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch data');
            }
        });
}
function getLastCommitDate(username) {
    const url = `https://api.github.com/users/${username}/events/public`;
    return fetchData(url)
        .then(data => {
            const lastCommitEvent = data.find(event => event.type === 'PushEvent');
            if (lastCommitEvent) {
                return lastCommitEvent.created_at;
            } else {
                throw new Error('No commit found');
            }
        });
}
