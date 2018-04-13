import { call, put, takeLatest } from "redux-saga/effects"
import Api from "../utils/Api"

function* fetchJobs(action) {
	try {
		put({ type: "JOBS_LOADING" })
		const jobs = yield call(Api.fetchJobs)
		yield put({ type: "JOBS_FETCHED" })
	} catch {
		yield put({ type: "JOBS_FETCHED_FAILED" })
	}
}

function* jobsSaga() {
    yield takeLatest("JOBS_FETCH_REQUESTED", fetchJobs)
}

export default jobsSaga