


import bounceBack from '../data/pgachampionship/bounceBack.json'
import drivingAccuracy from '../data/pgachampionship/drivingAccuracy.json'
import girFrom200 from '../data/pgachampionship/girFrom200.json'
import putting from '../data/pgachampionship/putting.json'
import shortPutting from '../data/pgachampionship/shortPutting.json'
import finish from '../data/pgachampionship/finish.json'
import scrambleRough from '../data/pgachampionship/scrambleRough.json'



export default function createPlayerProfiles() {


    //create object fill with players
    const playerData = {}
    bounceBack.forEach(el => playerData[el.playerName] = el)
    drivingAccuracy.forEach(el => playerData[el.playerName] = Object.assign(playerData[el.playerName], el))
    girFrom200.forEach(el => playerData[el.playerName] = Object.assign(playerData[el.playerName], el))
    putting.forEach(el => playerData[el.playerName] = Object.assign(playerData[el.playerName], el))
    shortPutting.forEach(el => playerData[el.playerName] = Object.assign(playerData[el.playerName], el))
    finish.forEach(el => playerData[el.playerName] = Object.assign(playerData[el.playerName], el))
    scrambleRough.forEach(el => playerData[el.playerName] = Object.assign(playerData[el.playerName], el))


    // dataArray.forEach(statSet => console.log(statSet[0].playerName))



    console.log(playerData)

    return playerData
}