import { Component } from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';

import { screenSizes } from 'utils/window';

class WindowDispatcher extends Component {
  constructor(props) {
    super(props);

    const { isInvertSupported, screenSupported } = this.props;
    let screens = screenSupported;

    if (isInvertSupported) {
      screens = Object.keys(omit(screenSizes, screenSupported));
    }

    const screenHandlers = screens.map(screen => {
      const screenHandler = window.matchMedia(screenSizes[screen]);
      screenHandler.addListener(this.handleChangeBreakpoint);
      return screenHandler;
    });

    this.state = {
      screenHandlers,
      isActiveScreen: screenHandlers.some(screen => screen.matches)
    };
  }

  componentWillUnmount() {
    const { screenHandlers } = this.state;
    screenHandlers.forEach(screenHandler => {
      screenHandler.removeListener(this.handleChangeBreakpoint);
    });
  }

  handleChangeBreakpoint = () => {
    const { screenHandlers } = this.state;
    this.setState({
      isActiveScreen: screenHandlers.some(screen => screen.matches)
    });
  };

  render() {
    const { children } = this.props;
    const { isActiveScreen } = this.state;
    return children(isActiveScreen);
  }
}

WindowDispatcher.defaultProps = {
  isInvertSupported: false
};

WindowDispatcher.propTypes = {
  children: PropTypes.func.isRequired,
  isInvertSupported: PropTypes.bool,
  screenSupported: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default WindowDispatcher;
