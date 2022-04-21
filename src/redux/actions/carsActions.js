import apiTambahan from '../../apis/apiTambahan';
import { ActionTypes } from "../constants/action-types";

export const fetchCars = () => async (dispatch) => {
    const response = await apiTambahan.get("/mobil");
    dispatch({
        type: ActionTypes.FETCH_CARS,
        payload: response.data
    });
    dispatch({
        type: ActionTypes.SET_RESULT,
        payload: response.data
    });
};

export const fetchCar = (id) => async (dispatch) => {
    const response = await apiTambahan.get(`/mobil/${id}`);
    dispatch({
        type: ActionTypes.SELECTED_CAR,
        payload: response.data
    });
}

export const filterResult = (result) => {
    return {
        type: ActionTypes.SET_RESULT,
        payload: result
    };
}

// export const setButton = (button) => {
//     return {
//         type: ActionTypes.SET_BUTTON,
//         payload: button
//     };
// }

export const setShow = (show) => {
    return {
        type: ActionTypes.SET_SHOW,
        payload: show
    };
}

