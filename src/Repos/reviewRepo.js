import axios from "axios";
import {API_ENDPOINT_REVIEWS} from "../Consts/const"

export const addReview = async (review)=>{
    return await axios.post(API_ENDPOINT_REVIEWS,review)
}

export const loadAllReviews = async ()=>{
    return await axios.get(API_ENDPOINT_REVIEWS)
}

export const deleteReview= async (reviewId)=>{
    return await axios.delete(`${API_ENDPOINT_REVIEWS}${reviewId}`)
}