import {SelectedCheckItemType} from "../../@types";
import {translate} from "../../helpers";

export const paymentMethods: SelectedCheckItemType[] = [
  // {
  //   id: 1,
  //   title: translate("paymentMethods.creditDebitCard"),
  //   icon: "credit",
  //   name: translate("paymentMethods.creditDebitCard"),
  // },
  {
    id: 2,
    title: translate("paymentMethods.morePaymentOptions"),
    icon: "cash",
    name: translate("paymentMethods.cash"),
  },
  // {
  //   id: 2,
  //   title: translate("paymentMethods.morePaymentOptions"),
  //   icon: "cash",
  //   name: translate("paymentMethods.morePaymentOptions"),
  // },
];
