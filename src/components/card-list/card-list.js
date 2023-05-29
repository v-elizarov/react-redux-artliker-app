import React, { Component } from 'react'
import CardListItem from 'components/card-list-item'
import { connect } from 'react-redux'
import { withWaifuService } from 'helpers/hoc'
import { artsLoaded } from 'store/actions'
import compose from 'helpers/compose'
import './card-list.css'
class CardList extends Component {
  
  componentDidMount() {
    const { waifuService } = this.props
    waifuService.getManyArts().then((result) => {
      this.props.artsLoaded(result)
    })
  }

  render() {
    const { images } = this.props
    console.log(images)
    return (
      <div className="card-list">
        {
          images.map(({id, ...other}) => {
            return (
              <span key={id} className="card-list-child"><CardListItem art={other}/></span>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = ({ images }) => {
  return { images }
}

const mapDispatchToProps = {
    artsLoaded
}

export default compose(
  withWaifuService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CardList)