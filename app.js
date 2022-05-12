const endpoint = 'https://raw.githubusercontent.com/OlgaNiem/MyProg/master/.vscode/books.json';
fetch (endpoint).then(res => res.json()).then(data => console.log(data));
