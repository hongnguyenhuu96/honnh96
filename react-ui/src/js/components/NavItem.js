import React from 'react'
import {Link} from 'react-router'
class NavItem extends React.Component {
  render() {
    return <Link {...this.props} className="nav-item" activeStyle={{color:"red"}}/>
  }
}

export default NavItem;