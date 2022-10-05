import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

const URL_DB = 'http://127.0.0.1:8000/api/auth/record/'
const URL_PY = 'http://127.0.0.1:5000/api/uploader'

function* getRecord(){
    const token = sessionStorage.getItem('token')
    try {
        const res = yield axios.get(`${URL_DB}get-all?token=${token}`)
        yield put({type: 'GET_RECORD_SUCCESS', payload: res.data})
    }catch (e) {
        console.log(e.response)
    }
}

function* python(action){
    const {payload} = action
    console.log(payload)
    try{
        const res = yield axios.post(URL_PY, payload)
        yield put({type: 'PYTHON_SUCCESS', payload: res.data})
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