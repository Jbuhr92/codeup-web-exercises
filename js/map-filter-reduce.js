const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array
const usersWithAtLeastThreeLanguages = users.filter(user => user.languages.length >= 3);

// Use .map to create an array of strings where each element is a user's email address
const userEmails = users.map(user => user.email);

// Use .reduce to get the total years of experience from the list of users
const totalYearsOfExperience = users.reduce((total, user) => total + user.yearsOfExperience, 0);

// Calculate the average years of experience
const averageYearsOfExperience = totalYearsOfExperience / users.length;

// Use .reduce to get the longest email from the list of users
const longestEmail = users.reduce((longest, user) => user.email.length > longest.length ? user.email : longest, '');

// Use .reduce to get the list of user's names in a single string
const usersNamesString = users.reduce((names, user, index) => {
    if (index === users.length - 1) {
        return `${names}${user.name}.`;
    }
    return `${names}${user.name}, `;
});

console.log(usersWithAtLeastThreeLanguages);
console.log(userEmails);
console.log(averageYearsOfExperience);
console.log(longestEmail);
console.log(usersNamesString);
