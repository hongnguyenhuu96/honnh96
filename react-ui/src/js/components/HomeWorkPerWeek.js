import React from 'react'
import Card from './Card'

export default React.createClass({
  render(){
    var week = this.props.params.week;
    if(week === "week01"){
      return (
        <div>
          <div className="columns">
            <Card title="1" subtitle="14020198" sourceImg="/images/week01/1.png" />
            <Card title="2" subtitle="14020198" sourceImg="/images/week01/2.png" />
            <Card title="3" subtitle="14020198" sourceImg="/images/week01/3.png" />
          </div>
          <div className="columns">
            <Card title="4" subtitle="14020198" sourceImg="/images/week01/4.png" />
            <Card title="5" subtitle="14020198" sourceImg="/images/week01/5.png" />
            <Card title="6" subtitle="14020198" sourceImg="/images/week01/6.png" />
          </div>
          <div className="columns">
            <Card title="7" subtitle="14020198" sourceImg="/images/week01/7.png" />
            <Card title="8" subtitle="14020198" sourceImg="/images/week01/8.png" />
            <Card title="9" subtitle="14020198" sourceImg="/images/week01/9.png" />
          </div>
          <div className="columns">
            <Card title="10" subtitle="14020198" sourceImg="/images/week01/10.png" />
            <Card title="11" subtitle="14020198" sourceImg="/images/week01/11.png" />
            <Card title="12" subtitle="14020198" sourceImg="/images/week01/12.png" />
          </div>
          <div className="columns">
            <Card title="13" subtitle="14020198" sourceImg="/images/week01/13.png" />
            <Card title="14" subtitle="14020198" sourceImg="/images/week01/14.png" />
            <Card title="15" subtitle="14020198" sourceImg="/images/week01/15.png" />
          </div>
          <div className="columns">
            <Card title="16" subtitle="14020198" sourceImg="/images/week01/16.png" />
            <Card title="17" subtitle="14020198" sourceImg="/images/week01/17.png" />
            <Card title="18" subtitle="14020198" sourceImg="/images/week01/18.png" />
          </div>
          <div className="columns">
            <Card title="19" subtitle="14020198" sourceImg="/images/week01/19.png" />
            <Card title="20" subtitle="14020198" sourceImg="/images/week01/20.png" />
            <Card title="21" subtitle="14020198" sourceImg="/images/week01/21.png" />
          </div>
          <div className="columns">
            <Card title="22" subtitle="14020198" sourceImg="/images/week01/22.png" />
            <Card title="23" subtitle="14020198" sourceImg="/images/week01/23.png" />
          </div>
        </div>
      );
    } else if(week === 'week02'){
        return (
          <div>
            <div className="columns">
              <Card title="1" subtitle="14020198" sourceImg="/images/week02/1.png" />
              <Card title="2" subtitle="14020198" sourceImg="/images/week02/2.png" />
              <Card title="3" subtitle="14020198" sourceImg="/images/week02/3.png" />
            </div>
            <div className="columns">
              <Card title="4" subtitle="14020198" sourceImg="/images/week02/4.png" />
              <Card title="5" subtitle="14020198" sourceImg="/images/week02/5.png" />
              <Card title="6" subtitle="14020198" sourceImg="/images/week02/6.png" />
            </div>
            <div className="columns">
              <Card title="7" subtitle="14020198" sourceImg="/images/week02/7.png" />
              <Card title="8" subtitle="14020198" sourceImg="/images/week02/8.png" />
              <Card title="9" subtitle="14020198" sourceImg="/images/week02/9.png" />
            </div>
            <div className="columns">
              <Card title="10" subtitle="14020198" sourceImg="/images/week02/10.png" />
              <Card title="11" subtitle="14020198" sourceImg="/images/week02/11.png" />
            </div>
          </div>
        );
      } else if(week === 'week03'){
        return (
          <div>
            <div className="content is-large" style={{border: '1px solid #ffdd57', padding: '1.25rem 1.5rem', borderTopRightRadius:'50px', backgroundColor: 'whitesmoke'}}>
              <section id="week03">
                <h2> Home work week 3</h2>
                <p>
                  {'Following the tutorial at this '}
                  <a href="http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/" target="_blank">
                    {'Step-by-step Tutorial.'}
                  </a>
                    {' The result is this '}
                  <a href="https://github.com/hongnguyenhuu96/nodetest1" target="_blank"> 
                    {'repository'}
                  </a>{' on Github.'}
                </p>
              </section>
            </div>
          </div>
        );
      } else if(week === 'week04'){
        return (
          <div>
            <div className="content is-large" style={{border: '1px solid #ffdd57', padding: '1.25rem 1.5rem', borderTopRightRadius:'50px', backgroundColor: 'whitesmoke'}}>
              <section id="week04">
                <h2> Home work week 4</h2>
                <p>
                  {'Following the tutorial at this '}
                  <a href="http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/" target="_blank">
                    {'Restful web app Tutorial.'}
                  </a>
                </p>
                <p>
                  {'The result was deploy at this '}
                  <a href="http://resful14020198.herokuapp.com/" target="_blank">
                    {'Link.'}
                  </a>{' I used mongolab as the database.'}
                </p>
                <p>
                  {'Source code: '}
                  <a href="https://github.com/hongnguyenhuu96/nodetest2" target="_blank"> 
                    {'repository'}
                  </a>{' on Github.'}
                </p>
                <hr/>
              </section>
            </div>
          </div>
        );
    } else return(<h1>Not found!</h1>);
  }
})