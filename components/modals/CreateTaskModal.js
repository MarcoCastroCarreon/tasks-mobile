import React from "react";
import { StyleSheet } from "react-native";
import {
  Modal,
  Text,
  Card,
  Divider,
  Input,
  Button,
} from "@ui-kitten/components";

const CreateTaskModal = ({
  isVisible,
  toggleVisibility,
  title,
  handleTitleChange,
  description,
  handleDescriptionChange,
  submitTask,
}) => {
  return (
    <Modal
      visible={isVisible}
      backdropStyle={styles.backdrop}
      onBackdropPress={() => toggleVisibility()}
      style={styles.container}
    >
      <Card>
        <Text style={{ paddingBottom: "8%" }} category="h5">
          Add Task Form
        </Text>
        <Divider />
        <Input
          placeholder="Title"
          value={title}
          onChangeText={handleTitleChange}
        />
        <Input
          placeholder="Description"
          value={description}
          onChangeText={handleDescriptionChange}
        />
        <Button status="success" style={{ marginTop: '7%' }} appearance="outline" onPress={() => submitTask()}>
          Add
        </Button>
      </Card>
    </Modal>
  );
};

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

export default CreateTaskModal;
