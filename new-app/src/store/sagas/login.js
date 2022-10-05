import { call, put, takeEvery } from "redux-saga/effects";
import axios from 'axios'

const BASE_URL = 'http://127.0.0.1:8000/api/auth/'

function* login(action){
    const { payload } = action
    try{
        const res = yield axios.post(`${BASE_URL}login`, payload)
        sessionStorage.setItem('token', res.data?.access_token)
        yield put({type: 'SUCCESS_LOGIN'})
    }catch(e){
        const delay = time => new Promise(resolve => setTimeout(resolve, time))
        const errors = e.response?.data
        yield put({type: 'FAILED_LOGIN', payload: errors})
        yield call(delay, 2000)
        yield put({type: 'REMOVE_ERROR'})
    }
}

function* register(action){
    const { payload } = action
    try{
        yield axios.post(`${BASE_URL}register`, payload)
        yield put({type: 'SUCCESS_REGIST'})
    }catch(e){
        const delay = time => new Promise(resolve => setTimeout(resolve, time))
        const errors = e.response?.data
        yield put({type: 'FAILED_LOGIN', payload: errors})
        yield call(delay, 2000)
        yield put({type: 'REMOVE_ERROR'})
    }
}
function* logout(){
    const token = sessionStorage.getItem('token')
    try{
        yield axios.post(`${BASE_URL}logout?token=${token}`)
        sessionStorage.clear()
        yield put({type: 'LOGOUT_USER'})
    }catch (e) {
        console.log(e.response)
    }
}

function* userProfile(){
    const token = sessionStorage.getItem('token')
    try{
        const res = yield axios.post(`${BASE_URL}me?token=${token}`)
        yield put({type: 'GET_SUCCESS', payload: res.data})
    }catch(e){
        console.log(e.response?.data)
        yield put({type: 'GET_FAILED'})
        yield put({type: 'LOGOUT_USER'})
    }
}

export function* watchLogin(){
    yield takeEvery('LOGIN', login)
}

export function* watchRegist(){
    yield takeEvery('REGISTER', register)
}

export function* watchLogout(){
    yield takeEvery('LOGOUT', logout)
}

export function* watchProfile(){
    yield takeEvery('GET_PROFILE', userProfile)
}