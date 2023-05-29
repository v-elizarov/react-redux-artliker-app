import React from 'react'
import { BsHeartFill, BsHeart, BsTrash3, BsFillPersonFill, BsCalendarHeart } from 'react-icons/bs'
import './card-list-item.css'

const CardListItem = ({ art }) => {
  const {
    artist,
    uploaded,
    imageURL,
    description
  } = art

  return (
    <div className="card mb-3">
  
        <div className="card-body card-list-item">
          <h6 className="card-subtitle text-muted"><BsFillPersonFill/> {artist}</h6>
          <button type="button" className="btn btn-outline-primary btn-rounded"><BsHeart/></button>
        </div>
        <img src={imageURL} />
        <div className="card-body">
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer card-list-item">
          <div className="text-muted">
            <BsCalendarHeart/> {uploaded}
          </div>
          <button type="button" className="btn btn-outline-dark btn-card-footer"><BsTrash3/></button>
        </div>
    </div>
  )
}

export default CardListItem