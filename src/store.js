
import { legacy_createStore as createStore } from 'redux';
import rotateReducer from "./reducers/roateReducer"
function configureStore(state = { rotating: true }) {
  return createStore(rotateReducer,state);
}

export default configureStore;