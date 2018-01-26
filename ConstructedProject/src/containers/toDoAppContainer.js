/**
 * Created by didi on 2017.01.26
 **/

import { connect } from 'react-redux';
import ToDoApp from '../components/ToDoApp.js';
import {
    inputChange
} from '../redux/modules/toDoApp'; // we added this

function mapStateToProps(state) {
    return {
        toDoApp: state.toDoApp // gives our component access to state through props.toDoApp
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // inputChange: (value) => dispatch(inputChange(value))    // we added this     // TODO
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoApp);