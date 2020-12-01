import React, { useEffect } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Card, Divider, Layout, Text, TopNavigation } from "@ui-kitten/components";

// my components
import HeaderCard from "../components/cards/Header_card";
import FooterCard from "../components/cards/Footer_card";
import { useState } from "react";
import CreateTaskModal from "../components/modals/CreateTaskModal";

const MyTasks = () => {
  const [myTasks, setMyTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const removeTask = (index) => {
    console.log("REMOVE");
    myTasks.splice(index, 1);
    setMyTasks([...myTasks]);
  };

  const handleChangeTittle = (text) => {
    setTitle(text);
  };

  const handleChangeDescription = (text) => {
    setDescription(text);
  };

  const addTask = (element) => {
    setMyTasks([...myTasks, element]);
  };

  const toggleAddTaskModal = () => {
    setIsVisible(!isVisible);
  };

  const submitTask = () => {
    if (title.length && description.length) {
      addTask({
        id: Math.floor(Math.random()) * 100,
        title: title,
        description: description,
      });
      toggleAddTaskModal();
    }
  };

  return (
    <ScrollView>
      <CreateTaskModal
        isVisible={isVisible}
        toggleVisibility={toggleAddTaskModal}
        handleDescriptionChange={handleChangeDescription}
        handleTitleChange={handleChangeTittle}
        title={title}
        description={description}
        submitTask={submitTask}
      />
      <TopNavigation title='My Tasks' alignment='start' accessoryRight={} />
      <Layout style={styles.container}>
        <View style={{ flex: 1, justifyContent: "space-between", marginBottom: '3%'}}>
          <Text style={{ paddingBottom: "3%" }}>My Tasks</Text>
          <Button
            size="small"
            status="primary"
            onPress={() => toggleAddTaskModal()}
          >
            ADD
          </Button>
        </View>
        <Divider />
        {myTasks.length > 0 ? (
          myTasks.map((task, index) => (
            <Card
              style={styles.card}
              key={task.id}
              header={(props) => HeaderCard({ ...props, title: task.title })}
              footer={(props) =>
                FooterCard({ ...props, onRemove: removeTask, index })
              }
            >
              <Text>{task.description}</Text>
            </Card>
          ))
        ) : (
          <View style={{ height: "100%" }}>
            <Text>Aun no hay tareas</Text>
          </View>
        )}
      </Layout>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: "30%",
    alignItems: "center",
    height: "100%",
  },
  card: {
    flex: 1,
    width: "100%",
    height: "40%",
    paddingTop: "10%",
  },
});

export default MyTasks;
