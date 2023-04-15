import { Card } from "react-bootstrap";


export default function Event({title,date,src,url}) {
  const evtDate=new Date(date)
  const evtDay= evtDate.toDateString()
  const evtTime=evtDate.toLocaleTimeString()
  return (
    <Card className="mx-auto p-1 mb-1 border">
        <img src={src} alt="event display"   className='d-block mx-auto rounded mt-1 mb-1 evt-img'/>
        <Card.Title className="text-center ">{title}</Card.Title>
        <Card.Text className="text-center">{evtDay}, {evtTime} </Card.Text>

        <a href={url} target="_blank"  rel="noreferrer" className="d-block mx-auto w-50 btn btn-warning">See Details</a>
    </Card>
  )
}
