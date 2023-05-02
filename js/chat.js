let csoData = [];

async function fetchCSOData() {
    try {
        csoData = await fetch('cso.json').then(response => response.json());
    } catch (error) {
        console.error('Error fetching cso.json:', error);
    }
}

fetchCSOData();

document.getElementById("send-btn").addEventListener("click", async () => {
    const inputField = document.getElementById("chat-input");
    const userInput = inputField.value.trim();
    const chatOutput = document.getElementById("chat-output");

    if (userInput) {
        chatOutput.innerHTML += `<div>User: ${userInput}</div>`;
        inputField.value = "";
        await simulateTyping(1000);
        const response = await processInput(userInput);
        chatOutput.innerHTML += `<div>AI Assistant: ${response}</div>`;
    }
});

async function processInput(input) {
    const lowerCaseInput = input.toLowerCase();
    if (isGreeting(lowerCaseInput)) {
        return greeting();
    } else if (isGoodbye(lowerCaseInput)) {
        return goodbye();
    } else if (lowerCaseInput.includes("website") && lowerCaseInput.includes("about")) {
        return websitePurpose();
    } else if (lowerCaseInput.includes("examples")) {
        return getRandomNGOs(5);
    } else if (lowerCaseInput.includes("goal")) {
        const goalNumber = input.match(/\d+/);
        if (goalNumber) {
            return findNGOsByGoal(goalNumber[0]);
        }
    } else if (lowerCaseInput.includes("ngo")) {
        return explainNGO();
    } else {
        const ngo = await findNGO(lowerCaseInput);
        if (ngo) {
            return ngoDetails(ngo);
        } else {
            return "I'm not sure how to respond to that.";
        }
    }
}

async function findNGOsByGoal(goal) {
    const matchingNGOs = csoData.filter(ngo => ngo.sustainable_goal.includes(goal));

    if (matchingNGOs.length === 0) {
        return `No NGOs match the given goal (${goal}).`;
    }

    const maxResults = 10;
    const numResults = Math.min(matchingNGOs.length, maxResults);

    let response = `Here are the NGOs that satisfy UN goal ${goal}:\n`;
    for (let i = 0; i < numResults; i++) {
        const ngo = matchingNGOs[i];
        response += `${i + 1}. ${ngo.cso_name} (${ngo.country}, ${ngo.city})\n`;
    }
    return response;
}



function explainNGO() {
    return "An NGO, or non-governmental organization, is a non-profit, voluntary group that operates independently of any government. NGOs typically work to address social, political, or environmental issues, and they can range in size from small community groups to large international organizations.";
}

function websitePurpose() {
    return "This website is designed to connect non-governmental organizations (NGOs) with potential donors, volunteers, and other NGOs. The platform aims to facilitate collaboration and coordination between NGOs, with features such as a searchable directory of NGOs, a job board, and a messaging system for communication between users.";
}

async function findNGO(input) {
    for (let ngo of csoData) {
        if (input.includes(ngo.cso_name.toLowerCase())) {
            return ngo;
        }
    }
    return null;
}

function ngoDetails(ngo) {
    return `The ${ngo.cso_name} is an NGO based in ${ngo.city}, ${ngo.country}. It was founded in ${ngo.founding_year} and focuses on the following sustainable goals: ${ngo.sustainable_goal}. It is supported by sponsors such as ${ngo.sponsors}. For more information, visit their official website at ${ngo.official_website}.`;
}

function isGreeting(input) {
    const greetings = ["hello", "hi", "help", "need help"];
    return greetings.includes(input);
}

function greeting() {
    return "Hi, how can I help you?";
}

function isGoodbye(input) {
    const goodbyes = ["bye", "goodbye", "see you later", "farewell"];
    return goodbyes.includes(input);
}

function goodbye() {
    return "Goodbye! If you have any more questions, feel free to ask.";
}

async function simulateTyping(time) {
    const typingIndicator = document.getElementById("typing-indicator");
    typingIndicator.classList.remove("hidden");
    await new Promise(resolve => setTimeout(resolve, time));
    typingIndicator.classList.add("hidden");
}

function getRandomNGOs(numExamples) {
    const shuffled = csoData.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, numExamples);
    let response = "Here are some examples of NGOs:\n";
    selected.forEach((ngo, index) => {
        response += `${index + 1}. ${ngo.cso_name}\n`;
    });
    return response;
}

async function findNGOsByCriteria(criteria) {
    const matchingNGOs = csoData.filter(ngo => {
        for (const key in criteria) {
            if (criteria[key] !== ngo[key]) {
                return false;
            }
        }
        return true;
    });

    if (matchingNGOs.length === 0) {
        return "No NGOs match the given criteria.";
    }

    let response = "Here are the NGOs matching your criteria:\n";
    matchingNGOs.forEach((ngo, index) => {
        response += `${index + 1}. ${ngo.cso_name} (${ngo.country}, ${ngo.city})\n`;
    });
    return response;
}

async function findSimilarNGOs(ngoName, similarityCriteria) {
    const targetNGO = await findNGO(ngoName.toLowerCase());
    if (!targetNGO) {
        return `I couldn't find an NGO named "${ngoName}".`;
    }

    const criteria = {};
    similarityCriteria.forEach(key => {
        criteria[key] = targetNGO[key];
    });

    return await findNGOsByCriteria(criteria);
}

chatOutput.scrollTop = chatOutput.scrollHeight;
