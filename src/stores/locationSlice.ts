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

interface ManagerAllocationSlice {
  managerAllocationZustand: any | null;
  setManagerAllocationZustand: (data: any) => void;
  resetManagerAllocationZustand: () => void;
}
interface FieldingZustandSlice {
  fieldingZustand: any | null;
  setFieldingZustand: (data: any) => void;
  resetFieldingZustand: () => void;
}

interface YearZustandSlice {
  YearZustand: any | null;
  setYearZustand: (data: any) => void;
  resetYearZustand: () => void;
}

interface LocationZustandSlice {
  locationZustand: any | null;
  setLocationZustand: (data: any) => void;
  resetLocationZustand: () => void;
}

interface EmailZustandSlice {
  emailZustand: any | null;
  setEmailZustand: (data: any) => void;
  resetEmailZustand: () => void;
}

interface AttendanceZustandSlice {
  attendanceZustand: any | null;
  setAttendanceZustand: (data: any) => void;
  resetAttendanceZustand: () => void;
}
const initialcoachAttendacnZustandState: Partial<CoachAttendacnZustandSlice> = {
  coachAttendacnZustand: {},
};
const initialManagerFilterZustandState: Partial<ManagerFilterZustandSlice> = {
  managerFilterZustand: null,
};

const initialPlayerPerformanceZustandState: Partial<PlayerPerfomanceZustandSlice> = {
  playerPerformanceID: {},
};

const initialManagerAllocationState: Partial<ManagerAllocationSlice> = {
  managerAllocationZustand: {},
};

const initialFieldingState: Partial<FieldingZustandSlice> = {
  fieldingZustand: {},
};

const initialYearState: Partial<YearZustandSlice> = {
  YearZustand: new Date().getFullYear(),
};
const initialLocationState: Partial<LocationZustandSlice> = {
  locationZustand: null,
};

const initialEmailState: Partial<EmailZustandSlice> = {
  emailZustand: null,
}

const initialAttendanceState: Partial<AttendanceZustandSlice> = {
  attendanceZustand: null,
}




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


export const createManagerAllocationSlice = (set: any) => ({
  ...initialManagerAllocationState,
  setManagerAllocationZustand: (data: any) =>
    set(state => ({
      ...state,
      managerAllocationZustand: data,
    })),
    resetManagerAllocationZustand: () => set(initialManagerAllocationState),
});


export const createFieldingSlice = (set: any) => ({
  ...initialFieldingState,
  setFieldingZustand: (data: any) =>
    set(state => ({
      ...state,
      fieldingZustand: data,
    })),
    resetFieldingZustand: () => set(initialFieldingState),
});

export const createYearSlice = (set: any) => ({
  ...initialYearState,
  setYearZustand: (data: any) =>
    set(state => ({
      ...state,
      YearZustand: data,
    })),
    resetYearZustand: () => set(initialYearState),
});

export const createLocationSlice = (set: any) => ({
  ...initialLocationState,
  setLocationZustand: (data: any) =>
    set(state => ({
      ...state,
      locationZustand: data,
    })),
  resetLocationZustand: () => set(initialLocationState),
});


export const createEmailSlice = (set: any) => ({
  ...initialEmailState,
  setEmailZustand: (data: any) =>
    set(state => ({
      ...state,
      emailZustand: data,
    })),
  resetEmailZustand: () => set(initialEmailState),
});

export const createAttendanceSlice = (set: any) => ({
  ...initialAttendanceState,
  setAttenadanceZustand: (data: any) =>
    set(state => ({
      ...state,
      attendanceZustand: data,
    })),
  resetAttendanceZustand: () => set(initialAttendanceState),
});

