import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './Hero.css'
import { useSelector } from 'react-redux'

const hero = () => {
  const [data, setData] = useState({})
  let  city  = useSelector(state => state)
  console.log(city)

  useEffect(() => {
    axios(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${city}&days=7&aqi=yes&alerts=yes`)
    .then(res => setData(res.data))
  }, [city])

  const weather = data?.current?.condition?.icon || '';
  const temperature = data.current?.feelslike_c || 0;
  const sunset = data?.forecast?.forecastday[0]?.astro?.sunset || "0";
  const location = data?.location?.country + ", " + data?.location?.name || "";

  const date = new Date();
  const day = date.getDay() === 0 ? "Sunday" : date.getDay() === 1 ? "Monday" : date.getDay() === 2 ? "Tuesday" : date.getDay() === 3 ? "Wednesday" : date.getDay() === 4 ? "Thursday" : date.getDay() === 5 ? "Friday" : "Saturday"
  // console.log(data)

  return (
    <>
      <div className='container'>
        <div className='hero'>
          <div className='hero__left'>
            <img src={weather} alt="" />
            <p className='hero__temperature'>{temperature}°</p>
            <p className='hero__location'>{location}</p>
          </div>
          <div className='hero__right'>
            <p className='hero__sunset'>{sunset}</p>
            <p className='hero__day'>Sunset Time,  {day}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default hero