import {create} from 'zustand';
import {createLocationSlice,createCoachAttendacneSlice} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createLocationSlice(set),
  ...createCoachAttendacneSlice(set),
}));
