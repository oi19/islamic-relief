import {OnBoardingTypes} from "../../../@types/onboarding-types";
import {translate} from "../../../helpers";

export const onBoarding: OnBoardingTypes[] = [
  {
    photo: "findDoctors",
    title: translate("OnBoarding.findBestDoctor"),
    subTitle: translate("OnBoarding.findBestDoctorMsg"),
  },
  {
    photo: "onlineDoctor",
    title: translate("OnBoarding.onlineConsultation"),
    subTitle: translate("OnBoarding.onlineConsultationMsg"),
  },

  {
    photo: "makeAppointment",
    title: translate("OnBoarding.makeYourAppointment"),
    subTitle: translate("OnBoarding.makeYourAppointmentMsg"),
  },
];
