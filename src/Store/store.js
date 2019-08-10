
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'

import { rootReducer } from './combinedReducers'

export default function initStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware()],
    preloadedState,

  })

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./combinedReducers', () => store.replaceReducer(rootReducer))
  }

  return store
}