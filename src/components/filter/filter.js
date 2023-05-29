import React, { Component } from 'react'
import { BsHeartFill, BsHeart } from 'react-icons/bs'
import { connect } from 'react-redux'
import { filterChanged } from 'store/actions'
class Filter extends Component {
  render() {
    const { doesShowOnlyLiked, filterChanged } = this.props

    return (
      <div className="d-flex">
          <input type="radio" className="btn-check" id="btnradio1" checked={doesShowOnlyLiked} onClick={filterChanged} onChange={() => {}}/>
          <label className="btn btn-outline-primary btn-lg" htmlFor="btnradio1">
              {doesShowOnlyLiked ? <BsHeartFill/> : <BsHeart/>}
          </label>
      </div>
    )
  }
}

const mapStateToProps = ({ doesShowOnlyLiked }) => {
  return { doesShowOnlyLiked }
}

const mapDispatchToProps = {
    filterChanged
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)