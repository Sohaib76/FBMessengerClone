import React , {useState,useEffect} from 'react'
import { Button,FormControl ,InputLabel,Input} from '@material-ui/core';
import Messages from './Messages';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



const FBMessengerClone = ()=>{

    const [input,setInput] =useState('');
    const [messages,setMessages] =useState([]);
    const [userName, setUserName] = useState('')



    useEffect(() => {
        db.collection('messages')
        .orderBy('timestamp','desc')
        .onSnapshot(snapshot => {
            setMessages(snapshot.docs.map(doc=> ({id:doc.id,message:doc.data()})))
        })

    }, [])


    useEffect(() => {
        setUserName(prompt("Please Enter Your Name:"))

    }, [])


    const sendMessage = (event)=>{
        event.preventDefault()

        db.collection('messages').add({
            message: input,
            userName : userName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
            
        })

        // setMessages([...messages,{userName:userName, message:input}])
        setInput('')
    }

 
  //  'https://facebookbrannd.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100'
    return(
    <div className="App">
        <img style={{"marginTop":10}} src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"/>
        <h1>Messenger App</h1>
        <h2>Welcome {userName}</h2>

        <form className="app__form">
        <FormControl className="app__formControl">
            {/* <InputLabel >Enter Message ...</InputLabel> */}
            <Input className="app__input" placeholder="Enter Message ..." value={input} onChange={e => setInput(e.target.value)}/>
            
            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
                <SendIcon/>
            </IconButton>
            

        </FormControl>
            {/* <input value={input} onChange={e => setInput(e.target.value)}/> */}
        </form>

        <FlipMove>
        {
            messages.map(({id,message})=>(
                <Messages key={id} username={userName} message={message}/>
            ))
        }
        </FlipMove>
        
        
    </div>
    )
    
}

export default FBMessengerClone