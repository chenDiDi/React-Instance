/**
 * Created by didi on 2017.01.26
 **/

const INPUT_CHANGED = 'ToDoApp/INPUT_CHANGED';
const INPUT_SUBMIT= 'ToDoApp/INPUT_SUBMIT';
const LIST_DELETE= 'ToDoApp/LIST_DELETE';
const LIST_ITEMCLICK= 'ToDoApp/LIST_ITEMCLICK';

const initialState = {
    list: [{val:'More snacks', done: 'false'}, {val:'More Money', done: 'false'}, {val:'More Traveling', done: 'false'}],
    newToDo: ''
};
//The initial state of this reducer (will be combined with the states of other reducers as your app grows)

export function inputChange(newToDo){
    return {
        type: INPUT_CHANGED,
        newToDo
    }
}

export function inputSubmit(){
    return {
        type: INPUT_SUBMIT
    }
}

export function deleteList(index){
    return {
        type: LIST_DELETE,
        index
    }
}

export function onListItemClick(index){
    return {
        type: LIST_ITEMCLICK,
        index
    }
}

export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
    switch (action.type){       // TODO
        case INPUT_CHANGED:
            return Object.assign(
                {},
                state,
                {newToDo: action.newToDo}
            );
        case INPUT_SUBMIT:
            return Object.assign(
                {},
                state,
                {
                    list: [...state.list, {val: state.newToDo, done: 'false'} ],
                    newToDo: ''
                }
            );
        case LIST_DELETE:
            return Object.assign(
                {},
                state,
                {
                    list: [
                        ...state.list.slice(0, action.index), // again with the slice method
                        ...state.list.slice(action.index + 1) // the only diffence here is we're leaving out the clicked element
                    ]
                }
            );
        case LIST_ITEMCLICK:
            return Object.assign(
                {},
                state,
                {
                    list: [
                        ...state.list.slice(0, action.index), // slice returns a new array without modifying the existing array. Takes everything up to, but not including, the index passed in.
                        Object.assign({}, state.list[action.index], {done: !state.list[action.index].done}), // Object.assign is a new ES6 feature that creates a new object based on the first param (in this case an empty object). Other objects can be passed in and will be added to the first object without being modified.
                        ...state.list.slice(action.index+1) // takes everything after the index passed in and adds it to the array.
                    ]
                }
            );
        default:
            return state;
    }
}
