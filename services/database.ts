import firebase from './firebase'
import { IPlayer } from 'pages'

const collection = firebase.collection('players')

const database = {
  savePlayer(player: IPlayer) {
    collection.doc(player.name).set({
      name: player.name,
      gender: player.gender
    })

  }
}

export default database
