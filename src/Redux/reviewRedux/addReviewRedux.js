import { toast } from 'react-toastify';
import { createSlice } from 'redux-starter-kit';
import { addReview } from '../../Repos/reviewRepo';
import { loadAllReviewsAction } from './loadAllReviewsRedux';


export const reviewSlice = createSlice({
  slice: 'reviewAdd', // slice is optional, and could be blank ''
  initialState: { isLoading: false, data: {}, error: {} },
  reducers: {
    isLoading: (state, action) => { return { ...state, isLoading: true } },
    success: (state, action) => { return { ...state, isLoading: false, data: action.payload } },
    failure: (state, action) => { return { ...state, isLoading: false, error: action.payload.data } }
  }
})

export const addReviewAction = (review) => async (dispatch, getStore) => {
  const { isLoading, success, failure } = reviewSlice.actions;
  dispatch(isLoading())
  const toastId = toast("Saving Review...", { type: 'info', autoClose: false, closeButton: false })
  try {
    const { data } = await addReview(review)
    dispatch(success(data))
    const prevQueyData = getStore().reviewAllLoad.data.queryData;
    await dispatch(loadAllReviewsAction(prevQueyData))
    toast.update(toastId, { render: "Saved Successfully", type: 'success', autoClose: 2000 });
    return data;
  } catch (error) {
    dispatch(failure(error))
    toast.update(toastId, { render: "Save Failed", type: 'error', autoClose: 2000 });

    throw new Error(error)
  }



} 
