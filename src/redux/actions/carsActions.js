import binarApi from '../../apis/binarApi';
import { ActionTypes } from "../constants/action-types";

export const fetchCars = () => async (dispatch) => {
    const response = await binarApi.get("/mobil");
    dispatch({
        type: ActionTypes.FETCH_CARS,
        payload: response.data
    });
};

export const fetchCar = (id) => async (dispatch) => {
    const response = await binarApi.get(`/mobil/${id}`);
    dispatch({
        type: ActionTypes.SELECTED_CAR,
        payload: response.data
    });
}

export const setCars = (cars) => {
    return {
        type: ActionTypes.SET_CARS,
        payload: cars
    };
}

export const selectedCar = (car) => {
    return {
        type: ActionTypes.SELECTED_CAR,
        payload: car
    };
}

export const removeSelectedCar = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_CAR
    };
}