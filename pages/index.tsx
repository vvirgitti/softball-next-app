import React, { useState } from 'react'
import Header from '../components/Header'
import PlayersTable from '../components/PlayersTable'

type FormElem = React.FormEvent<HTMLFormElement>;

export interface IPlayer {
  name: string
  gender: string
}

const App: React.FC = () => {
  const [playerName, setPlayerName] = useState('')
  const [playerGender, setPlayerGender] = useState('')
  const [playersList, setPlayersList] = useState<IPlayer[]>([])

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault()
    const newPlayersList: IPlayer[] = [...playersList, { name: playerName, gender: playerGender }]
    setPlayersList(newPlayersList)
    setPlayerName('')
    setPlayerGender('')
  }

  const handleGenderChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPlayerGender(e.target.value)
  }

  return (
    <>
      <Header />
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
            <div className="radio-button-group">
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  data-testid="gender-male" 
                  value="Male" 
                  onChange={handleGenderChange} 
                  checked={playerGender === 'Male'} 
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input 
                  className="form-check-input" 
                  type="radio" 
                  data-testid="gender-female" 
                  value="Female" 
                  onChange={handleGenderChange} 
                  checked={playerGender === 'Female'} 
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary float-right">Add player</button>
          </form>
        </div>
        <div className="col">
          {playersList.length > 0 ? <PlayersTable players={playersList}/> : <></>}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
