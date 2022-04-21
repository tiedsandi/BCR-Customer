import { combineReducers } from 'redux';
import { carsReducer, selectedCarReducer, showReducer, filterReducer, buttonReducer } from './carsReducer';

const rootReducer = combineReducers({
    allCars: carsReducer,
    selectedCar: selectedCarReducer,
    show: showReducer,
    result: filterReducer,
    button: buttonReducer,
});

export default rootReducer;
