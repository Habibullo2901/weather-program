import React, { useEffect } from 'react'
import './Navbar.css'
import { IoSearch } from "react-icons/io5";
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const navbar = () => {
  const dispatch = useDispatch();
  const [ city, setCity ] = useState('Tashkent')

 useEffect(() => {
  dispatch({ type: 'SET_CITY', city })
 }, [city])
  return (
    <>
      <div className='container'>
        <nav className='navbar'>
          <ul>
            <li><p className='navbar__title'>Weather App</p></li>
            <li>
              {/* <form className='city__form'>
                <input type="text" className='city__input' placeholder='Search any city...' /><IoSearch className='search__icon' />
              </form> */}
              <select className='select' onChange={(e) => setCity(e.target.value)}>
                <option default value="Tashkent">Tashkent</option>
                <option value="Dubai">Dubai</option>
                <option value="Tokio">Tokio</option>
                <option value="Pekin">Pekin</option>
                <option value="Washington">Washington</option>
              </select>
            </li>
            <li>
              <input type="checkbox" id="switch" />
              <label for="switch">
                <span class="toggle">
                  <span class="circle"></span>
                </span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default navbar