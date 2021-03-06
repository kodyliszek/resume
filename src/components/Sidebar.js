import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import Scroll from './Scroll';

import avatar from '../assets/images/avatar.png';
import config from '../../config';

export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: [
        { content: 'About', href: 'about' },
        { content: 'Experience', href: 'experience' },
        { content: 'Education', href: 'education' },
        { content: 'Skills', href: 'skills' },
        { content: 'Interests', href: 'interests' },
        { content: 'Awards', href: 'awards' },
      ],
      isCollapsed: true,
    };
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.hideNavbar = this.hideNavbar.bind(this);
  }

  toggleNavbar() {
    this.setState({
      isCollapsed: !this.state.isCollapsed,
    });
  }

  hideNavbar() {
    this.setState({
      isCollapsed: true,
    });
  }

  render() {
    const { tabs, isCollapsed } = this.state;
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
        id="sideNav"
      >
        <a className="navbar-brand" href="#page-top">
          <span className="d-inline-block d-lg-block">
            <Scroll type="id" onScrollClick={this.hideNavbar} element="about">
              <img
                className="img-fluid img-profile rounded-circle mx-auto mb-2"
                src={avatar}
                alt="profile"
              />
            </Scroll>
          </span>
          <span className="d-inline-block d-lg-none ml-3">
            {config.firstName} {config.lastName}
          </span>
        </a>
        <button
          className={`navbar-toggler navbar-toggler-right ${
            isCollapsed ? 'collapsed' : ''
          }`}
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={this.toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`}
          id="navbarSupportedContent"
        >
          <Scrollspy
            items={tabs.map(s => s.href)}
            currentClassName="active"
            offset={-300}
            className="navbar-nav"
          >
            {tabs.map((tab, i) => {
              const { href, content } = tab;
              return (
                <li className="nav-item" key={href}>
                  <Scroll
                    type="id"
                    offset={!isCollapsed ? -50 : 0}
                    onScrollClick={this.hideNavbar}
                    element={href}
                  >
                    <a className="nav-link" href={`#${href}`}>
                      {content}
                    </a>
                  </Scroll>
                </li>
              );
            })}
          </Scrollspy>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
