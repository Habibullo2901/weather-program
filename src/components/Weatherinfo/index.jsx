import React from 'react'
import './Weather.css'
import { BsDropletHalf } from "react-icons/bs";
import { IoSunnyOutline } from "react-icons/io5";
import { FiSunset } from "react-icons/fi";
import { FiSunrise } from "react-icons/fi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useState, useEffect } from 'react'

const weatherinfo = () => {
  const selectedcity = useSelector(state => state)
  const [ data , setData ] = useState({})
  useEffect(() => {
  axios(`https://api.weatherapi.com/v1/forecast.json?key=644f6ce0ca9e401ebb891832211707&q=${selectedcity}&days=7&aqi=yes&alerts=yes`)
  .then(res => setData(res.data))  
  }, [selectedcity])

  const humidity = data?.current?.humidity || 0;
  const uv = data?.current?.uv || 0;
  const sunset = data?.forecast?.forecastday[0]?.astro?.sunset || "0";
  const sunrise = data?.forecast?.forecastday[0]?.astro?.sunrise || "0";
  const pressure = data?.current?.pressure_mb || 0;
  const wind = +data?.current?.wind_degree || 0;

  const firstday = data?.forecast?.forecastday[0]?.day?.condition?.icon || "";
  const secondday = data?.forecast?.forecastday[1]?.day?.condition?.icon || "";
  const thirddday = data?.forecast?.forecastday[2]?.day?.condition?.icon || "";

  
  const date = new Date();
  const day1 = date.getDay() === 0 ? "Sunday" : date.getDay() === 1 ? "Monday" : date.getDay() === 2 ? "Tuesday" : date.getDay() === 3 ? "Wednesday" : date.getDay() === 4 ? "Thursday" : date.getDay() === 5 ? "Friday" : "Saturday"
  const day2 = date.getDay() === 7 ? "Sunday" : date.getDay() === 0 ? "Monday" : date.getDay() === 1 ? "Tuesday" : date.getDay() === 2 ? "Wednesday" : date.getDay() === 3 ? "Thursday" : date.getDay() === 4 ? "Friday" : "Saturday"
  const day3 = date.getDay() === 6 ? "Sunday" : date.getDay() === 7 ? "Monday" : date.getDay() === 0 ? "Tuesday" : date.getDay() === 1 ? "Wednesday" : date.getDay() === 2 ? "Thursday" : date.getDay() === 3 ? "Friday" : "Saturday"

  return (
    <>
      <div className='container'>
        <div className='weather__info'>
          <div className='weather__parameters'>
            <div className='weather__parameter1'>
              <div className='block'>
                <div className='parameter'>
                  <BsDropletHalf className='icon' />
                  <ul>
                    <li>Humidity</li>
                    <li>{humidity}%</li>
                  </ul>
                </div>
                <div className='parameter'>
                  <IoSunnyOutline  className='icon' />
                  <ul>
                    <li>UV index</li>
                    <li>{uv} out of 10</li>
                  </ul>
                </div>
              </div>
              <div className='border'></div>
              <div className='block'>
                <div className='parameter'>
                  <FiSunset className='icon' />
                  <ul>
                    <li>Sunset</li>
                    <li>{sunset}</li>
                  </ul>
                </div>
                <div className='parameter'>
                  <FiSunrise className='icon' />
                  <ul>
                    <li>Sunrise</li>
                    <li>{sunrise}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='weather__parameter2'>
              <div className='paskal'>
                <p>{pressure}Pa</p>
              </div>
              <div className='compas'>
                <div transform={`rotate(${wind}deg)`} className='arrow__cont'><FaLongArrowAltUp className='arrow' /></div>
              </div>
            </div>
          </div>
          <div className='weather__chart'>
            <div><p>{day1} </p><img src={firstday} alt="" /></div>
            <div><p>{day2} </p><img src={secondday} alt="" /></div>
            <div><p>{day3} </p><img src={thirddday} alt="" /></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default weatherinfo