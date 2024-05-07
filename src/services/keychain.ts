import * as keychain from "react-native-keychain";

export const saveCredentials = async (username: string, password: string) => {
  await keychain.setGenericPassword(username, password);
};

export const retreiveCredentials = async (
  success: Function,
  error: Function,
) => {
  try {
    const credentials = await keychain.getGenericPassword();
    if (credentials) {
      success(credentials);
    } else {
      error(true);
    }
  } catch (error) {
    error(true);
  }
};

export const updateCredentials = async (newPassword: string) => {
  const credentials = await keychain.getGenericPassword();
  await keychain.setGenericPassword(credentials["username"], newPassword);
};

export const resetCredentials = async () => {
  await keychain.resetGenericPassword();
};
