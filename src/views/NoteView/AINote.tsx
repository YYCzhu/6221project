import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity,StyleSheet, SafeAreaView, Alert, Text,ScrollView,} from 'react-native';
import axios from 'axios';

const AINOte = () => {
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const [infoItems, setInfoItems] = useState([]);


    

    const handleInputChange = (text) => {
        setInputValue(text);
      };
    
    const handleSubmit = () => {
        setSubmittedValue(inputValue);
        setInputValue(''); // Clear the input after submission if needed
      };

    const postData = async () => {
        setSubmittedValue(inputValue);
        try {
          const response = await axios({
            method: 'post',
            url: 'https://mpe2v5xurk.us-west-2.awsapprunner.com/generate_subtopic',
            data: {
              user_input: submittedValue,
            },
            headers: {
              'Content-Type': 'application/json',
            },
            timeout: 200000,
          });
          const messageObject = response.data;
          const info = messageObject.choices[0].message.content
          
          setInfoItems(info.split('\n'));
          console.log(infoItems);
          //setInputValue(info);
          //setResultText(response.data); // Assuming the response contains the summary text
          Alert.alert('Success');
        } catch (error) {
          console.error(error);
          Alert.alert('Error', 'Failed to generate topics');
        }
      };
      const handlemoretopic =async () => {
        
      }

      const handleItemSelect = (selectedItem) => {
        // Do something with the selected item
        console.log('Selected Item:', selectedItem);
        // For example, you might want to set it as the input value
        
      };
      
    return (
        <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            value={inputValue}
            onChangeText={handleInputChange}
            placeholder="Type here..."
            style={styles.input}
          />
          <Button title="Submit" onPress={postData} />
        </View>
        <View style={styles.buttonsContainer}>
          {infoItems.slice(0, 3).map((item, index) => (
            <TouchableOpacity key={index} onPress={() => handleItemSelect(item)}>
              <Text style={styles.button}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
    );
}

export default AINOte;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollContainer: {
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      marginBottom: 10,
      width: '100%',
    },
    buttonsContainer: {
      width: '100%',
    },
    button: {
      padding: 10,
      borderWidth: 1,
      marginBottom: 10,
      textAlign: 'center',
    },
  });