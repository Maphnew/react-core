const createStore = require('./redux');

const COUNTER = 'count';

const middleware1 = (store) => (dispatch) => (action) => {
    if(action.type === 'fetch2') {
        setTimeout(() => {
            dispatch({
                type: 'fetch-response',
                payload: [2,2,3]
            })
        }, 2000);
    } else if (action.type === 'fetch3') {
        setTimeout(() => {
            dispatch({
                type: 'fetch-response',
                payload: [3,2,1]
            })
        }, 3000);
    } else {
        dispatch(action);
    }
}


const middleware2 = (store) => (dispatch) => (action) => {
    if(action.type === 'fetch4') {
        setTimeout(() => {
            dispatch({
                type: 'fetch-response',
                payload: [4,2,3]
            })
        }, 4000);
    } else if (action.type === 'fetch5') {
        setTimeout(() => {
            dispatch({
                type: 'fetch-response',
                payload: [5,2,1]
            })
        }, 5000);
    } else {
        dispatch(action);
    }
}



const reducer = (state, action) => {
    if (action.type === COUNTER) {
        return { ...state, counter: action.payload.counter };
    }

    if (action.type === 'fetch-response') {
        return {...state, reponse: action.payload}
    }

    return state;
};

function listener() {
    console.log(store.getState())
}

function actionCreator(type, payload) {
    return {
        type,
        payload
    }
}

const store = createStore(reducer, [middleware1, middleware2]);

store.subscribe(listener);

// react redux - connect
function counter(data) {
    store.dispatch(actionCreator(COUNTER, data));
}

counter({ counter: 1 });

store.dispatch(actionCreator('fetch5'));
store.dispatch(actionCreator('fetch2'));