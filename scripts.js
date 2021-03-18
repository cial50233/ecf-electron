let order = 1;

async function doFetch(endpoint) {
    try {
        const resp = await fetch("https://restcountries.eu/rest/v2/alpha/" + endpoint, { method: 'GET' });
        if (resp.ok) {
            return await resp.json();
        } else {
            return `error fetching endpoint: /${endpoint}`;
        }
    } catch (err) {
        console.log(err);
    }
}

function display(data, selector) {
    const container = document.querySelector(selector);
    container.innerHTML = data.name + ' in position : '+ order++;
    container.classList.add('be-bold');
}

async function fetchA() {
    const data = await doFetch('AF');
    display(data, '#component-a');
}

async function fetchB() {
    const data = await doFetch('AX');
    display(data, '#component-b');
}

async function fetchC() {
    const data = await doFetch('AL');
    display(data, '#component-c');
}

async function fetchD() {
    const data = await doFetch('DZ');
    display(data, '#component-d');
}

function fetchAndDisplayData() {
    fetchA();
    fetchB();
    fetchC();
    fetchD();
    order = 1;
}
