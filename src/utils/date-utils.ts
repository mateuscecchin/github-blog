const DAY_MILLISECONDS = 1000 * 60 * 60 * 24;
const HOUR_MILLISECONDS = 1000 * 60 * 60;

export function differenceInDays(date: Date) {
  const currentDate = new Date().getTime();
  const difference = currentDate - date.getTime();

  return Math.floor(difference / DAY_MILLISECONDS);
}

export function differenceInHours(date: Date) {
  const currentDate = new Date().getTime();
  const difference = currentDate - date.getTime();

  return Math.floor(difference / HOUR_MILLISECONDS);
}

export function formatHumanDate(date: Date) {
  const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    dateStyle: "full",
    timeStyle: "long",
  }).format(date);

  return dateFormatted;
}

export function getTimeAgoAndHumanDate(date: Date) {
  const dayFormatted = differenceInDays(date);
  const hourFormatted = differenceInHours(date);
  const humanDate = formatHumanDate(date);

  const isHour = hourFormatted < 24;

  const timeAgo = isHour
    ? getTextHour(hourFormatted)
    : getTextDay(dayFormatted);

  return { timeAgo, humanDate };
}

function getTextHour(hourFormatted: number) {
  if (hourFormatted == 1) {
    return `Há ${hourFormatted} hora`;
  }

  return `Há ${hourFormatted} horas`;
}

function getTextDay(dayFormatted: number) {
  if (dayFormatted == 1) {
    return `Há ${dayFormatted} dia`;
  }

  return `Há ${dayFormatted} dias`;
}
