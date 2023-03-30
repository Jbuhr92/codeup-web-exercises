import { fetchData } from './keys.js';

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
