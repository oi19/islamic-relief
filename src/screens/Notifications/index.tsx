import {View} from "react-native";
import React,{useMemo} from "react";
import {HandleSignIn,Header} from "../../components";
import {translate} from "../../helpers";
import {Colors, Spacing} from "../../styles";
import { useToken } from "../../hooks";
import { TabOptionType } from "../../@types";
import { notifications } from "../../dummyData";
import {NotificationsList,NotificationTabsView,TabsView} from "../../components";
import { getHeight } from "../../styles/dimensions";

import {styles} from "./styles";


const Notifications = () => {

  const [selectedTab, setSelectedTab] = React.useState<number>(0)
  const isLogged: boolean = useToken() 

    const tabs: TabOptionType[] = useMemo(
    () => [
      {
        name: translate("Common.all"),
        content: <NotificationsList listItems={notifications} />,
      },
      {
        name: translate("Notifications.unread"),
         content: <NotificationsList listItems={notifications} />,
      },
      {
        name: translate("Notifications.read"),
        content: <NotificationsList listItems={notifications} />,

      },
    ],
    [],
  );
  
  return (
    <View style={[styles.rootScreen, isLogged ? styles.notLogged : null]}>
       <Header
            title={translate("Notifications.title")}
            style={{ height:getHeight(120), paddingTop: Spacing.S40}}
            />
      {
        true ?
          <View style={styles.container}>
            <View style={{ backgroundColor: Colors.WHITE, width: '100%', alignItems: 'center' }}>
              {/* <TabsView
                data={tabs}
                buttonStyle={{
                }}
                onSelected={(index) => {
                  console.warn('onSelectedTab')
                  setSelectedTab(index)
                }}
                 /> */}
              
          <NotificationTabsView
                data={tabs}
                buttonType="default"
                customizedContentListStyle={styles.customizedContentListStyle}
                customizedBasedButtonStyle={styles.cutomizedBasedButtonStyle}
                selectedButtonStyle={styles.selectedButtonStyle}
                buttonTextStyle={{
                    color: "PRIMARY",
                    fontSize: "FS18"
                  }}
                onSelected={(index) => {
                  setSelectedTab(index);
                }}
              />
            </View>
             <View style={styles.navigationListContainer}>
              {tabs[selectedTab]?.content}
            </View>
        </View>        
        :
        <HandleSignIn
        title={translate("Notifications.title")}
        icon="emptyNotification"
        message={translate("Notifications.notificationsLoginMessage")}
      />
      }
    
    </View>
  );
};

export default Notifications;