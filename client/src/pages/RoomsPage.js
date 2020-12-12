import {useHttp} from '../hooks/http.hook'
import { AuthContext } from "../context/AuthContext"
import React, { useContext, useEffect, useState } from "react"

export const RoomsPage = () => {
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [guest, setGuest] = useState('')
  const [DateIn, setDateIn] = useState('')
  const [DateOut, setDateOut] = useState('')

  const pressHandler = async event => {
      try {
        const data = await request('api/book/bookroom', 'POST', {guests: guest, DateIn, DateOut}, {
          Authorization: `Bearer ${auth.token}`
        })
      } catch (e) {}
  }

  useEffect(() => {
    window.M.updateTextFields()
    window.M.AutoInit();
  }, [])


  return (
    <div className="row">

      <div className="input-field col s12" style={{marginTop: '1rem'}}>
        <select
          id='guest'
          value={guest}
          onChange={(e => setGuest(e.target.value))}
          placeholder="hello"
        >
          <option value="" disabled selected>How many persons</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3"> 3</option>
        </select>
        <label>Persons</label>
      </div>

      <div className="input-field col s6" style={{marginTop: '1rem'}}>
        <input 
          id="DateIn"
          type="date" 
          placeholder="Check in" 
          value={DateIn}
          onChange={e => setDateIn(e.target.value)} 
        />
        <label>Check in</label>
      </div>

      <div className="input-field col s6" style={{marginTop: '1rem'}}>
        <input
          id="DateOut" 
          type="date" 
          placeholder="Check out"
          value={DateOut}
          onChange={(e => setDateOut((e.target.value)))} 
        />
        <label>Check out</label>
      </div>

      <button 
        className="btn yellow darken-4"
        onClick={pressHandler}
        style={{marginLeft: '.5rem', marginTop: '1rem'}}
      >
        Book
      </button>
      
    </div>
  )
}
