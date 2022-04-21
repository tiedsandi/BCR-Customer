import { combineReducers } from 'redux';
import { carsReducer, selectedCarReducer, showReducer, searchStatusReducer, selectedCarReducer1 } from './carsReducer';

const rootReducer = combineReducers({
    allCars: carsReducer,
    selectedCar: selectedCarReducer,
    selectedCar1: selectedCarReducer1,
    show: showReducer,
    statusSearch: searchStatusReducer,
});

export default rootReducer;
