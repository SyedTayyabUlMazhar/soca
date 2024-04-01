import moment from 'moment';

export const DATE_FORMATS = {
  DETAILED_DATE: 'dddd',
  TIME: 'HH:MM:SS a',
  SUBSCRIPTION_FORMAT: 'hh:mm a dddd, MMMM Do YYYY',
  DATE: 'DD-MM-YYYY',
  DATE_FORMAT: 'DD-MMM-yyyy',
  TIME_DATE_FORMAT: 'hh:mm A, DD-MMM-yyyy',
  NORMAL_FORMAT: 'DD-MM-YYYY',
  TIME_24: 'hh:mm a',
  DATE_TIME: 'YYYY-MM-DD HH:mm:ss',
  BOOKING_DATE: 'dddd DD/MM/yy',
  NOTIFICATION_TIME: 'HH:mm:ss',
  ARRIVAL_TIME: 'h:mm A',
  SCHEDULE_RIDE: "DD MMMM YYYY h:mm A",
  REVERSE_FORMAT:"MM/DD/YY"
};

export const TIME_ENUM = {
  HOUR: 0,
  MIN: 1,
  SEC: 2,
};

export const getCreatedAt = date => {
  if (date) {
    return moment(date).format('DD MMM yyyy hh:mm:ss.SSS');
  }
  return moment().format('DD MMM yyyy hh:mm:ss.SSS');
};
export const convertMinutesToHoursAndMinutes = (minutes) => {
  if (minutes < 60) {
    return `${minutes} mins`;
  }

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  if (mins === 0) {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
  }

  return `${hours} ${hours === 1 ? 'hour' : 'hours'} ${mins} ${mins === 1 ? 'min' : 'mins'}`;
};
export const GetDifferenceTime = difference => {
  if (!difference) {
    return 'N/A';
  }
  const currentTime = moment();
  const futureTime = moment(difference);
  const timeDiff = moment.duration(futureTime.diff(currentTime));
  const hours = timeDiff.hours();
  const minutes = timeDiff.minutes();
  let timeDiffStr = '';

  if (hours > 0) {
    timeDiffStr += `${hours} hour`;
  }

  if (minutes > 0) {
    timeDiffStr += `${timeDiffStr.length > 0 ? ', ' : ''}${minutes} min
    `;
  }

  return timeDiffStr;
};

export const getFormatedDateTime = (dateTime, format) => {
  if (!dateTime) {
    return 'N/A';
  }
  const specificTime = moment(dateTime);
  const formattedTime = specificTime.format(format);
  return formattedTime;
};

export const GetTimeDifference = (difference, time = TIME_ENUM.HOUR) => {
  if (!difference) {
    return 'N/A';
  }
  const currentTime = moment();
  const futureTime = moment(difference);
  const timeDiff = moment.duration(currentTime.diff(futureTime));
  if (time === TIME_ENUM.HOUR) {
    return timeDiff.hours();
  } else if (time === TIME_ENUM.MIN) {
    return timeDiff.minutes();
  } else if (time === TIME_ENUM.SEC) {
    return timeDiff.seconds();
  } else {
    return 'N/A';
  }
};
