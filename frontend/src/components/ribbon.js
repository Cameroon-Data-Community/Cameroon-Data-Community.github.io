import React from 'react'
import { Alert } from 'react-bootstrap'

export default function Ribbon() {
    const  link='https://bit.ly/cdc-journey-data-pro-1st-anniv'
  return (

    <div className='bg-success px-2' id='event-ribbon' cl>
        <p className='text-light text-center fs-6 d-block'>As part of our anniversary we are launching "The Journey of a Data Proffesional" (23 September - 8 October).
        <span className='text-light'> Register here and join the event: <u><a href={link} target='_blank'>{link}</a></u></span></p>
    </div>
  )
}
