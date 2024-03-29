import {all} from 'redux-saga/effects'
import { watchLogin, watchLogout, watchProfile, watchRegist } from './login'
import { watchGet, watchGetUser, watchUpPython } from './record'

export default function* rootSaga(){
    yield all([
        watchLogin(),
        watchRegist(),
        watchLogout(),
        watchProfile(),
        watchGet(),
        watchUpPython(),
        watchGetUser()
    ])
}
