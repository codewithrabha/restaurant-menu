
import { View, Text, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { menuItems } from '../../constants/MenuItems';

export default function ItemDetailScreen() {
  const { id } = useLocalSearchParams();
  const item = menuItems.find(item => item.id === Number(id));

  if (!item) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Item not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image
        source={item.image}
        style={{ width: '100%', height: 200 }}
        resizeMode="cover"
      />
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ color: '#2196F3', fontSize: 18, marginTop: 8 }}>{item.price}</Text>
        <Text style={{ marginTop: 16 }}>{item.longDescription}</Text>
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center', 
          marginTop: 16,
          padding: 8,
          backgroundColor: item.isVeg ? '#E8F5E9' : '#FFEBEE',
          borderRadius: 8
        }}>
          <Text style={{ 
            color: item.isVeg ? '#2E7D32' : '#C62828'
          }}>
            {item.isVeg ? '🥬 Vegetarian' : '🍖 Non-Vegetarian'}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
