import React from 'react'

class CardItem extends React.Component{
  render(){
    console.log(this.props)
    return(
      <div className = 'Container'>
        <div>
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* <div className='row'>
          <div className = 'col-2 title' >
            { this.props.name }
          </div>
          <div className = ' col-2  start'>
            { this.props.start }
          </div>
          <div className = 'col-2 dest '>
            { this.props.dest }
          </div>
          <div className = 'col-2 excerpt'>
            { this.props.excerpt }
          </div>*/}
      </div>
    )
  }
}
export default CardItem