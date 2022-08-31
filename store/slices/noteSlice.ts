import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'store';

export interface Note {
  id: string;
  title: string;
  content: string;
}

export interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: [],
};

export const slice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload;
      state.notes.push(note);
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.notes = state.notes.filter((note) => note.id !== id);
    },
    deleteSelectedNotes: (state, action: PayloadAction<Note[]>) => {
      const notes = action.payload;
      const notesIds = notes.map((note) => note.id);
      state.notes = state.notes.filter((note) => !notesIds.includes(note.id));
    },
    updateNote: (state, action: PayloadAction<Note>) => {
      const note = action.payload;
      const index = state.notes.findIndex((n) => n.id === note.id);
      state.notes[index] = note;
    },
  },
});

export const { addNote, deleteNote, updateNote, deleteSelectedNotes } =
  slice.actions; // Export actions to be used in components
export const selectNotes = (state: RootState) => state.notes.notes; // Export selector for use in components

export default slice.reducer; // Export reducer to be used in store
