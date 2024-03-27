import {create} from 'zustand';
import {createLocationSlice,createCoachAttendacneSlice,createManagerFilterSlice, createPlayerPerformanceSlice} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createLocationSlice(set),
  ...createCoachAttendacneSlice(set),
  ...createManagerFilterSlice(set),
  ...createPlayerPerformanceSlice(set),
}));
