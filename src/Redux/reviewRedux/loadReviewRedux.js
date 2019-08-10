import { createActions, createReducer } from 'reduxsauce';
import { loadAllReviews } from '../../Repos/reviewRepo';
import { createSlice } from 'redux-starter-kit';

const { Types, Creators } = createActions({
    success: ['data'],
    failure: ['error'],
    isLoading: null
  },
   {prefix : "LOAD_REVIEW"}) 

Creators.load = (review) => (dispatch) => {
    loadAllReviews(review)

} 

export const reviewSlice = createSlice({
    slice: 'reviewLoad', // slice is optional, and could be blank ''
    initialState: {isLoading : false, data: {}, error:{}},
    reducers: {
      isLoading: (state, action)  => {return {...state, isLoading:true}},
      success: (state, action)  => {return {...state, isLoading:false, data:action.payload.data}},
      failure: (state, action) => {return {...state, isLoading:false, error:action.payload.data}}
    }
  })

export const loadReviewAction = (review) => (dispatch) => {
    dispatch(reviewSlice.actions.isLoading())
    loadAllReviews(review)

} 