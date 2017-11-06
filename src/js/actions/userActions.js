import axios from "axios";
// CSRF as axios
const client = axios.create({
    xsrfHeaderName: "X-CSRF-Token",
    withCredentials: true
});

export function fetchUsers() {
    return function(dispatch) {
        client.get("api/user.json")
            .then((response) => {
                dispatch({
                    type: "FETCH_USERS_FULFILLED",
                    payload: response.data
                });
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_USERS_REJECTED",
                    payload: err
                });
            })
    }
}