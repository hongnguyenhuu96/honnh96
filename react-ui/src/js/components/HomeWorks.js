import React from 'react';
import {Link} from 'react-router'
class HomeWorks extends React.Component {
  render() {
    return (
    <div>
      <br />
      <div className="tabs is-large">
        <ul>
          <li><Link to="/homeworks" onlyActiveOnIndex activeStyle={{color:"red"}}>Intro HomeWork</Link></li>
          <li><Link to="/homeworks/week01" activeStyle={{color:"red"}}>Week01</Link></li>
          <li><Link to="/homeworks/week02" activeStyle={{color:"red"}}>Week02</Link></li>
        </ul>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export default HomeWorks;