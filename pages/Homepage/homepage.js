import React from 'react';
import FrameSkel from 'src/components/frame/frameSkel';
import falseData from 'src/components/helpers/falseData';
import Sortable from 'sortablejs';

import { Row, Col } from 'react-bootstrap';

export default class Desktop extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selected: null, wideItem: false };
    this.toggleWideItem = this.toggleWideItem.bind(this);
  }
  componentDidMount() {
    const [leftCol, rightCol] = document.querySelectorAll('#sortableGroup');
    if (leftCol && rightCol) {
      const props = {
        group: 'screen',
        sort: true,
        delay: 0,
        touchStartThreshold: 5,
        animation: 150,
        handle: '.dragMe',
        scroll: true,
        scrollSensitivity: 30
      };
      const sortableLeft = new Sortable(leftCol, props);
      const sortableRight = new Sortable(rightCol, props);
      Object.assign(props, sortableLeft);
      Object.assign(props, sortableRight);
    }
  }
  toggleWideItem() {
    this.setState({ wideItem: !this.state.wideItem });
    return this.state.wideItem
  }
  splitArrToTwoCols() {
    const list = [];
    for (let i = 0; i < falseData.head.length; i++) {
      list.push(
        <FrameSkel
          toggleWideItem={this.toggleWideItem}
          key={i}
          head={falseData.head[i]}
          source={falseData.source[i]}
        />
      );
    }
    let pairs = [];
    let key = 0;
    const maxValue = Math.ceil(list.length / 2);
    while (list.length) {
      key++;
      pairs.push(
        <Col
          id="sortableGroup"
          key={`frameSkelCol-${key}`}
          xs={12}
          md={this.state.wideItem ? 12 : 6}
        >
          {list.splice(0, maxValue)}
        </Col>
      );
    }

    return pairs;
  }
  render() {
    return (
      <div id="main-con-homepage">
        <Row className="hompageRow">{this.splitArrToTwoCols()}</Row>
      </div>
    );
  }
}
