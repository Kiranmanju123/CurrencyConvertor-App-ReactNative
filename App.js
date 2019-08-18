import React from 'react';
import { StyleSheet, Text, View , TextInput , TouchableOpacity , Alert } from 'react-native';

const currencyPerRupee = {
  DOLLAR :0.014,
  EURO : 0.012,
  POUND : 0.011,
  RUBEL : 0.93,
  AUSDOLLAR : 0.2,
  CANDOLLAR : 0.2,
  YEN : 1.54,
  DINAR : 0.0043 ,
  BITCOIN : 0.0000041
}

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue:"",
      resultValue:"0.0"
    }
  }

  buttonpresssed = (currency) => {
    if(this.state.inputValue == "")
    {
      Alert.alert("Enter the Value")
    }

    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency]
    this.setState({resultValue : result.toFixed(2)})

  }



  render() {
    return (
      <View style={styles.container}>
          <View style={styles.screenview}>
            <View style={styles.resultcontainer} >
              <Text style={styles.resultvalue} >{this.state.resultValue}</Text>
            </View>
              <View style={styles.inputcontainer} >
                <TextInput 
                    style={styles.input}
                    selectionColor="#FFF"
                    keyboardType="numeric"
                    placeholder="Enter Value"
                    value={this.state.inputValue}
                    onChangeText={inputValue=> this.setState({
                      inputValue

                    })} />
              </View>
              <View style={styles.convertorbtncontainer} >

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("DOLLAR") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >DOLLAR</Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("EURO") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >EURO</Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("POUND") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >POUND</Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("RUBEL") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >RUBEL</Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("AUSDOLLAR") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >AUSD</Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("CANDOLLAR") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >CANNADA</Text>

              </TouchableOpacity>

              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("YEN") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >YEN</Text>

              </TouchableOpacity>


              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("DINAR") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >DINAR</Text>

              </TouchableOpacity>


              <TouchableOpacity 
              onPress = { () => this.buttonpresssed("BITCOIN") } 
              style={styles.convertorbtn} > 
                 <Text style={styles.convertorbtntext} >BITCOIN</Text>

              </TouchableOpacity>



              

              </View>

          </View>
             
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#535C68'
   
  },
  screenview : {
    flex:1
  },

  resultcontainer : {
    height:70,
    marginTop:50,
    justifyContent:"center",
    backgroundColor:"#0A79DE",
    alignItems:"center",
    borderWidth:3,
    borderColor:"#c1c1c1",
    marginLeft:5,
    marginRight:5



  },

  resultvalue : {
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF"
  },

  inputcontainer : {
    height:70,
    backgroundColor:"#0A79DE",
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:3,
    borderColor:"#c1c1c1",
    marginLeft:5,
    marginRight:5
    
  } ,

  input : {
    fontSize:25,
    fontWeight:"bold",
    color:"#FFF",
    justifyContent:"center",
    alignItems:"center"
    
  } , 
  convertorbtncontainer : {
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:20,
    borderWidth:3,
    borderColor:"#c1c1c1",
    marginLeft:5,
    marginRight:5,
    },

    convertorbtn : {
      alignItems:"center",
      justifyContent:"center",
      backgroundColor:"#0A79DF",
      borderWidth:3,
      borderColor:"#c1c1c1",
      height:100,
      borderWidth:2,
      width:"33.3%"

    } , 

    convertorbtntext : {
      color:"#FFF",
      fontSize:20,
      fontWeight:"bold"
    }





});
