import React from 'react'

const Home = () => (
  <div>
    <div className="content is-large" style={{border: '1px solid #ffdd57', padding: '1.25rem 1.5rem', borderTopRightRadius:'50px', backgroundColor: 'whitesmoke'}}>
      <section id="info">
        <h2> Info - Hong Nguyen Huu</h2>
        <p>Welcome to my personal website. I'm a native Vietnamese speaker and English abuser living in Hanoi, Vietnam. 
          At the moment, I'm majoring in Computer Science at <a href="http://uet.vnu.edu.vn" target="_blank">University of Science and 
          Technology</a>, Vietnam National University, Hanoi.
        </p>
      </section>
      <hr />
      <section id="projects"> 
        <h2> Projects</h2>
        <p>My most recent project for school was 
        <a href="https://github.com/hongnguyenhuu96/se2016" target="_blank"> Tutor Online </a>
        (using <a href="https://laravel.com/" target="_blank">Laravel Framework</a>),
         a small website that helps people finding appopriate tutors for their studying. 
         I was responsible for the front-end and back-end part.</p>
        <p>In addition, I have several personal projects, most of which are stored locally on my laptop and probably won't
          be published.</p>
      </section>
      <hr />
      <section id="contact">
        <h2> Contact</h2>
        <p>If you have any questions, don't hesitate to contact me by <a href="mailto:hongnguyenhuu96@gmail.com">email</a>.</p>
      </section>
    </div>
  </div>
)

export default Home