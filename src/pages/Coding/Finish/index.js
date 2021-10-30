import React, { useEffect, useState } from "react";
import './index.css'
import { Link } from 'react-router-dom'

const Finish = () => {

  const [isRet, setIsRet] = useState(false);

  useEffect( () => {
    setTimeout(() => setIsRet(true), 3000)
  }, [])

  return (
    <>
      <pre className="finish-container">{
        "自動驗證完畢，本節次檢測結束。\n" +
        "請靜候監考人員宣佈後方可離場。"
      }
      <Link to={isRet ? "/" : "#"} className={`finish-return ${isRet ? undefined : 'hidden'}`}>回到首頁</Link>
      </pre>
    </>
  )
}

export default Finish;