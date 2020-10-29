import React from "react";
import { Modal, Text, Spinner, Card } from "@ui-kitten/components";
import { StyleSheet, View } from "react-native";

const LoadingModal = ({ isVisible }) => (
  <Modal
    visible={isVisible}
    backdropStyle={styles.backdrop}
    style={styles.container}
  >
    <Card disabled={true}>
      <Text style={{ paddingBottom: "5%" }}>Loading...</Text>
      <View style={styles.container}>
        <Spinner />
      </View>
    </Card>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});

export default LoadingModal;
