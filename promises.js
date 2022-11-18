// const debug = require('debug')('debugger');

const res = require("express/lib/response");

/*
 - GetUser(id) - returns {user object}
 - GetRepositories(user.username) - returns [repos]
 - GetCommitts(repo[0]) - returns [commits]
 - DisplayCommits([commits])
*/

console.log('Before');
getUser(1)
.then((user)=> getRepositories(user.username))
.then((repos) => getCommits(repos[0]))
.then((commits) => console.log(commits))
.catch((err) => console.log(`Error:`, err.message))

console.log('After');

function getUser(id) {
   return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fetching User from database...');
            resolve({id: id, username: "olisaagbafor"})
        }, 2000)
   })
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Fecthing Github Repositories...');
            resolve(['repo1', 'repo2', 'repo3'])
        }, 2000);
    })
}

function getCommits(repo, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Getting Repository Commits...')
            resolve(['commit1', 'commit2', 'commit3'])
        }, 2000)
    })
}

function displayCommits(commits) {
    console.log(commits)
}