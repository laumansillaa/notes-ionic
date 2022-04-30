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