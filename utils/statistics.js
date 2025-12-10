import { players } from '../data/players.js';

export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayersByPosition(position) {
    return players.filter(player => player.position === position)
}

export function getTotalAssists(assists) {
    return players.reduce((total, player) => total + player.assists, 0);
}

export const getTopScorer = (players) => {
    const maxGoals = players.reduce((acc,el)=>Math.max(acc.goals,el.goals),0)
    return players.find(player=>player.goals===maxGoals)
}

export function getAverageAge(players) {
    const allAges = players.reduce((acc, el)=> acc + el)
    const avg = allAges / players.length
    return avg.toFixed(1)
}

export function getPlayersByNationality(nationality) {
    const byNation = players.filter(player => player.nationality === nationality)
    return byNation 
}

export function sortPlayersByGoals() {
    let playersCopy = [...players]
    playersCopy.sort((a, b) => b - a);
    return playersCopy
}

export function getYoungPlayers(maxAge) {
    return players.filter(player => player.age < maxAge)
}

export function getPlayersWithMinGoals(minGoals) {
    return players.filter(player => player.goals >= minGoals)
}

export function calculatePlayerScore(player) {
    const calculateData = (player.goals * 3) + (player.assists * 2)
    return calculateData
}

export function getTop3Scorers() {
    let playersCopy = [...players]
    playersCopy.sort((a, b) => a - b);
    let top3 = playersCopy.slice(0, 2);
    return top3;
}

export function getAllPlayerNames() {
    const allNames = players.map((player) => player.name);
    return allNames
}

export function getGoalsPerMatch(player) {
    if (player.matches > 0){
        const calculate = player.goals / player.matches;
        return calculate.toFixed(2)
    } else if (player.matches === 0){
        return 0
    }
}

