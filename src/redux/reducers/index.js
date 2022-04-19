import { combineReducers } from 'redux';
import { carsReducer, selectedCarReducer } from './carsReducer';

const rootReducer = combineReducers({
    allCars: carsReducer,
    selectedCar: selectedCarReducer
});

export default rootReducer;
