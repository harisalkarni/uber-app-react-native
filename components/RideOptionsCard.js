import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState} from 'react'
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const data = [
    {
        id: "Uber-X-123",
        title: "UberX",
        multiplier: 1,
        image: "https://links.papareact.com/3pn",
    },
    {
        id: 'Uber-XL-456',
        title: 'Uber XL',
        multiplier: 1.2,
        image: "https://links.papareact.com/5w8",
    },
    {
        id: 'Uber-LUX-789',
        title: 'Uber LUX',
        multiplier: 1.75,
        image: "https://links.papareact.com/7pf",
    },
]


const RideOptionsCard = () => {

    const navigation = useNavigation();
    const [selected, setSelected] = useState(null);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`} >
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("NavigateCard")} style={tw`absolute top-3 left-5 p-3 z-50 rounded-full`}>
            <Icon name='chevron-left' type='fontawesome' />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`} >Select a ride</Text>
      </View>
        <FlatList
            data={data}
             keyExtractor={(item) => item.id}
             renderItem={({item: {id, title, multiplier, image}}) => (
                <TouchableOpacity onPress={item => setSelected(item)} style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}>
                    <Image style={{width: 100, height: 100, resizeMode: 'contain',}} source={{uri: image}} />
                    <View style={tw`-ml-6`}>
                        <Text style={tw`text-xl font-semibold`}>{title}</Text>
                        <Text>Travel time...</Text>
                    </View>
                    <Text style={tw`text-xl`}>$99</Text>
                </TouchableOpacity>
             )}
         />
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})