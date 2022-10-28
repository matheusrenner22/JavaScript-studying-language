async function start() {
  const url = 'https://api.github.com/users/matheusrenner22';
  const user = await fetch(url).then(response => response.json);
  const userRepos = await fetch(user.repos_url).then(response => response.json);
  console.log(userRepos);
}

start().catch(error => console.log(error));