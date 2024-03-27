interface LocationSlice {}
interface CoachAttendacnZustandSlice {
  coachAttendacnZustand: any | null;
  setCoachAttendacnZustand: (data: any) => void;
  resetCoachAttendacnZustand: () => void;
}
interface PlayerPerfomanceZustandSlice {
  playerPerformanceID: any | null;
  setPlayerPerformanceIDZustand: (data: any) => void;
  resetPlayerPerformanceIDZustand: () => void;
}
interface ManagerFilterZustandSlice {
  managerFilterZustand: any | null;
  setManagerFilterZustand: (data: any) => void;
  resetManagerFilterZustand: () => void;
}
const initialLocationState: LocationSlice = {};
const initialcoachAttendacnZustandState: Partial<CoachAttendacnZustandSlice> = {
  coachAttendacnZustand: {},
};
const initialManagerFilterZustandState: Partial<ManagerFilterZustandSlice> = {
  managerFilterZustand: {},
};

const initialPlayerPerformanceZustandState: Partial<PlayerPerfomanceZustandSlice> = {
  playerPerformanceID: {},
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

export const createManagerFilterSlice = (set: any) => ({
  ...initialManagerFilterZustandState,
  setManagerFilterZustand: (data: any) =>
    set(state => ({
      ...state,
      managerFilterZustand: data,
    })),
    resetManagerFilterZustand: () => set(initialManagerFilterZustandState),
});




export const createPlayerPerformanceSlice = (set: any) => ({
  ...initialPlayerPerformanceZustandState,
  setPlayerPerformanceIDZustand: (data: any) =>
    set(state => ({
      ...state,
      playerPerformanceID: data,
    })),
    resetPlayerPerformanceIDZustand: () => set(initialPlayerPerformanceZustandState),
});


