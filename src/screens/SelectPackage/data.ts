import {SelectedCheckItemType} from "../../@types";
import {translate} from "../../helpers";

export const packages: SelectedCheckItemType[] = [
  {
    id: 1,
    icon: "video",
    name: translate("Common.videoCall"),
    desc: `${translate("Common.videoCall")} ${translate("Common.withDoctor")}`,
    cost: 500,
    duration: 45,
  },
  {
    id: 2,
    icon: "phone",
    name: translate("Common.voiceCall"),
    desc: `${translate("Common.voiceCall")} ${translate("Common.withDoctor")}`,
    cost: 500,
    duration: 45,
  },
  {
    id: 3,
    icon: "messages",
    name: translate("Common.messaging"),
    desc: `${translate("Common.messaging")} ${translate("Common.withDoctor")}`,
    cost: 500,
    duration: 45,
  },
  {
    id: 4,
    icon: "profile",
    name: translate("Common.inPerson"),
    desc: `${translate("Common.inPerson")} ${translate("Common.withDoctor")}`,

    cost: 500,
    duration: 45,
  },
];
