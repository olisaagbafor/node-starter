// const debug = require('debug')('debugger');

const res = require("express/lib/response");

/*
 - GetUser(id) - returns {user object}
 - GetRepositories(user.username) - returns [repos]
 - GetCommitts(repo[0]) - returns [commits]
 - DisplayCommits([commits])
*/

console.log('Before');

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.username);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch(err) {
        console.log('Error: ', err.message)
    }
}

displayCommits();

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
            // resolve(['commit1', 'commit2', 'commit3'])
            reject(new Error('Could not load Commits'));
        }, 2000)
    })
}

