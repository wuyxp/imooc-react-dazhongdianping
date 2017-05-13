import * as TODO from '../constants/todo'
export function add(data){
    return {
        type:TODO.ADD,
        data
    }
}
