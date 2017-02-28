import React from 'react'
import Header from './Header'

require('../../css/bulma.css');
require('../../css/font-awesome/css/font-awesome.css');

export default React.createClass({
  render() {
    return (
      <div className="container is-fluid">
        <Header />
        {this.props.children}
      </div>
    )
  }
})