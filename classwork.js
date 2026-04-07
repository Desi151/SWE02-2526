function getJoke() {
    fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "893edd6b80msha5928e0a34cbe80p13c2abjsn114ce04e1702",
            "X-RapidAPI-Host": "quotes-api12.p.rapidapi.com"
        }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("joke").innerText = data[0].joke;
    })
    .catch(error => {
        console.error(error);
        document.getElementById("joke").innerText = "Error loading joke";
    });
}
