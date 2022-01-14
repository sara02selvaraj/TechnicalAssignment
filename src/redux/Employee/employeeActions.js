import Axios from 'axios'

export const GET_ALL_EMP_REQUEST = 'GET_ALL_EMP_REQUEST'
export const GET_ALL_EMP_SUCCESS = 'GET_ALL_EMP_SUCCESS'
export const GET_ALL_EMP_FAILURE = 'GET_ALL_EMP_FAILURE'

export const getAllEmp = () => {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_ALL_EMP_REQUEST })
            let dataURL = `http://localhost:5000/api/employees/all`
            let response = await Axios.get(dataURL)
            dispatch({ type: GET_ALL_EMP_SUCCESS, payload: response.data })

        }
        catch (error) {
            console.error(error)
            dispatch({ type: GET_ALL_EMP_FAILURE, payload: error })
        }
    }
}