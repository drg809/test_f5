import { LocalStorageTypes, Image } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Image[] = [];

export const imagesSlice = createSlice({
  name: 'images',
  initialState: getLocalStorage(LocalStorageTypes.IMAGES) ? JSON.parse(getLocalStorage(LocalStorageTypes.IMAGES) as string) : initialState,
  reducers: {
    addImage: (state, action) => {
      const current = [...getLocalStorage(LocalStorageTypes.IMAGES) ? JSON.parse(getLocalStorage(LocalStorageTypes.IMAGES) as string) : initialState, action.payload]
      setLocalStorage(LocalStorageTypes.IMAGES, current);
      return action.payload;
    }
  }
});

export const { addImage } = imagesSlice.actions;

export default imagesSlice.reducer;