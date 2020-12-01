import React from "react";
import { View } from "react-native";
import { Button } from "@ui-kitten/components";

const FooterCard = (props) => {
  return (
    <View {...props}>
      <Button
        status="basic"
        onPress={(e) => props.onRemove(props.index)}
        size="small"
      >
        REMOVE
      </Button>
    </View>
  );
};

export default FooterCard;
