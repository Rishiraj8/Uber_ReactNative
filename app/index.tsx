import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";
export default function Index() {
  return (
   <SafeAreaView className="flex-1  bg-white">
      <Text className=" text-2xl  text-black">
        Rishi
      </Text>
    </SafeAreaView>
  );
}
