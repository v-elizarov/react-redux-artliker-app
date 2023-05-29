import React, { Component } from 'react'
import CardListItem from 'components/card-list-item'
import { connect } from 'react-redux'
import { withWaifuService } from 'helpers/hoc'
import { artsLoaded } from 'store/actions'
import compose from 'helpers/compose'
import Spinner from 'components/spinner'
import { BsYinYang } from 'react-icons/bs'
import './card-list.css'
class CardList extends Component {
  
  componentDidMount() {
    const { waifuService } = this.props
    waifuService.getManyArts().then((result) => {
      this.props.artsLoaded(result)
    })
  }

  render() {
    const { images, loading,  doesShowOnlyLiked} = this.props
    
    if (loading) {
      return <Spinner/>
    }

    const visibleCards = doesShowOnlyLiked ? images.filter(({ isLiked }) => isLiked === true) : images

    if (visibleCards.length === 0) {
      return (
        <div className="alert alert-dismissible alert-primary alert-box">
          <BsYinYang/> You didn't like any art yet.. That's why it's empty here
        </div>
      )
    }

    return (
      <div className="card-list">
        {
          visibleCards.map((art) => {
            return (
              <span key={art.id} className="card-list-child"><CardListItem art={art}/></span>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ images, loading, doesShowOnlyLiked }) => {
  return { images, loading, doesShowOnlyLiked }
}

const mapDispatchToProps = {
    artsLoaded
}

export default compose(
  withWaifuService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CardList)