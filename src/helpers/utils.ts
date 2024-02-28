import {PermissionsAndroid, Platform} from "react-native";
import {FilterCondition} from "../@types";
import {DocumentPickerResponse} from "react-native-document-picker";

export const isIos = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

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

export const formateImage = (image?: any) => {
  let photo;

  if (image) {
    photo = {
      name: image?.split("/")[image?.split("/").length - 1],
      type: "image/jpeg",
      uri: isIos ? image?.replace("file://", "") : image,
    };
  }
  return photo;
};

export const formatImages = (images?: any[] | null) => {
  let photos: any[];
  if (!images) {
    return []; // Return an empty array if images is null or undefined
  }

  photos = images.map(image => {
    const name = image?.split("/")[image?.split("/").length - 1];
    const uri = isIos ? image?.replace("file://", "") : image;

    return {
      name,
      type: "image/jpeg",
      uri,
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

export async function requestStoragePermission() {
  try {
    const writeGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "This App needs access to your device storage",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );

    const readGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      {
        title: "Storage Permission",
        message: "This App needs access to your device storage",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      },
    );

    if (
      writeGranted === PermissionsAndroid.RESULTS.GRANTED &&
      readGranted === PermissionsAndroid.RESULTS.GRANTED
    ) {
      console.log("Storage permission granted");
    } else {
      console.log("Storage permission denied");
    }
  } catch (error) {
    console.warn(error);
  }
}
