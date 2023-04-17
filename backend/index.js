const express =require('express')
const request= require('request')
const http=require('http')

const dotenv=require('dotenv')

dotenv.config()

const app=express()
const cors=require('cors')

const server=http.createServer(app)



const port= process.env.PORT || 5000;

const token=process.env.token;
const organization=process.env.organization;


app.use(cors({origin:'https://cameroon-data-community.github.io'}))
app.get('/',(req,res)=>{ // get all upcomming and live events
    
    
    request.get({
      uri:`https://www.eventbriteapi.com/v3/organizations/${organization}/events`,
      headers:{
        'Authorization': `Bearer ${token}`
      }
    },(err,resp,body)=>{      
      if(err){
        console.log(err);
        res.sendStatus(500)
      }
      else if(body){
        let events=[];
        console.log(body);
        body=JSON.parse(body)
        events=body.events.map(evt=>{
            return{
              name:evt.name.text,
              description:evt.description.text,
              start:evt.start.local,
              logo:evt.logo.original.url,
              link:evt.resource_uri,
              venue:evt.online_event==true?'Online':evt.venue_id,
              status:evt.status

            }
        })
        res.send(events) 
      }
      else{
        res.sendStatus(400)
      }
    })
     
    
   
})





server.listen(port, () => {
    console.log(`app  listening on port ${port}`)
  })


  