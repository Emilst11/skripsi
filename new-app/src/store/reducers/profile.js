const initialState = {
    isActive: false,
    data: null
}

const profile = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case 'GET_SUCCESS':
            return{
                isActive: true,
                data: payload
            }
        case 'GET_FAILED':
            return{
                isActive: false,
                data: null
            }
        default:
            return state
    }
}

export default profile