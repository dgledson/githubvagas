const jobsInitialState = {
	jobs: [],
	loading: false,
	error: ""
}

function jobs(state = jobsInitialState, action) {
	switch (action.type) {
        case "JOBS_LOADING":
            return { ...state, loading: true }
        case "JOBS_FETCHED":
            return { ...state, loading: false, error: action.error }
		case "JOBS_FETCHED_FAILED":
			return { ...state, loading: false, error: action.error }
	}
}

export default jobs