import React,{ useContext } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

import { MyContext } from '../context';
import { MainLogo } from '../utils/tools';

const StageTwo = () => {
    const context = useContext(MyContext);

    return(
        <>
            <MainLogo/>
            <Text>The looser is</Text>
            <Text style={styles.loserWrapper}>
                {context.state.result}
            </Text>
            <Button
                buttonStyle={styles.button}
                title="Try again"
                onPress={()=> context.getNewLooser()}
            />
             <Button
                buttonStyle={styles.button}
                title="Start over"
                onPress={()=> context.resetGame()}
            />
        </> 
    )
}

const styles = StyleSheet.create({
    loserWrapper:{
    fontSize:30,
    marginTop:30
    },
    button: {
     backgroundColor:'#41b6e6',
     marginTop:20
    },
  });
  

export default StageTwo;