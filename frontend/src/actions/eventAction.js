import {EVENT_LIST_REQUEST,EVENT_LIST_SUCCESS,EVENT_LIST_FAIL} from "../constants/eventConstant";
import axios from "axios";

export const listEvents = () => async (dispatch) => {
    try {
        dispatch({type: EVENT_LIST_REQUEST})

        const {data} = await axios.get("/api/events");
        dispatch({type: EVENT_LIST_SUCCESS, payload: data})

    }
    catch (e) {
        dispatch({type: EVENT_LIST_FAIL, payload: e.response && e.response.data.message ? e.response.data.message : e.message })
    }
}
