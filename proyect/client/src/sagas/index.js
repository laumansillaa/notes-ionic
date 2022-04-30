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


//NOTES DETAIL 
function* sagaApiGetNotesDetail (payload) {
    return yield axios.get(`http://localhost:3001/notes/detailNote/${payload}`)
}

function* sagaDetailNotes ({payload}) {

    const response = yield call(sagaApiGetNotesDetail, payload);
    if (response.status === 200) {
        yield put({type: 'DETAIL_NOTES_SUCCESS', payload: response.data});
    } else {

        yield put({type: 'DETAIL_NOTES_ERROR', payload: response});
    }
}

//UPDATES NOTES 
//payload , id (id de la nota) al payload
function* sagaApiUpdateNotes (payload) {

    return yield axios.put(`http://localhost:3001/notes/updateNote/${payload.id}`, payload)
}

function* sagaUpdateNotes ({payload}) {

    const response = yield call(sagaApiUpdateNotes, payload);
    if (response.status === 200) {
        yield put({type: 'UPDATE_NOTES_SUCCESS'});
    } else {
        yield put({type: 'UPDATE_NOTES_ERROR', payload: response});
    }
}


//DELETE NOTE

function* sagaApiDeleteNotes (payload) {
    return yield axios.delete(`http://localhost:3001/notes/deleteNote/${payload}`)
}

//CONTINUAR CON EL DELETEEEE
function* sagaDeleteNotes ({payload}) {
    const response = yield call(sagaApiDeleteNotes, payload);
    if (response.status = 200) {
        yield put({type: 'DELETE_NOTES_SUCCESS'});
    } else {
        yield put({type: 'DELETE_NOTES_ERROR', payload: response});
    }
}



// ------ ROOT SAGA ------ 
//BUSCAR QUE HACE FORK

export default function* rootSaga () {
    yield takeEvery('GET_NOTES', sagaAllNotes);
    yield takeEvery ('POST_NOTES', sagaAddNotes);
    yield takeEvery('DETAIL_NOTES', sagaDetailNotes);
    yield takeEvery('UPDATE_NOTES', sagaUpdateNotes);
    yield takeEvery('DELETE_NOTES', sagaDeleteNotes);
}