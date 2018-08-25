import React, { Component } from 'react';
import Overlay from './overlay';
import { fadeInOut, shrinkScale, queryAllExtract } from 'src/logic/helpers';

const historyLeft = 'static/icons/historyLeft.ico';
const historyRight = 'static/icons/historyRight.ico';

const History = p => {
  return (
    <div className="history">
      <img onClick={() => p.handleHistory(false)} src={historyLeft} alt="left" />
      <img onClick={() => p.handleHistory(true)} src={historyRight} alt="right" />
    </div>
  );
};

export default class FrameSkel extends Component {
  constructor(params) {
    super(params);
    this.state = { showOverlay: true, overlayElement: {} };
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.catchElement = this.catchElement.bind(this);
    this.handleResizeClick = this.handleResizeClick.bind(this);
    this.handleHistory = this.handleHistory.bind(this);
  }
  toggleOverlay(el) {
    this.setState({ showOverlay: !this.state.showOverlay });
    fadeInOut(el, this.state.showOverlay);
    shrinkScale(this.overlayMiniBtn, this.state.showOverlay);
  }
  catchElement(el) {
    this.setState({ overlayElement: el });
  }
  handleResizeClick() {
    const state = this.props.toggleWideItem();
    const target = document.querySelectorAll('.frameSkel');
    const arr = queryAllExtract(target);
    arr.forEach(frame => {
      state ? (frame.style.height = '50vh') : (frame.style.height = '80vh');
    });
  }
  handleHistory(bool) {
    bool ? this.frame.contentWindow.history.go(1) : this.frame.contentWindow.history.go(-1);
  }
  render() {
    const { head, source } = this.props;
    return (
      <div id="skelContainer">
        <Overlay catchElement={this.catchElement} toggleOverlay={this.toggleOverlay} />
        <header>
          <div className="dragMe">Drag me</div>
          <History handleHistory={this.handleHistory} />
          <div className="windowName">{head}</div>
          <section className="options">
            <div
              ref={e => {
                this.overlayMiniBtn = e;
              }}
              className="overlay-mini-btn"
              onClick={() => this.toggleOverlay(this.state.overlayElement)}
            >
              cover
            </div>
            <div onClick={this.handleResizeClick}>Resize</div>
            <div>Hide</div>
          </section>
        </header>
        <section>
          <iframe
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation"
            ref={e => (this.frame = e)}
            title="Inline Frame Example"
            className="frameSkel"
            src={source}
          />
        </section>
      </div>
    );
  }
}
