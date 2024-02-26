import React from "react";
import {Pusher} from "@pusher/pusher-websocket-react-native";

const pusher = Pusher.getInstance();

type PusherProps = {
  onEvent: (event: any) => void;
  channelName: string;
  apiKey: string;
};
export const usePusher = ({apiKey, channelName, onEvent}: PusherProps) => {
  const connect = React.useCallback(async () => {
    try {
      await pusher.init({
        apiKey,
        cluster: "mt1",
        onEvent,
      });

      const connected = await pusher.connect();
      pusher
        .subscribe({
          channelName,
        })
        .catch(error => {
          console.log("Connected failed", error);
        });
      if (connected) {
        console.log("Pusher Connected Successfully ", connected);
      }
    } catch (e) {
      console.log(" error in pusher connect", e);
    }
  }, [apiKey, channelName, onEvent]);

  return {
    connect,
  };
  //   React.useEffect(() => {
  //     connect();
  //   }, [connect]);
};
