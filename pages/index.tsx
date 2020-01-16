import React, { useState } from 'react'
import Head from 'next/head'

type FormElem = React.FormEvent<HTMLFormElement>;

interface IPlayer {
  name: string
}

const Index: React.FC = () => {
  const [playerName, setPlayerName] = useState('')
  const [playersList, setPlayersList] = useState<IPlayer[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    const newPlayersList: IPlayer[] = [...playersList, { name: playerName }]
    setPlayersList(newPlayersList)
    setPlayerName('')
  }

  return (
    <>
      <Head>
        <title>Softball lineup app</title>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossOrigin="anonymous"></script>
      </Head>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Lineup Builder</span>
      </nav>
      <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h2>Add a new player</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="playerName" 
                aria-describedby="playerName" 
                data-testid="nameInput"
                placeholder="Enter name"
                onChange={e => setPlayerName(e.target.value)} 
                value={playerName}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary float-right">Add player</button>
          </form>
        </div>
        <div className="col">
          <h2>Roster</h2>
            <ul>{playersList.map(player => <li key={player.name}>{player.name}</li>)}</ul>
        </div>

      </div>
    </div>
    </>
  )
}

export default Index
