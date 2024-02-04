export const getValueFromId = (id?: string | number, list?: any[]) => {
  const element = list?.find((element: any) => element.id === id);
  return `${element ? element.name : ""}`;
};

export function formatTimeAgo(currentDate: Date): string {
  const timeDifference = new Date(Date.now()).getTime() - currentDate.getTime();

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
}

export function formateDate(date: Date): string {
  // Get the year, month, and day components
  const year = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  const day = ("0" + date.getDate()).slice(-2);

  // Format the date as "YYYY-MM-DD"
  const formattedDate = year + "-" + month + "-" + day;

  return formattedDate;
}
