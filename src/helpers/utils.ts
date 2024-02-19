import {Platform} from "react-native";
import {FilterCondition} from "../@types";
import {DocumentPickerResponse} from "react-native-document-picker";

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

// Define the imageProps interface
interface ImageProps {
  name: string;
  type: string;
  uri: string;
}

export const getValueFromId = (id?: string | number, list?: any[]) => {
  if (list) {
    const element = list?.find((element: any) => element.id === id);
    return `${element ? element.name : ""}`;
  }
};

export const convertObjToFormData = (obj: any): FormData => {
  let data = new FormData();
  for (let key in obj) {
    if (obj[key]) {
      data.append(key, obj[key]);
    }
  }
  return data;
};

export const filterArray = <T>(
  array: T[],
  condition: FilterCondition<T>,
): T[] => array.filter(item => condition(item));

export const formatImage = (
  images?: DocumentPickerResponse[] | null,
): DocumentPickerResponse[] => {
  let photos: DocumentPickerResponse[];
  if (!images) {
    return []; // Return an empty array if images is null or undefined
  }

  photos = images.map(image => {
    const name = image.fileCopyUri
      ? image.fileCopyUri.split("/").pop() || ""
      : "";
    const uri = isIos
      ? image.fileCopyUri
        ? image.fileCopyUri.replace("file://", "")
        : ""
      : image.fileCopyUri;

    return {
      ...image,
      name,
      type: "image/jpeg",
      uri: uri ?? "",
    };
  });

  return photos;
};

export const combineErrorMessages = (errors: {[key: string]: string[]}) => {
  let combinedMessage = "";
  Object.keys(errors).forEach(field => {
    combinedMessage += `${errors[field].join("\n")}\n `;
  });
  return combinedMessage.trim();
};

export function convertArrayToObject(daysArray: any[]): Record<number, any> {
  return daysArray.reduce((acc, day) => {
    acc[day.day_index] = {...day};
    return acc;
  }, {} as Record<number, any>); // Explicitly define the index type
}

export const areObjectsEqual = (obj1: any, obj2: any): boolean => {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export function handlePagination<T>(
  oldList: Array<T>,
  newList: Array<T>,
  current_page: number,
  reset?: boolean,
) {
  if (current_page === 1 || reset) {
    return newList;
  } else {
    return oldList.concat(newList);
  }
}

// export function formatTimeAgo(currentDate: Date): string {
//   const timeDifference = new Date(Date.now()).getTime() - currentDate.getTime();

//   const seconds = Math.floor(timeDifference / 1000);
//   const minutes = Math.floor(seconds / 60);
//   const hours = Math.floor(minutes / 60);
//   const days = Math.floor(hours / 24);
//   const weeks = Math.floor(days / 7);

//   if (weeks > 0) {
//     return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
//   } else if (days > 0) {
//     return `${days} day${days > 1 ? "s" : ""} ago`;
//   } else if (hours > 0) {
//     return `${hours} hour${hours > 1 ? "s" : ""} ago`;
//   } else if (minutes > 0) {
//     return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
//   } else {
//     return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
//   }
// }

// export function formateDate(date: Date): string {
//   // Get the year, month, and day components
//   const year = date.getFullYear();
//   const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
//   const day = ("0" + date.getDate()).slice(-2);

//   // Format the date as "YYYY-MM-DD"
//   const formattedDate = year + "-" + month + "-" + day;

//   return formattedDate;
// }
