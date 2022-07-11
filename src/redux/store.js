import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../redux/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

/**extend with custom functionality (using applymiddleware and createLogger) --> it shows prevState(
before state transition), action, newState(after the state transition) in the console with detailed manner **/
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store;