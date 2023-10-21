import * as UploadApi from '../api/CreateCommunity'
import swal from 'sweetalert'

export const createCommunity = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newPost = await UploadApi.createCommunity(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newPost.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const newRequest = (id, data) => async(dispatch)=>{
    try {
    dispatch({type: "FOLLOW_USER"})
    UploadApi.newRequest(id, data)
    } catch(e) {
        if (e.response.status === 403) {
            swal("You Already Requested to join!", "Wait until admin approve this request!", "error")
          }
    }
}

export const inviteFriend = (id, comId, invitedId) => async(dispatch)=>{
    try {
    dispatch({type: "FOLLOW_USER"})
    UploadApi.inviteFriend(id,comId, invitedId)
    } catch(e) {
        if (e.response.status === 403) {
            swal("You Already Invited to join!", "Wait until user approve this request!", "error")
          }
    }
}

export const cancelInviteFriend = (id, comId) => async(dispatch)=>{
    try {
    dispatch({type: "FOLLOW_USER"})
    UploadApi.cancelInviteFriend(id,comId)
    } catch(e) {
        if (e.response.status === 403) {
            swal("You Already Invited to join!", "Wait until user approve this request!", "error")
          }
    }
}

export const cancelJoinRequest = (id, comId) => async(dispatch)=>{
    try {
    dispatch({type: "FOLLOW_USER"})
    UploadApi.cancelJoinRequest(id,comId)
    } catch(e) {
        if (e.response.status === 403) {
            swal("You Already Invited to join!", "Wait until user approve this request!", "error")
          }
    }
}

