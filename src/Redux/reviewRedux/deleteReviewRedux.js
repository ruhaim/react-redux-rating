import { deleteReview } from '../../Repos/reviewRepo';
import { createSlice } from 'redux-starter-kit';
import { toast } from 'react-toastify';
import { loadAllReviewsAction } from './loadAllReviewsRedux';

export const reviewSlice = createSlice({
    slice: 'reviewDelete', // slice is optional, and could be blank ''
    initialState: {isLoading : false, data: {}, error:{}},
    reducers: {
      isLoading: (state, action)  => {return {...state, isLoading:true}},
      success: (state, action)  => {return {...state, isLoading:false, data:action.payload.data}},
      failure: (state, action) => {return {...state, isLoading:false, error:action.payload.data}}
    }
  })

export const deleteReviewAction = (reviewId) => async (dispatch,getStore) => {
  const { isLoading, success, failure } = reviewSlice.actions;
  dispatch(isLoading())
  const toastId = toast("Deleting Review...", { type: 'info', autoClose: false, closeButton: false })
  try{
    const data = await deleteReview(reviewId)
    if(data.status>201){
      throw new Error("Invalid ID");
    }
    dispatch(success(data))
    const prevQueyData = getStore().reviewAllLoad.data.queryData;
    dispatch(loadAllReviewsAction(prevQueyData))
    toast.update(toastId, { render: "Delete Success", type: 'success', autoClose: 2000 });
    return data;


  }catch(error){
    dispatch(failure(error))
    toast.update(toastId, { render: "Save Failed", type: 'error', autoClose: 2000 });

    throw new Error(error)
  }
  

} 