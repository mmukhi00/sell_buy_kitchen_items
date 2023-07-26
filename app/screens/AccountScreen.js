import React from "react";
import { StyleSheet, FlatList, View, Text } from "react-native";
import colors from "../config/colors";
import ListItems from "../components/ListItems";
import ListItemSeparator from "../components/ListItemSeparator";
import Icon from "../components/Icon";
import Screen from "../components/Screen";

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bullted",
      backgroundColor: colors.primary
    }
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary
    },
    targetScreen: "Messages"
  }
];

function AccountScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <ListItems
          title="Mahima"
          subTitle="leaning new things"
          image={require("../assets/logo.png")}
        />
      </View>
      <View style={styles.screen}>
        <FlatList
          ItemSeparatorComponent={ListItemSeparator}
          data={menuItems}
          keyExtractor={menuItems => menuItems.title}
          renderItem={({ item }) => {
            return (
              <ListItems
                title={item.title}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                  />
                }
                onPress={() => navigation.navigate(item.targetScreen)}
              />
            );
          }}
        />
      </View>
      <ListItems
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white
  },
  container: {
    marginVertical: 20
  }
});
export default AccountScreen;
