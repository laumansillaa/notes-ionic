import axios from 'axios';
import {call, put, takeEvery} from 'redux-saga/effects';

// POST ALUMN

function sagaApiPostAlumn (payload) {
    console.log('ENTRE API POST')
    return axios.post('http://localhost:3001/alumns/addAlumn', payload)
}

function* sagaAddAlumn ({payload}) {
    const response = yield call(sagaApiPostAlumn, payload);
    //console.log('soy response', response)
    if (response.status === 200) {
        yield put({type: 'POST_ALUMN_SUCCESS', payload: response.data});
    } else {
        yield put({type: 'POST_ALUMN_ERROR', payload: response});
    }
}

// GET DETAIL ALUMN 

function sagaApiGetDetailAlumn (payload) {
    return axios.get(`http://localhost:3001/alumns/detailAlumn/${payload}`)
}

function* sagaGetDetailAlumn ({payload}) {
    const response = yield call(sagaApiGetDetailAlumn, payload);

    if (response.status === 200) {
        yield put({type: 'GET_DETAIL_ALUMNS_SUCCESS', payload: response.data});
    } else {
        yield put({type: 'GET_DETAIL_ALUMNS_ERROR', payload: response});
    }
}




// GET ALUMN

function sagaApiGetAlumns () {
    return axios.get('http://localhost:3001/alumns/getAllAlumns')
}


function* sagaAllAlumns () {
    const response = yield call (sagaApiGetAlumns)

    if (response.status === 200) {
        yield put ({type: 'GET_ALUMNS_SUCCESS', payload: response.data})
    } else {
        yield put ({type: 'GET_ALUMNS_ERROR', payload: response})
    }
}



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

function* sagaDeleteNotes ({payload}) {
    const response = yield call(sagaApiDeleteNotes, payload);
    if (response.status = 200) {
        yield put({type: 'DELETE_NOTES_SUCCESS'});
    } else {
        yield put({type: 'DELETE_NOTES_ERROR', payload: response});
    }
}

//

function sagaApiDeleteUser (payload) {
    return axios.delete(`http://localhost:3001/alumns/deleteAlumn/${payload}`)
}

function* sagaDeleteUser ({payload}) {
    const response = yield call(sagaApiDeleteUser, payload);
    if (response.status = 200) {
        yield put({type: 'DELETE_USER_SUCCESS'});
    } else {
        yield put({type: 'DELETE_USER_ERROR', payload: response});
    }
}

// UPDATE ALUMNS

function sagaApiUpdateAlumns (payload) {
    return axios.put(`http://localhost:3001/alumns/updateAlumn/${payload.id}`, payload)
}


function* sagaUpdateAlumns ({payload}) {
    const response = yield call(sagaApiUpdateAlumns, payload);
    if (response.status = 200) {
        yield put({type: 'UPDATE_ALUMNS_SUCCESS'});
    } else {
        yield put({type: 'UPDATE_ALUMNS_ERROR', payload: response});
    }
}


// ------ ROOT SAGA ------ 

export default function* rootSaga () {
    yield takeEvery('GET_NOTES', sagaAllNotes);
    yield takeEvery ('POST_NOTES', sagaAddNotes);
    yield takeEvery('DETAIL_NOTES', sagaDetailNotes);
    yield takeEvery('UPDATE_NOTES', sagaUpdateNotes);
    yield takeEvery('DELETE_NOTES', sagaDeleteNotes);
    yield takeEvery('POST_ALUMN', sagaAddAlumn);
    yield takeEvery('GET_ALL_ALUMNS', sagaAllAlumns);
    yield takeEvery('GET_DETAIL_ALUMNS', sagaGetDetailAlumn);
    yield takeEvery('DELETE_USER', sagaDeleteUser);
    yield takeEvery('UPDATE_ALUMNS', sagaUpdateAlumns);
}