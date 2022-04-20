import { combineReducers } from 'redux';
import { carsReducer, selectedCarReducer, showReducer, searchStatusReducer } from './carsReducer';

const rootReducer = combineReducers({
    allCars: carsReducer,
    selectedCar: selectedCarReducer,
    show: showReducer,
    statusSearch: searchStatusReducer,
});

export default rootReducer;
