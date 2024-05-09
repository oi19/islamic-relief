import * as yup from "yup";
import {translate} from ".";
import parsePhoneNumber, {
  CountryCode,
  isValidPhoneNumber,
  NationalNumber,
  parsePhoneNumberFromString,
} from "libphonenumber-js";

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

export const validatePhoneNumber = (value: string) => {
  // Parse the phone number
  const parsedPhoneNumber = parsePhoneNumberFromString(value);
  console.warn(parsedPhoneNumber?.country);
  // Adjust the country code as needed

  if (!parsedPhoneNumber) {
    // Invalid phone number format
    return "الرجاء إدخال رقم هاتف صالح";
  }

  // Check if the parsed phone number is valid
  const isValid = isValidPhoneNumber(
    parsedPhoneNumber.nationalNumber,
    parsedPhoneNumber?.country,
  );

  if (parsedPhoneNumber.country === "EG") {
    const nationalNumberLength = parsedPhoneNumber.nationalNumber.length;
    if (nationalNumberLength !== 10 && nationalNumberLength !== 11) {
      return "الرجاء إدخال رقم هاتف صالح";
    }
  }

  // Return appropriate message based on validity
  return isValid ? "" : "الرجاء إدخال رقم هاتف صالح";
};

export const AccountLoginSchema = yup.object().shape({
  identifier: yup
    .string()
    .required("الرجاء إدخال رقم هاتف صالح أو بريد إلكتروني")
    .test(
      "identifier",
      "الرجاء إدخال رقم هاتف صالح أو بريد إلكتروني",
      function (value, {parent}) {
        if (!value) {
          throw new yup.ValidationError(
            "الرجاء إدخال رقم هاتف صالح أو بريد إلكتروني",
            value,
            "identifier",
          );
        }

        // Check if the value consists only of numbers (phone number)
        if (parsePhoneNumber(value)?.nationalNumber) {
          const phoneNumberError = validatePhoneNumber(value);
          if (phoneNumberError) {
            throw new yup.ValidationError(
              phoneNumberError,
              value,
              "identifier",
            );
          }
        } else {
          // Validate as an email
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            throw new yup.ValidationError(
              "الرجاء إدخال بريد إلكتروني صالح",
              value,
              "identifier",
            );
          }
          // Mark password as required when identifier is an email
          parent.password = yup
            .string()
            .min(8)
            .max(24)
            .required("كلمة المرور مطلوبة");
        }

        return true;
      },
    ),

  password: yup
    .string()
    .test((value, {parent}) => {
      if (parsePhoneNumber(parent.identifier)?.nationalNumber) {
        const phoneNumberError = validatePhoneNumber(parent.identifier);
        if (phoneNumberError) {
          return false;
        }
      }
    })
    .min(8)
    .max(24)
    .required("كلمة المرور مطلوبة"),
});

export const userRegisterSchema = yup.object().shape({
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
  gender: yup.string().required(),
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
    .matches(phoneRegExp, translate("validation.enterValidPhoneNumber"))
    .required(),
  email: yup.string().trim().email().required(),
  name: yup.string().required(),
  birthday: yup.string().required(),
  gender: yup.string().required(),
});

export const ResetPasswordSchema = yup.object().shape({
  old_password: yup.string().min(8).max(24).required(),
  password: yup.string().min(8).max(24).required(),
});
export const forgetPasswordSchema = yup.object().shape({
  password: yup.string().min(8).max(24).required(),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      translate("validation.confirmPasswordNotMatch"),
    )
    .required(),
});

export const forgetPasswordSchema2 = yup.object().shape({
  email: yup.string().trim().email().required(),
});

export const changePasswordSchema = yup.object().shape({
  password: yup.string().min(8).max(24).required(),
  password_confirmation: yup
    .string()
    .oneOf(
      [yup.ref("password")],
      translate("validation.confirmPasswordNotMatch"),
    )
    .required(),
});

export const createItselfAppointmentSchema = yup.object().shape({
  is_myself: yup.number().required(),
  notes: yup.string().min(8).required(),
});

export const createOtherAppointmentSchema = yup.object().shape({
  is_myself: yup.number().required(),
  notes: yup.string().min(8).required(),
  name: yup.string().required(),
  age: yup.string().required(),
  gender: yup.number().required(),
});

export const ReviewSchema = yup.object().shape({
  review: yup.string().min(4).required(),
  rate: yup.string().required(),
});
