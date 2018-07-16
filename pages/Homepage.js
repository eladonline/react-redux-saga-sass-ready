import React, { Component } from "react";
import ReactDOM from "react-dom";
import FirstSection from "src/components/sections/first/First";
import SecondSection from "src/components/sections/second/Second";
import ThirdSection from "src/components/sections/third/Third";
import Promo from "src/components/sections/first/Promo";
import Navbar from "src/components/fixed/navbar/";
import { Parallax, ParallaxLayer } from "react-spring";
import resetAnimation from "src/components/helpers/resetAnimation";
export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = { offset: 0, canScroll: true };
    this.overallPages = 3;
    this.initialParallaxConfig = {
      tension: 180,
      friction: 40,
      velocity: 0.5,
      overshootClamping: false,
      restSpeedThreshold: 0.5001,
      restDisplacementThreshold: 0.5001
    };
    this.lastScrollPos = 0;
    this.ticking = false;
    this.scrollLockTime = 2300; // 2s
    this.scrollUnlock = this.scrollUnlock.bind(this);
    this.scrollLock = this.scrollLock.bind(this);
  }
  /**
   * @callback componentDidMount
   * @listens scroll - if you find parallax within the DOM add listener -
   * @param e - the element scrolled -- parallax
   * @summary lock the scroll for some time for the parallax scroll to finish
   */
  componentDidMount() {
    if (ReactDOM.findDOMNode(this.parallax)) {
      const paralax = ReactDOM.findDOMNode(this.parallax);
      paralax.onscroll = e => {
        const scrollPos = e.target.scrollTop;
        if (scrollPos > this.lastScrollPos && !this.ticking) {
          const offset = Math.min(this.state.offset + 1, this.overallPages - 1);
          // reset last page animation
          setTimeout(() => {
            resetAnimation(this.state.offset -1 , "none", paralax);
          }, 1500);

          this.parallax.scrollTo(offset);
          this.setState({ offset: this.state.offset + 1 });
          this.scrollLock(scrollPos);
          this.scrollUnlock();
        } else if (
          this.lastScrollPos &&
          scrollPos < this.lastScrollPos &&
          !this.ticking
        ) {
          const offset = Math.max(this.state.offset - 1, 0);
          this.parallax.scrollTo(offset);
          // reset next page animation
          resetAnimation(offset, "block", paralax);
          this.setState({ offset: this.state.offset - 1 });
          this.scrollLock(scrollPos);
          this.scrollUnlock();
        }
        this.lastScrollPos = scrollPos;
      };
    }
  }

  /**
   *
   * @param {number} scrollPos - scroll from top
   * @summary disable scrolling by setting state to false
   *  remember last scroll from top number
   */
  scrollLock(scrollPos) {
    this.ticking = true;
    this.setState({ canScroll: false });
    this.lastScrollPos = scrollPos;
  }
  /**
   * @function scrollUnlock
   * @summary setTimeout to enable scroll
   */
  scrollUnlock() {
    setTimeout(() => {
      this.setState({ canScroll: true });
      this.ticking = false;
    }, this.scrollLockTime);
  }
  /**
   *
   * @param {component} children
   * @param {number} offset
   * @param {float, number} speed
   * @returns [{component}] [component wrapped by parallax layer]
   */
  page(children, offset, speed) {
    return (
      <ParallaxLayer offset={offset} speed={speed}>
        {children}
      </ParallaxLayer>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Navbar background={this.state.offset} />
        <Parallax
          className="container-parallax"
          ref={ref => (this.parallax = ref)}
          pages={this.overallPages}
          scrolling={this.state.canScroll}
          config={this.initialParallaxConfig}
        >
          <React.Fragment>
            {/*first section*/}
            {this.page(<Promo />, 0, 0)}
            {this.page(<FirstSection />, 0, 0.1)}

            {/*second section*/}
            {this.page(<SecondSection />, 1, 0.4)}
            {this.page(<ThirdSection />, 2, 0.3)}
          </React.Fragment>
        </Parallax>
      </React.Fragment>
    );
  }
}
