import React from 'react';

import { View, Text, ScrollView, StyleSheet  } from 'react-native';

const menuItemsToDisplay = [
  '\n Hummus \n Moutabal \n Falafel \n Marinated Olives \n Kofta \n Eggplant Salad \n Lentil Burger \n Smoked Salmon \n Kofta Burger \n Turkish Kebab \n Fries \n Buttered Rice \n Bread Sticks \n Pita Pocket \n Lentil Soup \n Greek Salad \n Rice Pilaf \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta \n Baklava \n Tartufo \n Tiramisu \n Panna Cotta',
];

const MenuItemScrollView = () => {
  return (
    <ScrollView indicatorStyle={'white'} style={menuItemsStyles.container}>
      <Text
        style={menuItemsStyles.textHeading}>
        View Menu
      </Text>
      <Text style={menuItemsStyles.textItem}>
        {menuItemsToDisplay[0]}
      </Text>
    </ScrollView>
  );
};

export default MenuItemScrollView;

const menuItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 40,
    paddingBottom: 40,
    paddingTop: 10,
    backgroundColor: 'black',
  },
  textHeading: {
          color: 'white',
          fontSize: 25,
          textAlign: 'center',
          flexWrap: 'wrap',
        },
  textItem: { color: '#F4CE14', fontSize: 30 },
});
