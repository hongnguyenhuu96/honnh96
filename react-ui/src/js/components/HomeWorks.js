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
          <li><Link to="/homeworks/week01" activeStyle={{color:"red"}}>Week 1</Link></li>
          <li><Link to="/homeworks/week02" activeStyle={{color:"red"}}>Week 2</Link></li>
          <li><Link to="/homeworks/week03" activeStyle={{color:"red"}}>Week 3</Link></li>
          <li><Link to="/homeworks/week04" activeStyle={{color:"red"}}>Week 4</Link></li>
          <li><Link to="/homeworks/week09" activeStyle={{color:"red"}}>Week 9</Link></li>
          <li><Link to="/homeworks/week10" activeStyle={{color:"red"}}>Week 10</Link></li>
        </ul>
      </div>
      {this.props.children}
    </div>
    );
  }
}

export default HomeWorks;