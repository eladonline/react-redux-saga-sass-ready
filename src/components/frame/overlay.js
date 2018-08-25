import React, { Component } from 'react';

export default class Overlay extends Component {
  componentDidMount() {
    this.mainFrame && this.props.catchElement(this.mainFrame);
  }

  render() {
    return (
      <div ref={e => (this.mainFrame = e)} id="frameSkel-overlay">
        <section>
          <Button onClick={() => this.props.toggleOverlay(this.mainFrame)} text="Remove cover" />
        </section>
      </div>
    );
  }
}

const Button = p => {
  return (
    <button onClick={p.onClick} className="overlay-button">
      {p.text}
    </button>
  );
};
