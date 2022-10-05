import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const URL_DB = 'http://127.0.0.1:8000/api/auth/'
const URL_PY = 'http://127.0.0.1:5000/api/uploader'

function* getRecord(){
    const token = sessionStorage.getItem('token')
    try {
        const res = yield axios.get(`${URL_DB}record/get-all?token=${token}`)
        yield put({type: 'GET_RECORD_SUCCESS', payload: res.data})
    }catch (e) {
        console.log(e.response)
    }
}

function* python(action){
    const {payload} = action
    const formData = new FormData()
    formData.append('file', payload)
    try{
        const res = yield axios.post(URL_PY, {file: payload})
        yield put({type: 'PYTHON_SUCCESS', payload: res.data})
    }catch(e){
        console.log(e.response)
    }
}

function* getUsers(){
    const token = sessionStorage.getItem('token')
    try{
        const res = yield axios.get(`${URL_DB}list-user?token=${token}`)
        yield put({type: 'SUCCESS_GET_USERS', payload: res.data})
    }catch(e){
        console.log(e.response)
    }
}

export function* watchGet(){
    yield takeEvery('GET_RECORDS', getRecord)
}

export function* watchUpPython(){
    yield takeEvery('UPLOAD_PYTHON', python)
}

export function* watchUpDB(){
    yield takeEvery('UPLOAD_DB', getRecord)
}

export function* watchGetUser(){
    yield takeEvery('GET_USER_LIST', getUsers)
}