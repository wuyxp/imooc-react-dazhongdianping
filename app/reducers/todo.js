import * as TODO from '../constants/todo'

const initialState = {}

export default function todo(state=initialState, action){
    switch (action.type) {
        case TODO.ADD:
            return [...state,action.data]
        default:
            return state
    }
}
