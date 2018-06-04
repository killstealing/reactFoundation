import { createStore, combineReducers,applyMiddleware,compose} from 'redux';
import { reducer as FilterReducer } from './filter';
import { reducer as TodosReducer } from './todos';
import Perf from 'react-addons-perf';

const win = window;
win.Perf = Perf

const reducer = combineReducers({
    TodosReducer: TodosReducer,
    FilterReducer: FilterReducer
});

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(require('redux-immutable-state-invariant')());
}

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {
  TodosReducer:[{"id":1,"text":"111","completed":false},
  {"id":2,"text":"111","completed":false},
  {"id":3,"text":"111","completed":false}]
}, storeEnhancers);