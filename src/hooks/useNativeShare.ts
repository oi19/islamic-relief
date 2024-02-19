import {useState} from "react";
import {Share, ShareContent, ShareOptions} from "react-native";

type ShareError = {
  message: string;
};

const useNativeShare = () => {
  const [error, setError] = useState<ShareError | null>(null);

  const shareContent = async (content: ShareContent) => {
    try {
      const result = await Share.share(content);
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          console.log("Shared with activity type:", result.activityType);
        } else {
          console.log("Shared");
        }
      } else if (result.action === Share.dismissedAction) {
        console.log("Dismissed");
      }
    } catch (error: any) {
      console.error("Error sharing:", error.message);
      setError({message: error.message});
    }
  };

  return {shareContent, error};
};

export default useNativeShare;
