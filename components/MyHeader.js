import React, { Component } from "react";
import { Header, Icon, Badge } from "react-native-elements";
import { View, Text, StyeSheet, Alert } from "react-native";

const BellIconWithBadge = (props) => {
  return (
    <View>
      <Icon
        name="bell"
        type="font-awesome"
        color="black"
        size={30}
        onPress={() => props.navigation.navigate("Notification")}
      />
      <Badge
        value="1"
        containerStyle={{ position: "absolute", top: -4, right: -5 }}
      />
    </View>
  );
};

const MyHeader = (props) => {
  return (
    <Header
      leftComponent={
        <Icon
          name="bars"
          type="font-awesome"
          color="black"
          size={30}
          onPress={() => props.navigation.toggleDrawer()}
        />
      }
      centerComponent={{
        text: props.title,
        style: {
          fontSize: 31,
          fontWeight: "300",
          paddingBottom: 10,
          color: "mediumorchid",
        },
      }}
      rightComponent={<BellIconWithBadge {...props} />}
      backgroundColor="lavender"
    />
  );
};

export default MyHeader;
