//rfce >> shortcut for boilerplate

import React , {forwardRef} from 'react'
import { Card ,CardContent, Typography} from '@material-ui/core'
import './Message.css';


const Messages = forwardRef(({message,username} , ref) =>{
    const isUser = username == message.userName;

    return (
        <div  ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card  className={isUser ? "message__userCard" : "message__guestCard"}>
            <CardContent>
                <Typography className={isUser ? "message__typo" : "message__typeGuest"}  
                variant="h5" component="h2">
                {!isUser && `${message.userName || "Unknown User"}: `} {message.message}
                </Typography>
                
            </CardContent>
      
            </Card>
        </div>
            
           
    )
})

export default Messages

