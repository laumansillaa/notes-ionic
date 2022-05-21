// ------- POST ALUMNS --------
export const postAlumn = (alumn) => {
    return ({
        type: 'POST_ALUMN',
        payload: alumn
    })
}

//SAGA SUCCESS AND ERROR POST ALUMN

export const postAlumnSuccess = (alumn) => {
    return ({
        type: 'POST_ALUMN_SUCCESS',
        payload: alumn
    })
}

export const postAlumnError = (error) => {
    return ({
        type: 'POST_ALUMN_ERROR',
        payload: error
    })
}


// --------------------------

// -------- GET ALL ALUMNS ----------

export const getAllAlumns = () => {
    return ({
        type: 'GET_ALL_ALUMNS'
    })
}

export const getAllAlumnsSuccess = (alumns) => {
    //console.log('ENTRE ACTIONS GET ALL ALUMNS')
    return ({
        type: 'GET_ALL_ALUMNS_SUCCESS',
        payload: alumns
    })
}

export const getAllAlumnsError = (error) => {
    return ({
        type: 'GET_ALL_ALUMNS_ERROR',
        payload: error
    })
}

//--------------------------

// GET DETAIL ALUMNS -------

export function getDetailAlumns (payload) {
    return ({
        type: 'GET_DETAIL_ALUMNS',
        payload
    })
}


export function getDetailAlumnsSuccess (alumn) {
    return ({
        type: 'GET_DETAIL_ALUMNS_SUCCESS',
        payload: alumn
    })
}

export function getDetailAlumnsError (error) {
    return ({
        type: 'GET_DETAIL_ALUMNS_ERROR',
        payload: error
    })
}


// --------------------------

// GET NOTES ----------------
export function getNotes() {
    return ({
        type: 'GET_NOTES',
    })
}

//SAGA SUCCESS AND ERROR GET NOTES
export function getNotesSuccess (notes) {
    return {
        type: 'GET_NOTES_SUCCESS',
        payload: notes
    }
}

export function getNotesError (error) {
    return ({
        type: 'GET_NOTES_ERROR',
        payload: error
    })
}

// -------------------------------------------------

export function postNotes(payload) {
    return ({
        type: 'POST_NOTES',
        payload
    })
}

//SAGA SUCCESS AND ERROR POST NOTES
export function postNotesSuccess () {
    return {
        type: 'POST_NOTES_SUCCESS'
       
    }
}

export function postNotesError (error) {
    return ({
        type: 'POST_NOTES_ERROR',
        payload: error
    })
}

//---------------------------------------------------

export function detailNotes (payload) {
    return ({
        type: 'DETAIL_NOTES',
        payload
    })
}

//SAGA SUCCESS AND ERROR DETAIL NOTES
export function detailNotesSuccess () {
    return {
        type: 'DETAIL_NOTES_SUCCESS'
    }
}


export function detailNotesError (error) {
    return ({
        type: 'DETAIL_NOTES_ERROR',
        payload: error
    })
}

//---------------------------------------------------

export function updateNotes (payload) {
    return ({
        type: 'UPDATE_NOTES',
        payload
    })
}

//SAGA SUCCESS AND ERROR UPDATE NOTES
export function updateNotesSuccess () {
    return {
        type: 'UPDATE_NOTES_SUCCESS'
    }
}

export function updateNotesError (error) {
    return ({
        type: 'UPDATE_NOTES_ERROR',
        payload: error
    })
}


//---------------------------------------------------


export function deleteNotes (payload) {
    console.log('ENTRE ACTIONS DELETE NOTES')
    return({
        type: 'DELETE_NOTES',
        payload
    })
}

//SAGA SUCCESS AND ERROR DELETE NOTES

export function deleteNotesSuccess () {
    return {
        type: 'UPDATE_NOTES_SUCCESS'
    }
}

export function deleteNotesError (error) {
    return ({
        type: 'DELETE_NOTES_ERROR',
        payload: error
    })
}


// -------------------------------------------------

export function deleteUser (payload) {
    return({
        type: 'DELETE_USER',
        payload
    })
}


// SAGA SUCCESS AND ERROR DELETE USER

export function deleteUserSuccess () {
    return {
        type: 'DELETE_USER_SUCCESS'
    }
}

export function deleteUserError (error) {
    return ({
        type: 'DELETE_USER_ERROR',
        payload: error
    })
}

// -------------------------------------------------

export function updateAlumns (payload) {
    return ({
        type: 'UPDATE_ALUMNS',
        payload
    })
}

export function updateAlumnsSuccess () {
    return {
        type: 'UPDATE_ALUMNS_SUCCESS'
    }
}

export function updateAlumnsError (error) {
    return ({
        type: 'UPDATE_ALUMNS_ERROR',
        payload: error
    })
}