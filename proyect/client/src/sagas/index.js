import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';
//import {apiGetNotes} from '../api';


//GET NOTES
function* sagaGetNotes () {
    return yield axios.get('http://localhost:3001/notes/getNotes')
}

function* sagaAllNotes () {
    const response = yield call(sagaGetNotes);
    //console.log("SAGA DATA ", response)
    if (response.status === 200) {
        yield put({type: 'GET_NOTES_SUCCESS', payload: response.data});
    } else {
        //console.log("a ver error", response.message)
        yield put({type: 'GET_NOTES_ERROR', payload: response});
    }
}


//ADD NOTES 
function* sagaAddNotes () {
    return yield axios.post('http://localhost:3001/notes/addNotes')
}






// ------ ROOT SAGA ------ 

export default function* rootSaga () {
    yield takeEvery('GET_NOTES', sagaAllNotes);
}