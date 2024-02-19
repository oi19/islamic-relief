import {translate} from ".";

export function getDateDifference(date?: Date): string | null {
  // Current date and time

  let dateDiff = "";
  const now: Date = new Date();

  if (date) {
    // Future date and time you provided
    const futureDate: Date = new Date(date);

    // Calculate the difference between the two dates in milliseconds
    const differenceInMillis: number = futureDate.getTime() - now.getTime();

    // Calculate milliseconds in a day, month, and year
    const msInDay: number = 1000 * 60 * 60 * 24;
    const msInMonth: number = msInDay * 30; // Approximating a month as 30 days
    const msInYear: number = msInDay * 365; // Approximating a year as 365 days

    // Calculate the difference in years, months, and days
    const years: number = Math.floor(differenceInMillis / msInYear);
    const months: number = Math.floor(
      (differenceInMillis % msInYear) / msInMonth,
    );
    const days: number = Math.floor(
      ((differenceInMillis % msInYear) % msInMonth) / msInDay,
    );

    if (years !== 0) {
      dateDiff = `${years} ${translate("Common.years")} `;
    }

    if (months !== 0) {
      dateDiff += `${months} ${translate("Common.months")} `;
    }

    if (days !== 0) {
      dateDiff += `${days} ${translate("Common.days")}`;
    }

    return dateDiff;
  }
  return dateDiff;
}

export function convertTo12HourFormat(time24?: string): string {
  if (time24) {
    const [hours, minutes] = time24.split(":").map(Number);

    let hours12 = hours % 12 || 12;
    const amPm = hours >= 12 ? "PM" : "AM";

    const time12 = `${hours12}:${minutes.toString().padStart(2, "0")} ${amPm}`;

    return time12;
  }
  return "";
}

export function convertTimeFormat(time24?: string): string {
  if (time24) {
    const [hours, minutes] = time24.split(":").map(Number);

    const time = `${hours}:${minutes.toString().padStart(2, "0")} `;

    return time;
  }
  return "";
}

export function formattedTime(date?: Date): string {
  if (date) {
    const dateTime = new Date(date);

    // Get hours, minutes, and seconds
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    const time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    return time;
  }
  return "";
}

export function formatTimeAgo(currentDate?: Date): string {
  if (!currentDate) {
    return "";
  }
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

export function addMinutesToTime(time: string, addMin: number) {
  const [hours, minutes] = time.split(":").map(Number);

  const initialTime = new Date();
  initialTime.setHours(hours, minutes, 0, 0); // Set the hours and minutes

  const newTime = new Date(initialTime.getTime() + addMin * 60000); // 45 minutes in milliseconds

  // Extracting the updated hours and minutes
  const updatedHours = newTime.getHours();
  const updatedMinutes = newTime.getMinutes();

  // Formatting the result
  const formattedNewTime = `${updatedHours
    .toString()
    .padStart(2, "0")}:${updatedMinutes.toString().padStart(2, "0")}`;

  return formattedNewTime;
}
