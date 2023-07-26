import React, { useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Screen from "../components/Screen";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "Sell items",
    image: require("../assets/logo.png")
  },
  {
    id: 2,
    title: "T2",
    description: "Sell items",
    image: require("../assets/logo.png")
  }
];

function MessagesScreen() {
  const [messages, setMessage] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    setMessage(messages.filter(m => m != message));
  };
  return (
    <Screen>
      <FlatList
        ItemSeparatorComponent={ListItemSeparator}
        data={messages}
        keyExtractor={messages => messages.id}
        renderItem={({ item }) => {
          return (
            <ListItems
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log(item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
              refreshing={refreshing}
              onRefresh={() => {
                console.log("set");
              }}
            />
          );
        }}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300
  },
  text: {
    marginTop: 40
  }
});

export default MessagesScreen;
