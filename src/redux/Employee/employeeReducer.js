import * as employeeActions from './employeeActions'

export const employeeFeatureKey = 'employee'

let initialstate = {
    loading: false,
    employees: [],
    errorMessage: ''
}

export const reducer = (state = initialstate, action) => {
    let { type, payload } = action
    switch (type) {
        case employeeActions.GET_ALL_EMP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case employeeActions.GET_ALL_EMP_SUCCESS:
            return {
                ...state,
                loading: false,
                employees: payload
            }
        case employeeActions.GET_ALL_EMP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: payload
            }
        default:
            return state
    }
}