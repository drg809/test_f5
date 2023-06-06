import { LocalStorageTypes, Image } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Image[] = [];

export const imagesSlice = createSlice({
  name: 'images',
  initialState: getLocalStorage(LocalStorageTypes.IMAGES) ? JSON.parse(getLocalStorage(LocalStorageTypes.IMAGES) as string) : initialState,
  reducers: {
    addImage: (state, action) => {
      setLocalStorage(LocalStorageTypes.IMAGES, state);
      return action.payload;
    }
  }
});

export const { addImage } = imagesSlice.actions;

export default imagesSlice.reducer;