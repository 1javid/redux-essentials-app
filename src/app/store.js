import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../../../redux-essentials-app/src/features/posts/postsSlice'

export default configureStore({
  reducer: {
    posts: postsReducer
  }
})