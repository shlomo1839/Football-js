import { players } from '../data/players.js';

export function getTotalGoals() {
    return players.reduce((total, player) => total + player.goals, 0);
}

export function getPlayersByPosition(position) {
    return players.filter(player => player.position === position);
}

export function getTotalAssists(assists) {
    return players.reduce((total, player) => total + player.assists, 0);
}

function topScore(players){
    const maxObject = players.reduce(())
}

const maxObject = data.reduce((prev, current) => {
  return (prev && prev.score > current.score) ? prev : current;
});