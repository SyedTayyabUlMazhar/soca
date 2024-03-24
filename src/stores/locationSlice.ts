interface LocationSlice {}
interface CoachAttendacnZustandSlice {
  coachAttendacnZustand: any | null;
  setCoachAttendacnZustand: (data: any) => void;
  resetCoachAttendacnZustand: () => void;
}
const initialLocationState: LocationSlice = {};
const initialcoachAttendacnZustandState: Partial<CoachAttendacnZustandSlice> = {
  coachAttendacnZustand: {},
};
export const createLocationSlice = (set: any) => ({
  ...initialLocationState,
  reset: () => set(initialLocationState),
});

export const createCoachAttendacneSlice = (set: any) => ({
  ...initialcoachAttendacnZustandState,
  setCoachAttendacnZustand: (data: any) =>
    set(state => ({
      ...state,
      coachAttendacnZustand: data,
    })),
  resetCoachAttendacnZustand: () => set(initialcoachAttendacnZustandState),
});