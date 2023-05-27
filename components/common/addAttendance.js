import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS, SIZES,FONT } from '../../constants'; 

const HomeScreen = () => {
  const [meetingName, setMeetingName] = useState('');
  const [status, setStatus] = useState('');
  const [rating, setRating] = useState(1);
  const [reason, setReason] = useState('');
  // placeholder data
  const [attendees, setAttendees] = useState([
    { id: 1, name: 'John Doe',  },
    { id: 2, name: 'Jane Doe', },
    { id: 3, name: 'Bob Smith',},
  ]);


  const handleSubmit = () => {
    // save data
    console.log('Submitted!');
  };
  const Card = ({ serialNo, name }) => {
    return (
      <View style={styles.card}>
        <Text style={styles.serialNo}>{serialNo}</Text>
        <Text style={styles.name}>{name}</Text>
        <Picker
          selectedValue={status}
          style={styles.statusPicker}
          onValueChange={(itemValue) => setStatus(itemValue)}
        >
          <Picker.Item label="Present" value="present" />
          <Picker.Item label="Absent" value="absent" />
        </Picker>
        <Picker
          selectedValue={rating}
          style={styles.ratingPicker}
          onValueChange={(itemValue) => setRating(itemValue)}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <Picker.Item key={value} label={value.toString()} value={value} />
              ))}
        </Picker>
        <TextInput
          style={styles.reasonInput}
          placeholder="Enter reason here"
          value={reason}
          onChangeText={(text) => setReason(text)}
          multiline={true}
          numberOfLines={4}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    serialNo: {
      fontSize: 16,
      fontFamily:FONT.bold,
      textAlign: "right",
      marginBottom: 10,
    },
    name: {
      fontSize: 18,
      fontFamily:FONT.bold,
      marginBottom: 10,
    },
    statusPicker: {
      marginBottom: 10,fontFamily: FONT.regular,
    },
    ratingPicker: {
      marginBottom: 10,fontFamily: FONT.regular,
    },
    reasonInput: {
      fontFamily: FONT.regular,
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      textAlignVertical: 'top',
      height: 100,
    },
  });
  

 

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 18, marginBottom: 20,fontFamily: FONT.bold }}>Date</Text>
        <View style={{ flexDirection: 'row', marginBottom: 20 }}>
          {/* Calendar component */} 
          
        </View>
        <Text style={{ fontSize: 18, marginBottom: 10, fontFamily: FONT.bold}}>Meeting Name</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, borderRadius:5, paddingLeft:5, paddingRight:5  }}
          onChangeText={(text) => setMeetingName(text)}
          value={meetingName}
        />
        
        {attendees.map((attendee, index) => (
          <Card key={index }serialNo={attendee.id} name={attendee.name}/>
        ))}
        <TouchableOpacity
          style={{ backgroundColor: '#5ab350', padding: 10, borderRadius: 10, marginTop: 20 }}
          onPress={handleSubmit}
        >
          <Text style={{ color: 'white', fontSize: 18, fontFamily:FONT.medium}}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
