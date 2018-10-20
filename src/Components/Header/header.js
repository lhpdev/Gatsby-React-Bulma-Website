import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './header_burguer_button.js'

class Header extends Component
{
    componentDidMount() {
      // When the component is mounted, add your DOM listener to the "nv" elem.
      // (The "nv" elem is assigned in the render function.)
      ReactDOM.findDOMNode(this).addEventListener("click", this.handleNvEnter);
    }

    componentWillUnmount() {
      // Make sure to remove the DOM listener when the component is unmounted.
       ReactDOM.findDOMNode(this).removeEventListener("click", this.handleNvEnter);
    }

    // Use a class arrow function (ES7) for the handler. In ES6 you could bind()
    // a handler in the constructor.
    handleNvEnter = (event) => {
      const target = event.target;
        const menu = document.getElementById('navbarMenuHeroA');        

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        target.classList.toggle('is-active');
        menu.classList.toggle('is-active');

    }

    render () {
    return (
       <section className="hero is-white is-small">
          <div className="hero-head">
            <div className="navbar-container">
              <nav className="navbar is-white is-fixed-top">
                 <div className="container">
                  <div className="navbar-brand is-white">
                    <a className="navbar-item" href="/">
                        <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple128/v4/65/83/62/658362eb-0f37-67cb-78ee-e59225579cac/icon-appStore-1x_U007emarketing-85-220-0-4.png/1200x630wa.png" alt="header-logo" /> 
                        <p>Even</p>
                    </a>
                    <span className="navbar-burger burger" datatarget="navbarMenuHeroA">
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenuHeroA" className="navbar-menu">
                    <div className="navbar-end">
                      <a className="navbar-item" href="/">
                        The Even App
                      </a>
                      <a className="navbar-item" href="/employers">
                        Offer Even as Benefit
                      </a>
                      <span className="navbar-item">
                        <a href = "/download" className="button is-link is-inverted">
                          <span>Download</span>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </section>
    );
  }

}

export default Header;