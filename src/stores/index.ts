import {create} from 'zustand';
import {createLocationSlice,createCoachAttendacneSlice,createManagerFilterSlice, createPlayerPerformanceSlice,createManagerAllocationSlice} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createLocationSlice(set),
  ...createCoachAttendacneSlice(set),
  ...createManagerFilterSlice(set),
  ...createPlayerPerformanceSlice(set),
  ...createManagerAllocationSlice(set)
}));
