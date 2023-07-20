import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {decreaseByTwoCounter} from '../redux/actions/counterActions';
import {connect} from 'react-redux';

class DecreaseByTwoCounter extends Component {
  render () {
    return (
      <div>
        <button
          onClick={e => {
            this.props.dispatch (decreaseByTwoCounter ());
          }}
        >
          2 Azalt
        </button>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {actions: bindActionCreators (decreaseByTwoCounter, dispatch)};
}

export default connect (mapDispatchToProps) (DecreaseByTwoCounter);
