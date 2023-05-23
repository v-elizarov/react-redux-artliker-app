import React from 'react'
import { BsHeartFill, BsHeart } from 'react-icons/bs'

const Filter = () => {

    const status = false

  return (
    <div className="d-flex">
        <input type="radio" className="btn-check" id="btnradio1" checked={status} onChange={() => {}}/>
        <label className="btn btn-outline-primary btn-lg" htmlFor="btnradio1">
            {!status ? <BsHeart/> : <BsHeartFill/>}
        </label>
    </div>
  )
}

export default Filter