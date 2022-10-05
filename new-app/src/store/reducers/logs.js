const initialState = {
    isAuth: false,
    isLoading: false,
    errors: null
}

const logs = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case 'LOGIN':
            return{
                ...state,
                isLoading: true
            }
        case 'REGISTER':
            return{
                ...state,
                isLoading: true
            }
        case 'SUCCESS_LOGIN':
            return{
                isAuth: true,
                isLoading: false,
                errors: null
            }
        case 'SUCCESS_REGIST':
            return{
                isAuth: false,
                isLoading: false,
                errors: null
            }
        case 'FAILED_LOGIN':
            return{
                isAuth: false,
                isLoading: false,
                errors: payload
            }
        case 'REMOVE_ERROR':
            return{
                isAuth: false,
                isLoading: false,
                errors: null
            }
        case 'LOGOUT_USER':
            return{
                isAuth: false,
                isLoading: false,
                errors: false
            }
        default:
            return state
    }
}

export default logs