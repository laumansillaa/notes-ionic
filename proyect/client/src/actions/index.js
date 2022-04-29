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


