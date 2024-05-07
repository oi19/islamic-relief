import * as keychain from "react-native-keychain";

const useKeychain = () => {
  const saveCredentials = async (username: string, password: string) => {
    try {
      await keychain.setGenericPassword(username, password);
    } catch (error) {
      console.error("Error saving credentials:", error);
    }
  };

  const retrieveCredentials = async (
    onSuccess: (credentials: false | keychain.UserCredentials) => void,
    onError: (error: any) => void,
  ) => {
    try {
      const credentials = await keychain.getGenericPassword();
      onSuccess(credentials);
    } catch (error) {
      onError(error);
      console.error("Error retrieving credentials:", error);
    }
  };

  const updateCredentials = async (newPassword: string) => {
    try {
      const credentials = await keychain.getGenericPassword();
      await keychain.setGenericPassword(credentials.username, newPassword);
    } catch (error) {
      console.error("Error updating credentials:", error);
    }
  };

  const resetCredentials = async () => {
    try {
      await keychain.resetGenericPassword();
    } catch (error) {
      console.error("Error resetting credentials:", error);
    }
  };

  return {
    saveCredentials,
    retrieveCredentials,
    updateCredentials,
    resetCredentials,
  };
};

export default useKeychain;
