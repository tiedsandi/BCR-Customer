import { ActionTypes } from "../constants/action-types";
const initialState = {
    cars: [],
};

export const carsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_CARS:
            return { ...state, cars: payload, };
        case ActionTypes.FETCH_CARS:
            return { ...state, cars: payload, };
        default:
            return state;
    }
}

export const selectedCarReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SELECTED_CAR:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_SELECTED_CAR:
            return {}
        default:
            return state;
    }
}

//Another way to do it
// export const productReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ActionTypes.SET_CARS:
//             return {
//                 ...state,
//                 cars: action.payload,
//             };
//         case ActionTypes.FETCH_CARS:
//             return {
//                 ...state,
//                 cars: action.payload,
//             };
//         default:
//             return state;
//     }
// }