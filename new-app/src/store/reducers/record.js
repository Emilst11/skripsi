const initialState = {
    datas: [],
    record_python: []
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
        default:
            return state
    } 
}

export default records