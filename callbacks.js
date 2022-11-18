// const debug = require('debug')('debugger');

/*
 - GetUser(id) - returns {user object}
 - GetRepositories(user.username) - returns [repos]
 - GetCommitts(repo[0]) - returns [commits]
 - DisplayCommits([commits])
*/

console.log('Before');
getUser(1, (user) => {
    getRepositories(user.username, (repos) => {
        getCommits(repos[0], (commits) => {
            displayCommit(commits);
        })
    })
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Fetching User from database...')
        const user = {id: id, username: "olisaagbafor"}
        console.log(`User: ${user}`)
        callback(user)
    }, 2000)
}

function getRepositories(username, callback) {
    setTimeout(() => {
        console.log('Fecthing Github Repositories...')
        const repos = ['repo1', 'repo2', 'repo3']
        console.log(`Repositories: ${repos}`)
        callback(repos)
    }, 2000);
}

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log('Getting Repository Commits...')
        const commits = ['commit1', 'commit2', 'commit3'];
        console.log(`Commits: ${commits}`)
        callback(commits)
    }, 2000)
}

function displayCommit(commits) {
    console.log(commits)
}