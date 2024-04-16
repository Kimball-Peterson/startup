document.addEventListener('DOMContentLoaded', function() {
    fetchRaceData();
    fetchStandings();
    document.getElementById('intervalControl').value = 300; 
});

async function fetchRaceData() {
    const apiUrl = 'https://ergast.com/api/f1/current/next.json'; 
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        updateRaceInfo(data);
    } catch (error) {
        console.error('Failed to fetch race data:', error);
        document.getElementById('raceUpdates').innerHTML = '<li>Error fetching race data. Please try again later.</li>';
    }
}

async function fetchStandings() {
    const standingsUrl = 'https://ergast.com/api/f1/current/driverStandings.json';
    try {
        const response = await fetch(standingsUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const standingsData = await response.json();
        updateStandingsInfo(standingsData);
    } catch (error) {
        console.error('Failed to fetch standings:', error);
        const standingsElement = document.getElementById('standingsInfo');
        if (standingsElement) {
            standingsElement.innerHTML = '<li>Error fetching standings. Please try again later.</li>';
        }
    }
}

function updateStandingsInfo(standingsData) {
    const standingsList = document.getElementById('standingsList');
    if (!standingsList) {
        console.error('Standings list element not found');
        return;
    }

    standingsList.innerHTML = '';  // Clear existing entries

    const standings = standingsData.MRData.StandingsTable.StandingsLists[0].DriverStandings;
    standings.forEach(standing => {
        const listItem = document.createElement('li');
        listItem.textContent = `${standing.position}: ${standing.Driver.givenName} ${standing.Driver.familyName} - ${standing.points} points`;
        standingsList.appendChild(listItem);
    });
}

function updateRaceInfo(data) {
    const raceNameElement = document.getElementById('raceName');
    if (!raceNameElement) {
        console.error('Race name element not found');
        return;
    }

    if (data.MRData.RaceTable.Races.length > 0) {
        const race = data.MRData.RaceTable.Races[0];
        raceNameElement.textContent = `Race Round: ${race.raceName}`;
    } else {
        raceNameElement.textContent = 'Race Round: No current race data available';
    }
}


let raceDataInterval = setInterval(fetchRaceData, 30000);  // 30 seconds
let standingsInterval;

function adjustInterval(intervalType, seconds) {
    if (intervalType === 'race') {
        clearInterval(raceDataInterval);
        raceDataInterval = setInterval(fetchRaceData, seconds * 1000);
    } else if (intervalType === 'standings') {
        clearInterval(standingsInterval);
        standingsInterval = setInterval(fetchStandings, seconds * 1000);
    }
    console.log(`Interval for ${intervalType} adjusted to ${seconds} seconds.`);
}



