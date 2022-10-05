const initialState = {
    datas: [],
    record_python: [],
    user_list: []
}

const records = (state = initialState, action) => {
    const { type, payload } = action
    switch(type){
        case 'GET_RECORD_SUCCESS':
            return{
                ...state,
                datas : payload
            }
        case 'PYTHON_SUCCESS':
            return{
                ...state,
                record_python: payload
            }
        case 'SUCCESS_GET_USERS':
            return{
                ...state,
                user_list: payload
            }
        default:
            return state
    } 
}

export default records