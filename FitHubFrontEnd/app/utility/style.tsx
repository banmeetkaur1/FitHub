import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';
import { useTheme } from './ThemeContext';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    charts: {
      alignItems: 'center', 
      justifyContent: 'center',
      padding: 10,
      paddingBottom: 10
   
    },
    logo: {
      width: 130,
      height: 130,     
    },
    signup: {
      color: '#00B5EE',
      marginTop: 10,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',  

    },
    login: {
      color: 'white',
      marginTop: 10,
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      textAlignVertical: 'center',

    },
    loginbutton: {
      backgroundColor: 'white',
      marginTop: 10,
      marginBottom: 5,
      paddingHorizontal: 50,
      borderRadius: 50,
      alignItems:'center',
    },

    setupbutton: {
      backgroundColor: '#00B5EE',
      marginTop: 10,
      marginBottom: 5,
      paddingHorizontal: 50,
      borderRadius: 50,
      alignItems:'center',
  },
  heading: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: 'space-between',
    flexDirection : 'row', 
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  text: {
    color: '#777'
  },
  
  avatar: {

    height: 40,
    width: 40,
    borderRadius: 20
  },
  box: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    flex: 0.17,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '30%'
  },
  padding: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  

bar: {
    flex: 1,
    height: 8,
    borderRadius: 8,
    backgroundColor: 'lightblue',
},
chartContainer: {
  borderWidth: 1,
  borderColor: '#e0e0e0',
  borderRadius: 10,
  padding: 10,
  backgroundColor: 'white',
  marginBottom: 10
  
},
chart: {
  marginVertical: 8,
  borderRadius: 16,
},
periodSelector: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  marginTop: 20,
  marginBottom: 20,
},
buttonGroupContainer: {
  height: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
},
modalContainer: {
  flex: 1,
  backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  justifyContent: 'center',
  alignItems: 'center',
},
modalContent: {
  backgroundColor: 'white',
  padding: 20,
  borderRadius: 10,
  width: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 200
},
settingsbutton: {
  backgroundColor: '#00B5EE',
  marginTop: 5,
  marginBottom: 2,
  paddingHorizontal: 40,
  paddingVertical: 2,
  borderRadius: 50,
  alignItems:'center',
},
settingsbuttonText: {
  backgroundColor: '#00B5EE',
  color: 'white',
  marginTop: 5,
  marginBottom: 5,
  paddingHorizontal: 10,
  borderRadius: 50,
  alignItems:'center',
},
input: {
  backgroundColor: '#F0F0F0',
  borderRadius: 10,
  paddingHorizontal: 15,
  paddingVertical: 10,
  marginBottom: 10,
  width: '40%', // Adjust width as needed
  color: '#333', // Text color
  fontSize: 16,
},
closeButton: {
  position: 'absolute',
  top: 10,
  left: 10,
  borderRadius: 20,
  width: 30,
  height: 30,
  alignItems: 'center',
  justifyContent: 'center',
},


});

export function defaultPageTheme() {
  const {theme} = useTheme();
  let styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      alignItems: 'center',
      justifyContent: 'center',
    },
    

  });
  return styles
}