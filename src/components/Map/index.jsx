import React from 'react'
import './Map.css'

const map = () => {
  return (
    <>
      <div className='container'>
        <div className='map__container'>
          <iframe className='map' id="map" src="https://maps.google.com/maps?q=Tashkent%20Dates%10Products&amp;amp;t=&amp;amp;z=12&amp;amp&amp;output=embed" width="100%" height="250" allowfullscreen="" frameborder="0"></iframe>
        </div>
      </div>
    </>
  )
}

export default map