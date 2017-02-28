import React from 'react'

class Card extends React.Component {
  render(){
    return (
      <div className="card column">
        <div className="card-image">
          <figure className="image is-2by1">
            <img src={this.props.sourceImg} alt="sourceImg"/>
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{this.props.title}</p>
              <p className="subtitle is-6">{this.props.subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card