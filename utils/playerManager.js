import { players } from "../data/players.js";

// import players with func
export function getAllPlayers() {
  return players;
}

// to find by id
export const findPlayerById = (id) => {
  return players.find((player) => player.id === id);
};

export function addPlayer(playerData) {
  const newPlayerData = {
    id: players.length + 1,
    name: playerData.name,
    position: playerData.position,
    age: playerData.age,
    goals: 0,
    assists: 0,
    matches: 0,
    nationality: playerData.nationality,
  };
  players.push(newPlayerData);
  return newPlayerData;
}

// console.log(addPlayer({name:"ben", position: "foward", age: 26, nationality: "israel"}));

export function deletePlayer(id) {
  const index = players.findIndex((player) => player.id === id);
  const removed = players[index];
  if (index !== -1) {
    players.splice(index, 1);
    return removed;
  }
  return null;
}

// console.log(deletePlayer(1));

export function updateData(id, newData) {
  const toUpdate = findPlayerByID(id);
  Object.assign(toUpdate, newData);
  return toUpdate;
}

// console.log(updateData(8, { name: "shlomo" }));

export function findByName(name) {
    const p1 = players.find((player) => player.name === name);
    return p1
}

// console.log(findByName("James Taylor"));
