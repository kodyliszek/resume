import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0 first-name">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <h2 className="mb-0">{config.role}</h2>
          <div className="subheading mb-5">
            {config.address} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            A former sailor, enchanted by three charming mermaids, decided to
            spend the rest of his life on a dry land, sailing between the waves
            of code.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Python Trainer</h3>
              <div className="subheading mb-3">infoShare Academy</div>
              <p>Knowledge spreading across the universe...</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">May 2019 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">HAPAG LLOYD</div>
              <p>
                This is the place where I managed to combine the experience
                gathered at sea and the skills gained in the IT industry. Thanks
                to experienced colleagues, I learned Java, Vue.js and how to
                swing in the clouds (AWS) and not fall down. I found out that
                some problems may not be as trival as they look on a first sight
                and much more.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2020 - April 2021</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Python Developer</h3>
              <div className="subheading mb-3">Blue Services</div>
              <p>
                I had a lot of fun working there because I could do what I feel
                best in, solve problems. Web applications for the banking and
                insurance sector it was my everyday life. High-performance and
                scalable sales systems were challenges that I loved. It was a
                miracle that I still found some time for machine learning and
                data science.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                September 2017 - January 2020
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">JUNIOR PYTHON DEVELOPER</h3>
              <div className="subheading mb-3">SAMSUNG ELECTRONICS</div>
              <p>
                First job in IT, first challenges, new technologies and a lot of
                fun (I mean work). The world of tests for mobile devices stood
                in front of me. Particularly a lot of work and commitment went
                into the Bixby project, which I am proud of. Now, I think that
                thanks to the experience gained in Samsung, I understand better
                what may go wrong in the future, which is why I create better
                code and I am better developer.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">June 2017 - September 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Seafarer / Academic Teacher</h3>
              <div className="subheading mb-3">Gdynia Maritime Univerity</div>
              <p>Adventure and beautiful memory ...</p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">October 2008 - November 2016</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">CodersLab Bootcamp</h3>
              <div className="subheading">Python Backend Developer</div>
              <div>Computer Science - Web Development</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">February 2017 - April 2017</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Gdynia Maritime Univerity</h3>
              <div className="subheading">Master od Science</div>
              <div>Nautical Studies</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">
                October 2004 - September 2009
              </span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Nautical Maritime College of Ireland</h3>
              <div className="subheading">Bachelor od Science</div>
              <div>Nautical Studies</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">January 2008 - June 2008</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-vuejs"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              TDD - Test Driven Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development - Scrum
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development - Kanban
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Clean Code - SOLID
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <ul className="fa-ul mb-4">
            <li>
              <i className="fa-li fa fa-check"></i>
              Writing Short Novel Stories
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Homebrewing
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Board Games
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Sports - Football
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Indiana Jones Movies
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Collectible Card Games
            </li>
          </ul>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fas fa-feather"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-beer"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-dice"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-futbol"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-redhat"></i>
            </li>
            <li className="list-inline-item">
              <i class="fab fa-wizards-of-the-coast"></i>
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fas fa-award text-secondary"></i>
              Faculty of Navigation Dean's Award for academic achievements
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-secondary"></i>
              Gdynia Maritime University Rector's Award for didactic
              achievements
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
