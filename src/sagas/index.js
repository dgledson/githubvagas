import { fork } from 'redux-saga/effects'
import jobsSaga from './jobs'


function* startSagas(...sagas) {
    return function* rootSaga() {
        yield sagas.map(saga => fork(saga))
    }
}

export default startSagas(jobs)