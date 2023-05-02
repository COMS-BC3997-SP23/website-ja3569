const apiKey = "AIzaSyCfTIJgyraAPohYyzkSnPJakFlNEXzD2cE";
const engineID = "1148ff606ea12418a";
const searchForm = document.getElementById("search-form");
const resultsDiv = document.getElementById("results");

searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const ngoName = document.getElementById("ngo-name").value;
    const query = `latest news about NGO called ${ngoName}`;
    const results = await retrieveInfo(query);
    displayResults(results);
});

async function retrieveInfo(query) {
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${engineID}&q=${encodeURIComponent(query)}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.items || [];
}

function displayResults(results) {
    resultsDiv.innerHTML = "";
    results.forEach(result => {
        const resultDiv = document.createElement("div");
        resultDiv.classList.add("card");
        resultDiv.innerHTML = `
            <h3 class="card-title">${result.title}</h3>
            <a href="${result.link}" target="_blank">${result.link}</a>
            <p>${result.snippet}</p>
        `;
        resultsDiv.appendChild(resultDiv);
    });
}
