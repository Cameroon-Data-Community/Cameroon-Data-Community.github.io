const express =require('express')
const request= require('request')
const http=require('http')
const dotenv=require('dotenv')
const serverless = require('serverless-http');

dotenv.config()

const app=express()
const cors=require('cors')
const server=http.createServer(app)

const port= process.env.PORT || 5000;
const token=process.env.token;
const organization=process.env.organization;

app.use(cors('*'))
app.get('/', (req, res) => {
  // get all upcoming and live events
  request.get({
    uri:`https://www.eventbriteapi.com/v3/organizations/${organization}/events/?time_filter=current_future`,
    headers:{
      'Authorization': `Bearer ${token}`
    }
  }, (err, resp, body) => {      
    if (err) {
      console.log(err);
      res.sendStatus(500)
    }
    else if (body) {
      let events=[];
      //console.log(body);
      body=JSON.parse(body)
      events=body.events.map(evt => {
        return{
          name:evt.name.text,
          description:evt.description.text,
          start:evt.start.local,
          logo:evt.logo.original.url,
          link:evt.resource_uri,
          venue:evt.online_event==true?'Online':evt.venue_id
        }
      })
      res.send(events) 
    }
    else{
      res.sendStatus(400)
    }
  })
})

module.exports.handler = serverless(app);