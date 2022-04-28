export function getNotes() {
    return ({
        type: 'GET_NOTES',
    })
}

//SAGA SUCCESS AND ERROR GET NOTES
export function getNotesSuccess (users) {
    return {
        type: 'GET_NOTES_SUCCESS',
        payload: users
    }
}

export function getNotesError (error) {
    return ({
        type: 'GET_NOTES_ERROR',
        payload: error
    })
}

// -------------------------------------------------


