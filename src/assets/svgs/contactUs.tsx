import * as React from "react";
import Svg, {SvgProps, Circle, Path, Rect} from "react-native-svg";
const ContactUs = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props} viewBox="0 0 40 40">
    <Rect width="31" height="31" rx="6" fill="#2F76BC" />
    <Path
      d="M17.3053 10.3684C18.1278 10.5289 18.8837 10.9312 19.4763 11.5237C20.0689 12.1163 20.4712 12.8722 20.6316 13.6947M17.3053 7C19.0141 7.18984 20.6077 7.95509 21.8243 9.17011C23.0408 10.3851 23.8081 11.9777 24 13.6863M21.0526 23C13.8439 23 8 17.1561 8 9.94737C8 9.62213 8.0119 9.29967 8.03528 8.9804C8.06211 8.614 8.07552 8.4308 8.17154 8.26403C8.25107 8.1259 8.392 7.99491 8.53556 7.92568C8.70889 7.84211 8.91106 7.84211 9.31538 7.84211H11.6878C12.0279 7.84211 12.1979 7.84211 12.3436 7.89806C12.4723 7.94749 12.587 8.02778 12.6774 8.13187C12.7798 8.24971 12.8379 8.40948 12.9541 8.72902L13.9361 11.4295C14.0712 11.8013 14.1389 11.9872 14.1274 12.1635C14.1173 12.319 14.0642 12.4687 13.9741 12.5958C13.8719 12.74 13.7023 12.8418 13.3631 13.0453L12.2105 13.7368C13.2227 15.9675 15.0317 17.7789 17.2632 18.7895L17.9547 17.637C18.1582 17.2977 18.26 17.1281 18.4041 17.0259C18.5313 16.9358 18.6809 16.8827 18.8365 16.8726C19.0128 16.8611 19.1987 16.9288 19.5705 17.0639L22.271 18.0459C22.5905 18.1621 22.7503 18.2202 22.8681 18.3226C22.9722 18.4131 23.0525 18.5277 23.1019 18.6564C23.1579 18.8021 23.1579 18.9721 23.1579 19.3122V21.6846C23.1579 22.0889 23.1579 22.2911 23.0743 22.4644C23.0051 22.608 22.8741 22.749 22.736 22.8285C22.5692 22.9245 22.386 22.9379 22.0196 22.9647C21.7003 22.9881 21.3779 23 21.0526 23Z"
      stroke="white"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Svg>
);
export default ContactUs;