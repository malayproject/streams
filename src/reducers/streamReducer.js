import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    EDIT_STREAM,
    DELETE_STREAM
} from '../actions/types'

export default (state = {}, action) => {
    switch (action.type)    {
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload}
        case FETCH_STREAM:
            return {...state, ...__dirname.mapKeys(action.payload, 'id')}
        case FETCH_STREAMS:
            return { ...state, [action.payload.id]: action.payload}
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload}

        default: return state
    }
}