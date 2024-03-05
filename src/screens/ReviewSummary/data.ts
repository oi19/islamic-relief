import {
  ServiceTypes,
  CreateAppointmentTypes,
  ServicesTypesEnums,
} from "../../@types";
import {bookings} from "../../dummyData";
import {convertTo12HourFormat, getValueFromId, translate} from "../../helpers";

const ServicesName: Record<ServicesTypesEnums, any> = {
  clinic_visit: translate("Home.clinicVisit"),
  home_visit: translate("Home.homeVisit"),
  video_call: translate("Common.videoCall"),
};

export const reviewSummary: any = (
  {
    date,
    time,
    service,
  }: {time: any; date: any; service?: ServiceTypes | undefined},

  {is_myself}: CreateAppointmentTypes,
) => {
  console.log(is_myself, getValueFromId(is_myself, bookings));

  return [
    {
      title: translate("reviewSummary.dateHour"),
      value: `${date} | ${convertTo12HourFormat(time)}`,
      line: false,
    },
    {
      title: translate("reviewSummary.package"),
      value: `${ServicesName[service?.service]}`,
      line: false,
    },

    {
      title: translate("reviewSummary.duration"),
      value: `${service?.duration}`,
      line: false,
    },
    {
      title: translate("completePatientDetails.bookingFor"),
      value: `${getValueFromId(is_myself, bookings)}`,
      line: true,
    },
    {
      title: translate("Common.amount"),
      value: `${service?.price}`,
      line: false,
    },
    {
      title: translate("Common.total"),
      value: `${service?.price}`,
      line: false,
    },
  ];
};
