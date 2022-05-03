const initialState = {
    notes: [],
    post: [],
    detail: [],
    update: [],
    error: null
}

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case 'GET_NOTES_SUCCESS':
            return {
                ...state,
                notes: action.payload
            }
        case 'GET_NOTES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'POST_NOTES_SUCCESS':
            return {
                ...state,
                
            }
        case 'POST_NOTES_ERROR':
            return {
                ...state,
                error: action.payload
            }    
        case 'DETAIL_NOTES_SUCCESS':
            return {
                ...state,
                detail: action.payload
            }
        case 'DETAIL_NOTES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'UPDATE_NOTES_SUCCESS':
            return {
                ...state,
                update: action.payload
            }
        case 'UPDATE_NOTES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        case 'DELETE_NOTES_SUCCESS':
            return {
                ...state
            }
        case 'DELETE_NOTES_ERROR':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}


export default rootReducer;