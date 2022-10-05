export const getRecord = () => {
    return{
        type: 'GET_RECORDS'
    }
}
export const uploadPy = (data) => {
    return{
        type: 'UPLOAD_PYTHON',
        payload: data
    }
}
export const uploadDb = (data) => {
    return{
        type: 'UPLOAD_DB',
        payload: data
    }
}