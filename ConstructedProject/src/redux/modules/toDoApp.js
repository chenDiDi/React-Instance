/**
 * Created by didi on 2017.01.26
 **/

const initialState = {
    list: [{val:'More snacks', done: 'false'}, {val:'More Money', done: 'false'}, {val:'More Money', done: 'false'}],
    newToDo: ''
}; //The initial state of this reducer (will be combined with the states of other reducers as your app grows)

const INPUT_CHANGED = 'INPUT_CHANGED';

export function inputChange(newToDo){
    return {
        type: INPUT_CHANGED,
        newToDo
    }
}

export default function reducer(state = initialState, action){ // a function that has two parameters, state (which is initialized as our initialState obj), and action, which we'll cover soon.
    switch (action.type){       // TODO
        // case INPUT_CHANGED:
        //     return Object.assign(
        //         {},
        //         state,
        //         {newToDo: action.value}
        //     );
        default:
            return state;
    }
}

// 1："start": "webpack-dev-server --hot --inline --colors --content-base ./build"，把./build去掉；
// 2: import createLogger from 'redux-logger' 改成------》import { createLogger } from 'redux-logger' ，
// 其他正常按照上文，就可以弄出个demo了，很基础，很适合刚开始结合redux／react／webpack搭建一个react项目。
// 谢谢博主的文章