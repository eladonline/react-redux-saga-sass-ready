import React, { Component } from 'react';
import { connect } from 'react-redux';
import WindowResizeListener from 'react-window-size-listener';
import { Debounce } from 'react-throttle';
// import { Layout } from 'antd';
// import { initGA, logPageView } from '../helpers/analytics';
// import { siteConfig } from '../config/index';
import authAction from 'src/logic/redux/isomorphic/auth/actions';
import appActions from 'src/logic/redux/isomorphic/app/actions';
// import AppLocale from '../languageProvider';

const { logout } = authAction;
const { toggleAll } = appActions;
// const { Content, Footer } = Layout;

class Header extends Component {
  render() {
    if (this.props.App.height === 0) {
      return (
        <div>
          <Debounce time="1000" handler="onResize">
            <WindowResizeListener
              onResize={windowSize =>
                this.props.toggleAll(windowSize.windowWidth, windowSize.windowHeight)
              }
            />
          </Debounce>
        </div>
      );
    }
    return (
      <div>
        <header>{this.props.children}</header>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.Auth.toJS(),
  App: state.App.toJS()
});
export default connect(
  mapStateToProps,
  { logout, toggleAll }
)(Header);
