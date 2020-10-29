import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Button, Layout, Text, Input, Icon } from "@ui-kitten/components";

// my components
import UserIcon from "../components/icons/UserIcon";
import LoadingModal from "../components/modals/LoadingModal";

const Login = ({ navigation }) => {
  const [securityEntry, setSecurityEntry] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => setSecurityEntry(!securityEntry);

  const ToggleIcon = (props) => (
    <TouchableWithoutFeedback onPress={toggle}>
      <Icon {...props} name={!securityEntry ? "eye" : "eye-off"} />
    </TouchableWithoutFeedback>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={{ ...styles.container }} level="1">
        <LoadingModal isVisible={isVisible} />
        <Text category="h4" status="success">
          Welcome to Tasks
        </Text>
        <View style={{ width: "85%", marginTop: "12%" }}>
          <Input placeholder="Email" accessoryLeft={UserIcon} />
          <Input
            placeholder="Password"
            style={{ marginTop: "2%" }}
            accessoryLeft={ToggleIcon}
            secureTextEntry={securityEntry}
          />
          <Button
            style={{ marginTop: "4%" }}
            status="info"
            onPress={() => setIsVisible(true)}
          >
            Sign In
          </Button>
        </View>
      </Layout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: "30%",
    alignItems: "center",
  },
});

export default Login;
