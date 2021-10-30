import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css';
import { STU_ID } from '../../data/const';
import Timer from '../Timer/index';

const Footer = () => {
  const [ip, setIP] = useState('0.0.0.0');

  useEffect(() => {
    const getIP = async () => {
      const res = await axios.get('https://geolocation-db.com/json/')
      setIP(res.data.IPv4);
    }

    getIP();
  })
  
  const getFooterInfo = () => {
    return `本機IP: ${ip}  版本:b8e3c  准考證號碼:${STU_ID}`
  }

  const toCurrentString = (time) => {
    return `現在時間: ${new Date(time).toLocaleString('zh-TW', {timeZone: 'Asia/Taipei', hour12: false})}`
  }

  return (
    <div className="footer-container">
      <div>{getFooterInfo()}</div>
      <Timer child={toCurrentString} />
    </div>
  );
}

export default Footer;