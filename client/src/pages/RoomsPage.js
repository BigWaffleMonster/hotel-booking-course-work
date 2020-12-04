import {useHttp} from '../hooks/http.hook'
import { AuthContext } from "../context/AuthContext"
import React, { useContext, useEffect, useState } from "react"

export const RoomsPage = () => {
  const auth = useContext(AuthContext)
  const {request} = useHttp()
  const [guest, setGuest] = useState('')

  const pressHandler = async event => {
    if (event.key === 'Enter') {
      try {
        const data = await request('api/book/bookroom', 'POST', {guests: guest}, {
          Authorization: `Bearer ${auth.token}`
        })
        console.log(data)
      } catch (e) {}
    }
  }

  useEffect(() => {
    window.M.updateTextFields()
  }, [])

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Hello</h1>
        <div className="input-field">
          <input
            placeholder="guests"
            id="guests"
            type="text"
            name="guests"
            value={guest}
            onChange={e => setGuest(e.target.value)}
            onKeyPress={pressHandler}
          />
          <label htmlFor="guests">Email</label>
        </div>
      </div>
    </div>
  )
}
