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
  }, [])

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="input-field">
          <input
            placeholder="1, 2 or 3 persons"
            id="guests"
            type="text"
            name="guests"
            value={guest}
            onChange={e => setGuest(e.target.value)}
            style={{marginTop: "1rem"}}
          />
          <label htmlFor="guests" style={{marginTop: "1rem"}}>Persons</label>
        </div>
      </div>

      <div className="col s6 offset-s3">
        <div className="input-field">
          <input
            placeholder="Input date"
            id="DateIn"
            type="text"
            name="DateIn"
            value={DateIn}
            onChange={e => setDateIn(e.target.value)}
            style={{marginTop: "1rem"}}
          />
          <label htmlFor="DateIn" style={{marginTop: "1rem"}}>Check-in</label>
        </div>
      </div>

      <div className="col s6 offset-s3">
        <div className="input-field">
          <input
            placeholder="Input date"
            id="DateOut"
            type="text"
            name="DateOut"
            value={DateOut}
            onChange={e => setDateOut(e.target.value)}
            style={{marginTop: "1rem"}}
          />
          <label htmlFor="DateOut" style={{marginTop: "1rem"}}>Check-out</label>
        </div>
      </div>

      <button 
        className="btn yellow darken-4"
        onClick={pressHandler}
        style={{marginTop: '22rem'}}
      >
        Book
      </button>
    </div>
  )
}
