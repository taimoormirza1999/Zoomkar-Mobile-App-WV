import React from 'react';

import { View, Text, SectionList, StyleSheet  } from 'react-native';

const menuItemsToDisplay = [
 {
    title: 'Appetizers',
    data: [
      { name: 'Hummus', price: '$5.00' },
      { name: 'Moutabal', price: '$5.00' },
      { name: 'Falafel', price: '$7.50' },
      { name: 'Marinated Olives', price: '$5.00' },
      { name: 'Kofta', price: '$5.00' },
      { name: 'Eggplant Salad', price: '$8.50' },
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      { name: 'Lentil Burger', price: '$10.00' },
      { name: 'Smoked Salmon', price: '$14.00' },
      { name: 'Kofta Burger', price: '$11.00' },
      { name: 'Turkish Kebab', price: '$15.50' },
    ],
  },
  {
    title: 'Sides',
    data: [
      { name: 'Fries', price: '$3.00', id: '11K' },
      { name: 'Buttered Rice', price: '$3.00' },
      { name: 'Bread Sticks', price: '$3.00' },
      { name: 'Pita Pocket', price: '$3.00' },
      { name: 'Lentil Soup', price: '$3.75' },
      { name: 'Greek Salad', price: '$6.00' },
      { name: 'Rice Pilaf', price: '$4.00' },
    ],
  },
  {
    title: 'Desserts',
    data: [
      { name: 'Baklava', price: '$3.00' },
      { name: 'Tartufo', price: '$3.00' },
      { name: 'Tiramisu', price: '$5.00' },
      { name: 'Panna Cotta', price: '$5.00' },
    ],
  },
];

const Item = ({ name,price}) => (
  <View style={menuItemsStyles.innerContainer}>
    <Text style={[menuItemsStyles.textItem]}>{name}</Text>
    <Text style={[menuItemsStyles.textItem]}>{price}</Text>
   
  </View>
);
const Itemseprator=()=>{
 return <View style={{height:1,backgroundColor:'white', marginVertical: 5,}}/>
}
const MenuItemSectionList = () => {
const renderItem = ({ item }) => (<Item name={item.name} price={item.price} />);
  return (
    <SectionList indicatorStyle={'white'}
    sections={menuItemsToDisplay}
    renderItem={renderItem}
       keyExtractor={(item, index) => item + index}
       renderSectionHeader={({section: {title}}) => (
        <Text style={menuItemsStyles.header}>{title}</Text>
      )}
      ItemSeparatorComponent={Itemseprator}
    />
          );
};

export default MenuItemSectionList;

const menuItemsStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    color:'white',
  },
  header: {
    fontSize: 25,
    textAlign:'center',
    backgroundColor: '#fff',
    padding:7
  },
  textItem: { color: 'white', fontSize: 18,fontWeight:'600' },
});
