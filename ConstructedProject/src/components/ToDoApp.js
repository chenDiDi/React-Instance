import React from 'react';
import ReactDOM from 'react-dom';
import Input from './Input';
import List from './List';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{val:'More snacks', done: 'false'}, {val:'More money', done: 'false'}, {val:'More traveling', done: 'false'}],
            newToDo: ''
        }
    }
    onInputChange = (event) => {
        console.log(event.target.value, 'event.target.value');
        this.setState({ newToDo: event.target.value}); // updates state to new value when user changes the input value
    };
    render() {
        const that = this;
        const ListProps = {
            listItems: that.state.list,    // TODO   that.props.ToDoApp.list
            onListItemClick(i) { // takes the index of the element to be updated
                that.setState((preState)=>({
                    list: [
                        ...preState.list.slice(0, i), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
                        Object.assign({}, preState.list[i], {done: !preState.list[i].done}), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
                        ...preState.list.slice(i+1) // takes everything after the index passed in and adds it to the array.
                    ]
                }))
            },
            deleteListItem(i) {
                that.setState((previousState)=>({ // using previous state again
                    list: [
                        ...previousState.list.slice(0, i), // again with the slice method
                        ...previousState.list.slice(i+1) // the only diffence here is we're leaving out the clicked element
                    ]
                }))
            },
        };
        const InputProps = {
            newToDo: that.state.newToDo,    // TODO   that.props.ToDoApp.newToDo
            // onInputChange(event) {
            //     that.setState({ newToDo: event.target.value}); // updates state to new value when user changes the input value
            // },
            onInputSubmit(event) {
                event.preventDefault();
                that.setState((preState)=>({
                    list: [...preState.list, {val: preState.newToDo, done: 'false'} ], // the spread opperator is called by using the ... preceding the array
                    newToDo: ''
                }));
            },
        };
        console.log(this.props, 'props');
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <Input {...InputProps} onInputChange={this.onInputChange}/>
                            <List {...ListProps}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoApp;