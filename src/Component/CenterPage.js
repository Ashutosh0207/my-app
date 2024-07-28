import React from 'react'
import './CenterPage.css'
import qr from '../img/qr.png'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';

const CenterPage = () => {
  return (
    <div className='centerPage'>
        <h1 className='center-page-title'>Scavenger of The Year</h1>
        <img className='qr_img img-fluid rounded mx-auto d-block' src={qr} alt=''/>
        <button type="button" class="qr_btn btn btn-outline-success">Scan here</button>
    </div>
  )
}

export default CenterPage