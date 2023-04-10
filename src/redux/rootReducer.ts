import {combineReducers} from 'redux';
import boardsReducer from './reducers/boardsReducers';

export const rootReducer = combineReducers({
	boards: boardsReducer,
});

export type RootState = ReturnType<typeof rootReducer>