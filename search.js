document.getElementById("search-button").addEventListener("click", searchCSO);

async function searchCSO() {
    const searchInput = document.getElementById("search-input").value;
    const csoData = await fetchData();

    const cso = csoData.find((cso) => cso.cso_name.toLowerCase() === searchInput.toLowerCase());

    if (cso) {
        localStorage.setItem("cso", JSON.stringify(cso));
        window.location.href = "cso.html";
    } else {
        alert("CSO not found");
    }
}

async function fetchData() {
    const response = await fetch("cso.json");
    const data = await response.json();
    return data;
}
