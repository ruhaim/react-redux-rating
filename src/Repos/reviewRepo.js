import axios from "axios";
import {API_ENDPOINT_REVIEWS} from "../Consts/const"
import '../Util/axiosInterceptor';

export const addReview = async (review)=>{
    return await axios.post(API_ENDPOINT_REVIEWS,review)
}

export const loadAllReviews = async ({_page=0, _limit=10})=>{
    return await axios.get(API_ENDPOINT_REVIEWS, {
        params:{_page, _limit}
    })
}

export const deleteReview= async (reviewId)=>{
    return await axios.delete(`${API_ENDPOINT_REVIEWS}${reviewId}`)
}