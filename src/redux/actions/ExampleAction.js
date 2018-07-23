import { TEST_ACTION } from "./types";
import log from '../../../log';

export const setExampleText = text => {
    return {
        type: TEST_ACTION,              // The event name the reducer(listener) will pick up and do something with the payload
        payload: text                   // the data that needs to be updated in the state
    }
}


// Using Redux Thunk to do Async calls in Redux because redux is syncranous 

export const dispatchActionExample = text => dispatch => {
    log(text);

    // Fetch down here with api's
    dispatch(setExampleText(text));
}
/*Same as above */
// export const dispatchActionExample = text => {
//     return dispatch => {

//     }
// }

export const asyncDispatchActionExample = text => async dispatch => {
    log(text)

    // Async Stuff here like API Calls
    // await fetch.GET()
    dispatch(setExampleText(text));
}

/*Same as above */
// export const asyncDispatchActionExample = text => {
//     return async dispatch => {

//     }
// }