// //initialise state

// const initialState={
//     count:0
// }




// //crete an action creator

// const increment=()=>{
//     return {
//         type:'increment'
//     }
// }


// const decrement=()=>{
//     return {
//         type:'decrement'
//     }
// }


// //reducer

// const counterReducer=()=>{
//     if(action.type === "increment")
//       {
//           return {
//               ...state,
//               count:state.count+1
//           }
//       }


//       if(action.type === "increment")
//       {
//           return {
//               ...state,
//               count:state.count-1
//           }
//       }
// }


// //create store 



// function render(){
//     const store = Redux.createStore(counterReducer)

//     const state= store.getState()
    
//     console.log(state)

//     document.getElementById('counter') = state.count
// }

// render()






// document.getElementById('increment').addEventListener('click',function(){
//     store.dispatch(increment())
// })


// document.getElementById('decrement').addEventListener('click',function(){
//     store.dispatch(decrement())
// })

// // function num(){
// //     alert(123)
// // }





//initialize state
const initialState = { counter: 0 };

//create action creators
const increment = () => {
    return {
        type: 'increment',
    };
};

const decrement = () => {
    return {
        type: 'decrement',
    };
};

//reducer
function counterReducer(state = initialState, action) {
    if (action.type === 'increment') {
        return {
            ...state,
            counter: state.counter + 1,
        };
    }

    if (action.type === 'decrement') {
        return {
            ...state,
            counter: state.counter - 1,
        };
    }

    return state;
}

// const enhancers = Redux.compose(newDispatch, newState);

//create store
const store = Redux.createStore(counterReducer);

function render() {
    const state = store.getState();
    console.log(state);
    document.getElementById('counter').innerHTML = state.counter;
}
render();

store.subscribe(render);

document
    .getElementById('increment')
    .addEventListener('click', function () {
        store.dispatch(increment());
    });

document
    .getElementById('decrement')
    .addEventListener('click', function () {
        store.dispatch(decrement());
    });

// function newDispatch(createStore) {
//     return function (reducer, preLoadedState, enhancers) {
//         let store = createStore(reducer, preLoadedState, enhancers);

//         function newDispatch(action) {
//             const result = store.dispatch(action);
//             console.log('Hello world, Perform LOgging');
//             return result;
//         }
//         return { ...store, dispatch: newDispatch };
//     };
// }

// function newState(createStore) {
//     return function (reducer, preLoadedState, enhancers) {
//         let store = createStore(reducer, preLoadedState, enhancers);

//         function newState() {
//             return {
//                 ...store.getState(),
//                 hai: 'Hello world',
//             };
//         }
//         return { ...store, getState: newState };
//     };
// }