import React, { Component } from 'react';
import { Button, StyleSheet, View,Image,Text } from 'react-native';

export default class ButtonBasics extends Component {
  _NameButton() {
    alert('Mình tên là Dương Thành Luân')
  }
  _AgeButton() {
    alert('Mình năm nay 28 tuổi')
  }
  _CityButton() {
    alert('Mình đến từ Ninh Thuận')
  }
  _CompanyButton() {
    alert('Mình đang làm việc tại Vương Thành group')
  }

  render() {
    let pic = {
      uri: 'https://i.imgur.com/fv3CWgt.jpg'
    };
    return (
      
      <View style={styles.container}>
        <View style={styles.containerStyle}>
          <Text>Xin chào tất cả mọi người, mình là Luân</Text>
          
          <Image source={pic} style ={styles.imageStyle} />
          <Text>Age: 28</Text>
          <Text>FullName: Dương Thành Luân</Text>
          <Text>City: Ninh Thuận</Text>
          <Text>Company: Vương Thành group</Text>
          
        <View style={styles.buttonContainer}>
          <Button 
            onPress={this._NameButton}
            title="Full Name"
            color="#841584"
            
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button style={styles.ButtonStyle}
            onPress={this._AgeButton}
            title="Age"
            color="#841584"
          />
        </View>
        <View style={styles.ButtonContainer}>
          <Button style={styles.ButtonStyle}
            onPress={this._CityButton}
            title="City"
            color="#841584"
          />
          </View>
          <View style={styles.buttonContainer}>
          <Button style={styles.ButtonStyle}
            onPress={this._CompanyButton}
            title="Company"
            color="#841584"
          />
        </View>
        </View>
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20
    
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffc1c1',
  },
  imageStyle:{
    width: 200, height: 200,
    marginBottom:20,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
  },
  ButtonStyle:{
    width:70, height:70,
    
  }
  
});
