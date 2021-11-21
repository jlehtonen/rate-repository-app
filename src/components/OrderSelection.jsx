import React from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

const OrderSelection = ({ selectedOrder, handleChange }) => {
  // const [selectedOrder, setSelectedOrder] = useState();

  // const handleChange = (value) => {
  //   console.log(value);
  //   setSelectedOrder(value);
  // };

  return (
    <View style={{ paddingHorizontal: 10, paddingVertical: 20 }}>
      <Picker selectedValue={selectedOrder} onValueChange={handleChange}>
        <Picker.Item label="Latest repositories" value="CREATED_AT DESC" />
        <Picker.Item
          label="Highest rated repositories"
          value="RATING_AVERAGE DESC"
        />
        <Picker.Item
          label="Lowest rated repositories"
          value="RATING_AVERAGE ASC"
        />
      </Picker>
    </View>
  );
};

export default OrderSelection;
