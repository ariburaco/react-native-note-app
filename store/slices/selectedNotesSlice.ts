import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';
import { Note } from './noteSlice';

export interface SelectedNotesState {
  selectedNotes: Note[];
}

const initialState: SelectedNotesState = {
  selectedNotes: [],
};

export const slice = createSlice({
  name: 'selectedNotes',
  initialState,
  reducers: {
    clearSelectedNotes: (state) => {
      state.selectedNotes = [];
    },
    setSelectedNotes: (state, action: PayloadAction<Note>) => {
      const isAlreadySelected = state.selectedNotes.find(
        (note) => note.id === action.payload.id
      );
      if (isAlreadySelected) {
        state.selectedNotes = state.selectedNotes.filter(
          (note) => note.id !== action.payload.id
        );
      } else {
        state.selectedNotes.push(action.payload);
      }
    },
  },
});

export const { setSelectedNotes, clearSelectedNotes } = slice.actions; // Export actions to be used in components
export const selectCurrentNotes = (state: RootState) =>
  state.selectedNotes.selectedNotes; // Export selector for use in components
export default slice.reducer; // Export reducer to be used in store
