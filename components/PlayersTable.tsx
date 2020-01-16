import React from 'react'
import { IPlayer } from 'pages'

interface PlayersTableProps {
  players: IPlayer[]
}

const PlayersTable = ({players} : PlayersTableProps) => {
  console.log('>>>>>> players', players)
  return (
    <>
      <h2>Roster</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map((player, index) =>
              <tr>
                <th scope="row" key={index}>{index + 1}</th>
                <td key={`${player.name}-${index}`}>{player.name}</td>
                <td key={`${player.gender}-${index}`}>{player.gender}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </>
  )
}

export default PlayersTable
