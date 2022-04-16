const p = document.querySelector("p");
const button = document.querySelector("button");

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  p.innerText = jokeText;
  p.style.display = "block";
};

const getDadJoke = async () => {
  try {
    const config = { headers: { Accept: "application/json" } };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (e) {
    return "ALL JOKED OUT";
  }
};

button.addEventListener("click", addNewJoke);
