import React from 'react'
import { IPlayer } from 'pages'

interface PlayersTableProps {
  players: IPlayer[]
}

const PlayersTable: React.FC <PlayersTableProps> = ({players} : PlayersTableProps) => {
  const playersRow = players.map((player, index) =>
  <tr key={`${player.name}-${player.gender}-${index}`}>
    <th scope="row" key={index}>{index + 1}</th>
    <td key={`${player.name}-${index}`}>{player.name}</td>
    <td key={`${player.gender}-${index}`} data-testid={player.gender}>{player.gender}</td>
  </tr>
)
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
          {playersRow}
        </tbody>
      </table>
    </>
  )
}

export default PlayersTable
