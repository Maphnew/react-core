function createStore(reducer, middleware = []) {
    let state;
    const handler = [];

    function dispatch(action) {
        state = reducer(state, action);
        handler.forEach((listener) => {
            listener();
        })
    }

    function getState() {
        return state;
    }

    function subscribe(listener) {
        handler.push(listener);
    }

    middleware = Array.from(middleware).reverse();
    let lastDispatch = dispatch;
    const store = {
        getState,
        subscribe,
    };
    middleware.forEach(m => {
        lastDispatch = m(store)(lastDispatch);
    })

    return { ...store, dispatch: lastDispatch }
}

module.exports = createStore