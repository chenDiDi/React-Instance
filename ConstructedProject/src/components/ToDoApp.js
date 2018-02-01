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
    render() {
        const that = this;
        const ListProps = {
            listItems: that.props.toDoApp.list,    // TODO   that.props.toDoApp.list  that.state.list
            onListItemClick(i) { // takes the index of the element to be updated
                that.props.onListItemClick(i)
            },
            deleteListItem(i) {
                that.props.deleteList(i)
            },
        };
        const InputProps = {
            newToDo: that.props.toDoApp.newToDo,    // TODO   that.props.toDoApp.newToDo   that.state.newToDo
            onInputChange(event) {
                that.props.inputChange(event.target.value) // updates state to new value when user changes the input value
            },
            onInputSubmit(event) {
                event.preventDefault();
                that.props.inputSubmit()
            },
        };
        console.log(this.props, 'props');
        return (
            <div className="row">
                <div className="col-md-10 col-md-offset-1">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h1>My To Do App</h1>
                            <Input {...InputProps}/>
                            <List {...ListProps}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoApp;