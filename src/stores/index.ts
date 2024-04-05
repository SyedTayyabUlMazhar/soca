import {create} from 'zustand';
import {createLocationSlice,createCoachAttendacneSlice,createManagerFilterSlice, createPlayerPerformanceSlice,createManagerAllocationSlice,createFieldingSlice} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createLocationSlice(set),
  ...createCoachAttendacneSlice(set),
  ...createManagerFilterSlice(set),
  ...createPlayerPerformanceSlice(set),
  ...createManagerAllocationSlice(set),
  ...createFieldingSlice(set)
}));
