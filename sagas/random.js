import { GET_RANDOM_GIPHY, getRandomGiphySuccess, getRandomGiphyError } from '../actions/random';
import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import axios from 'axios';

const apiKey = '905ee2e802364f25829caca102b38b73';

function * getRandomGiphy () {
    try {
        const randomGiphyResult = yield call(
            axios.get,
            'https://api.giphy.com/v1/gifs/random',
            {
                params: { apiKey }
            }
        );
        yield put(getRandomGiphySuccess(randomGiphyResult.data.data));
    } catch (_) {
        yield put(getRandomGiphyError());
    }
}

export default function * () {
    yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}