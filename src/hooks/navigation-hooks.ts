import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {MainNavigationTypes} from "../navigation/navigation-types";

function useNavigationHooks<T extends MainNavigationTypes>() {
  const navigate = useNavigation<StackNavigationProp<T>>();
  return navigate;
}

export {useNavigationHooks};
