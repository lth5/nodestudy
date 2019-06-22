import {createStore} from 'redux'
var reducer = (state = 0, action) => {
    if (!action) return state;
    console.log(action);
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}
var store = createStore(reducer);
store.subscribe(function () {
    document.querySelector('#counter').innerHTML = store.getState();
});

document.querySelector('#addBtn').addEventListener('click', function () {
    store.dispatch({type: 'INCREMENT'});
});
document.querySelector('#minusBtn').addEventListener('click', function () {
    store.dispatch({type: 'DECREMENT'});
});
        