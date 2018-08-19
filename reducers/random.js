import { GET_RANDOM_GIPHY_SUCCESS } from '../actions/random';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
    giphy: null,
};

function transformRandomGiphyResult (rawResult) {
    const { images } = rawResult;
    return {
        full: images.original.url,
        thumbnail: images.fixed_width_downsampled.url,
    };
}

export default function (state, action) {
    if (state === undefined) {
        return initialState;
    }
    switch (action.type) {
        case GET_RANDOM_GIPHY_SUCCESS:
            return {
                ...state,
                giphy: transformRandomGiphyResult(action.giphy),
            };
        case LOCATION_CHANGE:
            return initialState;
        default:
            return state;
    }
}
