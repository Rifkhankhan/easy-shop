import * as UploadApi from '../api/uploadRequest'
import swal from 'sweetalert'

export const uploadPost = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newPost = await UploadApi.uploadPost(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newPost.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadFeedback = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newFeedback = await UploadApi.uploadFeedback(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newFeedback.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadDonation = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newDonation = await UploadApi.uploadDonation(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newDonation.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadQuestion = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newQuestion = await UploadApi.uploadQuestion(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newQuestion.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadCommentPost = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newComment = await UploadApi.uploadCommentPost(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newComment.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadCommentTopicPost = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newTopicComment = await UploadApi.uploadCommentTopicPost(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newTopicComment.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
     window.location.reload(true)

}

export const addEducation = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newEducation = await UploadApi.addEducation(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newEducation.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const addSkill = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newSkill = await UploadApi.addSkill(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newSkill.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const addInterest = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newInterest = await UploadApi.addInterest(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newInterest.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const changeUserPassword = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newPassword = await UploadApi.changeUserPassword(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newPassword.data})
    } catch(e){
        if (e.response.status === 400) {
            swal("Incorrect Password!", "Check your old password again!", "error")
          }
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadCommunityPost = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newPost = await UploadApi.uploadCommunityPost(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newPost.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const forgotPassword = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        console.log(data)
        const forgot = await UploadApi.forgotPassword(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: forgot.data})
        swal("Email sent!", "Please check your email address!", "success");

    } catch(e){
        if (e.response.status === 404) {
            swal("User does not exist!", "Check your email again!", "error")
        } else if (e.response.status === 500) {
            swal("Something went wrong!", "Check your network connection!", "error")
        }
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const newInviteRequest = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newInvite = await UploadApi.newInviteRequest(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newInvite.data})
    } catch(e){
        if (e.response.status === 404) {
            swal("User does not exist!", "Check your email again!", "error")
        } else if (e.response.status === 500) {
            swal("Something went wrong!", "Check your network connection!", "error")
        }
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const resetPassword = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newPassword = await UploadApi.resetPassword(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newPassword.data})
    } catch(e){
        if (e.response.status === 500) {
            swal("Something went wrong!", "Your token may expired!", "error")
        } else if (e.response.status === 400) {
            swal("Invalid Token!", "Your token may expired!", "error")
        } else if (e.response.status === 201) {
            swal("Password Changed!", "Login using new password!", "success")
        }
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadCommunityCommentPost = (id, data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newComment = await UploadApi.uploadCommunityCommentPost(id, data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newComment.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}

export const uploadBlog = (data) => async(dispatch) => {
    dispatch({type: 'UPLOAD_START'})

    try{
        const newPost = await UploadApi.uploadBlog(data);
        dispatch({type: 'UPLOAD_SUCCESS', data: newPost.data})
    } catch(e){
        console.log(e);
        dispatch({type: 'UPLOAD_FAIL'})
    }
}
