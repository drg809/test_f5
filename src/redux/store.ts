import { Image } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { imagesSlice } from './states';

export interface AppStore {
  images: Image[];
}

export default configureStore<AppStore>({
  reducer: {
    images: imagesSlice.reducer
  }
});
