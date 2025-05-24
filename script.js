async function getJokes() {
  const response = await fetch(
    "https://official-joke-api.appspot.com/random_joke"
  );

  const data = await response.json();
 
  console.log(data);

  document.getElementById("setup").innerText = data.setup;
  document.getElementById("punchline").innerText = data.punchline;

}


