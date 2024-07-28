import {create} from 'zustand';
import {createLocationSlice,createCoachAttendacneSlice,createManagerFilterSlice, createPlayerPerformanceSlice,createManagerAllocationSlice,createFieldingSlice,createYearSlice} from './locationSlice';

export const useBoundStore = create(set => ({
  ...createCoachAttendacneSlice(set),
  ...createManagerFilterSlice(set),
  ...createPlayerPerformanceSlice(set),
  ...createManagerAllocationSlice(set),
  ...createFieldingSlice(set),
  ...createYearSlice(set),
  ...createLocationSlice(set)
}));
