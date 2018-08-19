export const GET_RANDOM_GIPHY = 'GET_RANDOM_GIPHY';
export const GET_RANDOM_GIPHY_SUCCESS = 'GET_RANDOM_GIPHY_SUCCESS';
export const GET_RANDOM_GIPHY_ERROR = 'GET_RANDOM_GIPHY_ERROR';

export const getRandomGiphy = () => ({ type: GET_RANDOM_GIPHY });
export const getRandomGiphyError = () => ({ type: GET_RANDOM_GIPHY_ERROR });
export const getRandomGiphySuccess = (giphy) => ({
    type: GET_RANDOM_GIPHY_SUCCESS,
    giphy
});