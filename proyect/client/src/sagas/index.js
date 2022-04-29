import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';


//GET NOTES
function* sagaApiGetNotes () {
    return yield axios.get('http://localhost:3001/notes/getNotes')
}

function* sagaAllNotes () {
    const response = yield call(sagaApiGetNotes);

    if (response.status === 200) {
        yield put({type: 'GET_NOTES_SUCCESS', payload: response.data});
    } else {

        yield put({type: 'GET_NOTES_ERROR', payload: response});
    }
}


//ADD NOTES 
function* sagaApiPostNotes (payload) {
    return yield axios.post('http://localhost:3001/notes/addNotes', payload)
}


function* sagaAddNotes ({payload}) {

    const response = yield call(sagaApiPostNotes, payload);
    if (response.status === 200) {
        yield put({type: 'POST_NOTES_SUCCESS'});
    } else {
        yield put({type: 'POST_NOTES_ERROR', payload: response});
    }
}



// ------ ROOT SAGA ------ 

export default function* rootSaga () {
    yield takeEvery('GET_NOTES', sagaAllNotes);
    yield takeEvery ('POST_NOTES', sagaAddNotes);
}