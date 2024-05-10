import React from "react";
import {SvgProps} from "react-native-svg";
import ActiveStar from "./activeStar";
import InactiveStar from "./inactiveStar";
import Camera from "./camera";
import Checked from "./checked";
import UnChecked from "./unchecked";
import CheckEmail from "./checkEmail";
import Clock from "./clock";
import Arrow from "./arrow";
import Minus from "./minus";
import HidePassword from "./hidePassword";
import ShowPassword from "./showPassword";
import Home from "./home";

import Search from "./search";
import Settings from "./settings";

import Plus from "./plus";

import Phone from "./phone";
import Edit from "./edit";
import Logout from "./logout";
import NotFound from "./notFound";
import Notifications from "./notifications";

import Remove from "./remove";
import Gender from "./gender";
import Close from "./close";
import Send from "./send";
import Logo from "./logo";
import Menu from "./menu";
import Slug from "./slug";
import FindDoctors from "./findDoctors";
import OnlineDoctor from "./onlineDoctor";
import MakeAppointment from "./makeAppoiment";
import Location from "./location";
import Reset from "./reset";
import Filter from "./filter";
import Chat from "./chat";
import Document from "./document";
import User from "./user";
import Circles from "./circles";
import Prescription from "./prescription";
import Wallet from "./wallet";
import Video from "./video";
import Favorite from "./favorite";
import Messages from "./messages";
import Patients from "./patients";
import Review from "./review";
import Bag from "./bag";
import Warning from "./warning";
import Google from "./google";
import Facebook from "./facebook";
import Apple from "./apple";
import Error from "./error";
import SuccessImage from "./sucessImage";
import Upload from "./upload";
import BigChat from "./bigChat";
import BigDocument from "./BigDocument";
import Cash from "./cash";
import Credit from "./credit";
import ContactSupport from "./contactSupport";
import Delete from "./delete";
import CaLender from "./calender";
import BigFavorite from "./bigFavourite";
import DoubleArrow from "./doubleArrow";
import CloseCall from "./closeCall";
import Microphone from "./microphone";
import Change from "./change";
import Volume from "./volume";
import EmptyNotification from "./emptyNotification";
import Share from "./share";
import FaceID from "./faceID";
import SuccessSign from "./successSign";

export type IconsName =
  | "remove"
  | "gender"
  | "close"
  | "send"
  | "settings"
  | "search"
  | "profile"
  | "phone"
  | "edit"
  | "notifications"
  | "logout"
  | "notFound"
  | "home"
  | "activeStar"
  | "header"
  | "arrow"
  | "camera"
  | "apple"
  | "checked"
  | "checkEmail"
  | "clock"
  | "showPassword"
  | "minus"
  | "hidePassword"
  | "inactiveStar"
  | "unchecked"
  | "email"
  | "logo"
  | "menu"
  | "plus"
  | "slug"
  | "findDoctors"
  | "onlineDoctor"
  | "makeAppointment"
  | "location"
  | "reset"
  | "filter"
  | "chat"
  | "document"
  | "circles"
  | "wallet"
  | "prescription"
  | "video"
  | "favorite"
  | "messages"
  | "patients"
  | "bag"
  | "review"
  | "warning"
  | "google"
  | "facebook"
  | "error"
  | "successImage"
  | "upload"
  | "bigChat"
  | "bigDocument"
  | "credit"
  | "cash"
  | "contactSupport"
  | "delete"
  | "calender"
  | "bigFavorite"
  | "doubleArrow"
  | "closeCall"
  | "change"
  | "volume"
  | "microphone"
  | "emptyNotification"
  | "share"
  | "faceID"
  | "successSign";

export type RotateTypes = "left" | "right" | "top" | "bottom";

export interface IconsProps {
  color?: string;
  width?: number;
  height?: number;
  name?: IconsName;
  rotate?: RotateTypes;
  type?: "image" | "svg";
}

const getRotate = (rotate: string) => {
  switch (rotate) {
    case "top":
      return "90deg";
    case "bottom":
      return "270deg";
    case "left":
      return "0deg";
    case "right":
      return "-180deg";
    default:
      return "0deg";
  }
};

function Svgs(props: IconsProps & SvgProps) {
  const style = {transform: [{rotate: getRotate(props.rotate || "")}]};

  switch (props.name) {
    case "logo":
      return <Logo {...props} style={[props.rotate && style, props.style]} />;
    case "faceID":
      return <FaceID {...props} style={[props.rotate && style, props.style]} />;
    case "successSign":
      return (
        <SuccessSign {...props} style={[props.rotate && style, props.style]} />
      );
    case "circles":
      return (
        <Circles {...props} style={[props.rotate && style, props.style]} />
      );
    case "reset":
      return <Reset {...props} style={[props.rotate && style, props.style]} />;
    case "filter":
      return <Filter {...props} style={[props.rotate && style, props.style]} />;
    case "slug":
      return <Slug {...props} style={[props.rotate && style, props.style]} />;
    case "menu":
      return <Menu {...props} style={[props.rotate && style, props.style]} />;
    case "arrow":
      return <Arrow {...props} style={[props.rotate && style, props.style]} />;
    case "showPassword":
      return (
        <ShowPassword {...props} style={[props.rotate && style, props.style]} />
      );
    case "hidePassword":
      return (
        <HidePassword {...props} style={[props.rotate && style, props.style]} />
      );
    case "checkEmail":
      return (
        <CheckEmail {...props} style={[props.rotate && style, props.style]} />
      );
    case "clock":
      return <Clock {...props} style={[props.rotate && style, props.style]} />;

    case "activeStar":
      return (
        <ActiveStar {...props} style={[props.rotate && style, props.style]} />
      );
    case "inactiveStar":
      return (
        <InactiveStar {...props} style={[props.rotate && style, props.style]} />
      );
    case "unchecked":
      return (
        <UnChecked {...props} style={[props.rotate && style, props.style]} />
      );
    case "checked":
      return <Checked {...props} style={[props.style]} />;

    case "delete":
      return <Delete {...props} style={[props.rotate && style, props.style]} />;

    // Tab buttons icons
    case "home":
      return <Home {...props} style={[props.rotate && style, props.style]} />;
    // more icons
    case "profile":
      return <User {...props} style={[props.rotate && style, props.style]} />;

    case "chat":
      return <Chat {...props} style={[props.rotate && style, props.style]} />;
    case "document":
      return (
        <Document {...props} style={[props.rotate && style, props.style]} />
      );

    case "closeCall":
      return (
        <CloseCall {...props} style={[props.rotate && style, props.style]} />
      );
    case "notifications":
      return (
        <Notifications
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );

    case "logout":
      return <Logout {...props} style={[props.rotate && style, props.style]} />;
    case "phone":
      return <Phone {...props} style={[props.rotate && style, props.style]} />;
    case "settings":
      return (
        <Settings {...props} style={[props.rotate && style, props.style]} />
      );
    case "notFound":
      return (
        <NotFound {...props} style={[props.rotate && style, props.style]} />
      );
    case "search":
      return <Search {...props} style={[props.rotate && style, props.style]} />;
    case "plus":
      return <Plus {...props} style={[props.rotate && style, props.style]} />;
    case "minus":
      return <Minus {...props} style={[props.rotate && style, props.style]} />;
    case "camera":
      return <Camera {...props} style={[props.rotate && style, props.style]} />;
    case "edit":
      return <Edit {...props} style={[props.rotate && style, props.style]} />;

    case "send":
      return <Send {...props} style={[props.rotate && style, props.style]} />;
    case "close":
      return <Close {...props} style={[props.rotate && style, props.style]} />;

    case "remove":
      return <Remove {...props} style={[props.rotate && style, props.style]} />;
    case "gender":
      return <Gender {...props} style={[props.rotate && style, props.style]} />;
    case "location":
      return (
        <Location {...props} style={[props.rotate && style, props.style]} />
      );
    // onBoarding svgs
    case "findDoctors":
      return (
        <FindDoctors {...props} style={[props.rotate && style, props.style]} />
      );
    case "onlineDoctor":
      return (
        <OnlineDoctor {...props} style={[props.rotate && style, props.style]} />
      );
    case "makeAppointment":
      return (
        <MakeAppointment
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );

    case "prescription":
      return (
        <Prescription {...props} style={[props.rotate && style, props.style]} />
      );
    case "wallet":
      return <Wallet {...props} style={[props.rotate && style, props.style]} />;
    case "warning":
      return (
        <Warning {...props} style={[props.rotate && style, props.style]} />
      );
    case "error":
      return <Error {...props} style={[props.rotate && style, props.style]} />;
    case "video":
      return <Video {...props} style={[props.rotate && style, props.style]} />;
    case "favorite":
      return (
        <Favorite {...props} style={[props.rotate && style, props.style]} />
      );
    case "messages":
      return (
        <Messages {...props} style={[props.rotate && style, props.style]} />
      );

    case "patients":
      return (
        <Patients {...props} style={[props.rotate && style, props.style]} />
      );
    case "review":
      return <Review {...props} style={[props.rotate && style, props.style]} />;
    case "bag":
      return <Bag {...props} style={[props.rotate && style, props.style]} />;
    case "doubleArrow":
      return (
        <DoubleArrow {...props} style={[props.rotate && style, props.style]} />
      );

    case "google":
      return <Google {...props} style={[props.rotate && style, props.style]} />;
    case "facebook":
      return (
        <Facebook {...props} style={[props.rotate && style, props.style]} />
      );
    case "apple":
      return <Apple {...props} style={[props.rotate && style, props.style]} />;
    case "successImage":
      return (
        <SuccessImage {...props} style={[props.rotate && style, props.style]} />
      );
    case "upload":
      return <Upload {...props} style={[props.rotate && style, props.style]} />;
    case "bigChat":
      return (
        <BigChat {...props} style={[props.rotate && style, props.style]} />
      );
    case "bigDocument":
      return (
        <BigDocument {...props} style={[props.rotate && style, props.style]} />
      );
    case "emptyNotification":
      return (
        <EmptyNotification
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case "bigFavorite":
      return (
        <BigFavorite {...props} style={[props.rotate && style, props.style]} />
      );
    case "cash":
      return <Cash {...props} style={[props.rotate && style, props.style]} />;
    case "credit":
      return <Credit {...props} style={[props.rotate && style, props.style]} />;
    case "calender":
      return (
        <CaLender {...props} style={[props.rotate && style, props.style]} />
      );
    case "microphone":
      return (
        <Microphone {...props} style={[props.rotate && style, props.style]} />
      );
    case "volume":
      return <Volume {...props} style={[props.rotate && style, props.style]} />;
    case "change":
      return <Change {...props} style={[props.rotate && style, props.style]} />;
    case "contactSupport":
      return (
        <ContactSupport
          {...props}
          style={[props.rotate && style, props.style]}
        />
      );
    case "share":
      return <Share {...props} style={[props.rotate && style, props.style]} />;
    default:
      return <NotFound {...props} />;
  }
}

export default Svgs;
