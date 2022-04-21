import binarApi from '../../apis/binarApi';
import apiTambahan from '../../apis/apiTambahan';
import { ActionTypes } from "../constants/action-types";

export const fetchCars = () => async (dispatch) => {
    const response = await binarApi.get("/customer/car");
    dispatch({
        type: ActionTypes.FETCH_CARS,
        payload: response.data
    });
};

export const fetchCars1 = () => async (dispatch) => {
    const response = await apiTambahan.get("/mobil");
    dispatch({
        type: ActionTypes.FETCH_CARS1,
        payload: response.data
    });
};

export const fetchCar = (id) => async (dispatch) => {
    const response = await binarApi.get(`/customer/car/${id}`);
    dispatch({
        type: ActionTypes.SELECTED_CAR,
        payload: response.data
    });
}

export const fetchCar1 = (id) => async (dispatch) => {
    const response = await apiTambahan.get(`/mobil/${id}`);
    dispatch({
        type: ActionTypes.SELECTED_CAR1,
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

export const selectedCar1 = (car) => {
    return {
        type: ActionTypes.SELECTED_CAR1,
        payload: car
    };
}

export const setShow = (show) => {
    return {
        type: ActionTypes.SET_SHOW,
        payload: show
    };
}

export const setPage = (page) => {
    return {
        type: ActionTypes.SET_PAGE,
        payload: page
    };
}
