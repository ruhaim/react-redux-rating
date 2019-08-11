import {combineReducers} from 'redux'
import {reviewSlice as addReviewRedux} from '../Redux/reviewRedux/addReviewRedux'
import {reviewSlice as deleteReviewRedux} from '../Redux/reviewRedux/deleteReviewRedux'
import {reviewSlice as loadReviewRedux} from '../Redux/reviewRedux/loadAllReviewsRedux'

export const rootReducer = combineReducers({
    reviewAdd: addReviewRedux.reducer,
    reviewDelete: deleteReviewRedux.reducer,
    reviewAllLoad: loadReviewRedux.reducer,
 
  })