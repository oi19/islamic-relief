import * as yup from "yup";
import {translate} from ".";

yup.setLocale({
  mixed: {
    required: ({path}) => {
      return translate("validation.required", {
        path: translate(`Form.${path}`),
      });
    },
  },
  string: {
    length: ({path, length}) =>
      translate("validation.length", {
        path: translate(`Form.${path}`),
        length,
      }),
    min: ({path, min}) =>
      translate("validation.minString", {
        path: translate(`Form.${path}`),
        min,
      }),
    max: ({path, max}) =>
      translate("validation.maxString", {
        path: translate(`Form.${path}`),
        max,
      }),
    email: ({path}) =>
      translate("validation.email", {path: translate(`Form.${path}`)}),
  },
  number: {
    min: ({path, min}) =>
      translate("validation.minNumber", {
        path: translate(`Form.${path}`),
        min,
      }),
    max: ({path, max}) =>
      translate("validation.maxNumber", {
        path: translate(`Form.${path}`),
        max,
      }),
  },
});

const phoneRegExp = /^01[0-25]\d{8}$/;
const uriRegExp = /^(https?|http):\/\/[^\s/$.?#].[^\s]*$/;

export const AccountLoginSchema = yup.object().shape({
  mobile: yup
    .string()
    .trim()
    .matches(phoneRegExp, translate("validation.enterValidPhoneNumber"))
    .required(),
  password: yup.string().min(8).max(24).required(),
});

export const DoctorRegisterSchema1 = yup.object().shape({
  mobile: yup
    .string()
    .trim()
    .matches(phoneRegExp, translate("validation.enterValidPhoneNumber"))
    .required(),
  email: yup.string().trim().email().required(),
  image: yup.string().required(),
  name: yup.string().min(3).required(),
  password: yup.string().min(8).max(24).required(),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      translate("validation.confirmPasswordNotMatch"),
    )
    .required(),
  gender: yup.number().required(),
  birthday: yup.string().required(),
});

export const DoctorRegisterSchema2 = yup.object().shape({
  title_id: yup.number().required(),
  specialty_id: yup.number().required(),
  sub_specialty_id: yup.number().required(),
  experience: yup.number().required(),
  medical_card: yup.string().required(),
  profile_description: yup.string().required(),
  bio: yup.string().required(),
});

export const ClinicRegisterSchema = yup.object().shape({
  clinicName: yup.string().min(3).required(),
  address: yup.string().trim().min(3).required(),
  // images: yup.array().of(yup.string()),
  certificates: yup.array().of(yup.string().required()).required(),
  video: yup
    .string()
    .lowercase()
    .trim()
    .matches(
      uriRegExp,
      "Invalid URL Format. Please enter a valid HTTP or HTTPS URL.",
    )
    .required(),

  district_id: yup.number().required(),
  city: yup.string().required(),
  country: yup.string().required(),
});

export const UpdatePersonalSchema = yup.object().shape({
  name: yup.string().min(3).required(),
  email: yup.string().trim().email().required(),
  mobile: yup
    .string()
    .trim()
    .matches(phoneRegExp, translate("validation.enterValidPhoneNumber"))
    .required(),
});

export const UpdateClinicSchema = yup.object().shape({
  clinicName: yup.string().min(3).required(),
  address: yup.string().trim().min(3).required(),
  // images: yup.array().of(yup.string()),
  certificates: yup.array().of(yup.string()),
  video: yup
    .string()
    .lowercase()
    .trim()
    .matches(
      uriRegExp,
      "Invalid URL Format. Please enter a valid HTTP or HTTPS URL.",
    )
    .required(),

  district_id: yup.number().required(),
  city: yup.string().required(),
  country: yup.string().required(),
});

export const userAccountSchema = yup.object().shape({
  mobile: yup
    .string()
    .trim()
    .matches(phoneRegExp, translate("validation.enterValidPhoneNumber")),
  email: yup.string().trim().email(),
  name: yup.string(),
  gender: yup.number(),
  birthdate: yup.string(),
  image: yup.string(),
});

export const ResetPasswordSchema = yup.object().shape({
  old_password: yup.string().min(8).max(24).required(),
  password: yup.string().min(8).max(24).required(),
});
