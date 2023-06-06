import { LocalStorageTypes, Image } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice, current } from '@reduxjs/toolkit';

const initialState: Image[] = [];

export const imagesSlice = createSlice({
  name: 'images',
  initialState: getLocalStorage(LocalStorageTypes.IMAGES) ? JSON.parse(getLocalStorage(LocalStorageTypes.IMAGES) as string) : initialState,
  reducers: {
    addImage: (state, action) => {
      const images = [...getLocalStorage(LocalStorageTypes.IMAGES) ? JSON.parse(getLocalStorage(LocalStorageTypes.IMAGES) as string) : initialState, action.payload]
      setLocalStorage(LocalStorageTypes.IMAGES, images);
      return images;
    },
    removeImage: (state, action) => {
      const filteredState = current(state).filter((p: Image) => p.id !== action.payload.id);
      setLocalStorage(LocalStorageTypes.IMAGES, filteredState);
      return filteredState;
    },
    editImage: (state, action) => {
      const filteredState = current(state).filter((p: Image) => p.id !== action.payload.id);
      const stateToEdit = current(state).find((p: Image) => p.id === action.payload.id);
      const images = [...filteredState, <Image>{id: stateToEdit.id, title: action.payload.title, image: stateToEdit.image}];
      setLocalStorage(LocalStorageTypes.IMAGES, filteredState);
      return images;
    }
  }
});

export const { addImage, removeImage, editImage } = imagesSlice.actions;

export default imagesSlice.reducer;