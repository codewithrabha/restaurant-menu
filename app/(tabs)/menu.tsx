import { View, Text, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';
import { menuItems } from '../../constants/MenuItems';

export default function MenuScreen() {
  const [showVegOnly, setShowVegOnly] = useState(false);

  const filteredItems = showVegOnly 
    ? menuItems.filter(item => item.isVeg)
    : menuItems;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
        <Text>Veg Only</Text>
        <Switch
          value={showVegOnly}
          onValueChange={setShowVegOnly}
          style={{ marginLeft: 8 }}
        />
      </View>
      {filteredItems.map((item) => (
        <Link
          key={item.id}
          href={`/itemdetail/${item.id}`}
          asChild
        >
          <TouchableOpacity 
            style={{ 
              padding: 16,
              borderBottomWidth: 1,
              borderBottomColor: '#eee',
              flexDirection: 'row',
            }}
          >
            <Image
              source={item.image}
              style={{ width: 80, height: 80, borderRadius: 8 }}
            />
            <View style={{ marginLeft: 16, flex: 1 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
              <Text style={{ color: '#666', marginTop: 4 }}>{item.description}</Text>
              <Text style={{ color: '#2196F3', marginTop: 4 }}>{item.price}</Text>
            </View>
          </TouchableOpacity>
        </Link>
      ))}
    </ScrollView>
  );
}