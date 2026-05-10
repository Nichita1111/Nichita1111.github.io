const res = await fetch('https://api.github.com/users/Nichita1111/repos?sort=stars&per_page=6');
const repos = await res.json();
console.log(repos);