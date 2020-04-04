// import {createStore, applyMiddleware} from 'redux';
// import rootReducer from './rootReducer';
// import thunk from 'redux-thunk';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)

// )

// export default store;



import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const middleware = [
  thunk
]
const withDevTools = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

function persistState(state) {
  try {
      const serializedState = JSON.stringify(state);
      if (!window.location.href.includes("logout")) {
          localStorage.setItem("state", serializedState);
      } else {
          localStorage.setItem("state", "");
      }
  } catch (err) {
      console.log(err)
  }
}

function rehydrateState() {
  try {
      const serializedState = localStorage.getItem("state");

      if (serializedState === null || serializedState === "") {
          return undefined;
      }
      const parsedState = JSON.parse(serializedState);
      return parsedState;

  } catch (err) {
      console.log(err);
      return undefined;
  }
}

const persistedState = rehydrateState();

const store =  createStore(
  rootReducer, 
  {...persistedState},  
  withDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => persistState(store.getState()));


export default store;