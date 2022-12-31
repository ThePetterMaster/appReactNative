import { Text, View ,TextInput,TouchableOpacity, FlatList, Alert} from 'react-native';
import {Participant} from '../../components/Participant'
import {styles} from './styles'
import React,{useState} from 'react';
export function Home() {
  const [participants,setParticipants]=useState<string[]>(["Netenho","Stompa"]);
  const [participantName,setParticipantName]=useState('');
    function handleParticipantAdd(){
        if(participants.includes(participantName)){
          return Alert.alert('Participante existe','Já existe um participante na lista')
        }
        setParticipants(prevState=>[...prevState,participantName])
        setParticipantName("");
      }
    function handleParticipantRemove(name:string){
      Alert.alert('Remover',`Remover o participante ${name}?`,[
        {
          text:'Sim',
          onPress:()=>setParticipants(prevState=>prevState.filter(participant=>participant!==name))
        },
        {
          text:'Não',
          style:'cancel'
        }
      ])
    }
  return (
    <View style={styles.container} >
      <Text style={styles.eventName}>Evento do Netenho</Text>
      <Text style={styles.eventDate}> Sexta, 30 de Fevereiro de 2022</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder="Nome do prticipante"
            placeholderTextColor='#6b6b6b'
            value={participantName}
            onChangeText={text=>setParticipantName(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
            <Text style={styles.buttonText}>
                +
            </Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={participants}
        keyExtractor={item=>item}
        renderItem={({item})=>(
          <Participant 
            name={item}
            key={item}
            onRemove={()=>handleParticipantRemove(item)}/>
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={()=>(
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicioe participantes.
          </Text>
        )}
      />
     


    </View>
  );
}
