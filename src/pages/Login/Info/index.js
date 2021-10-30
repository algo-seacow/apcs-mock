import React, { useState } from "react";
import './index.css'
import { STU_NAME, STU_ID } from '../../../data/const';

const Info = (props) => {

  const [uid, setUID] = useState('')

  return (
    <div className="info-container">
      <div className="info-header">
        大學程式設計先修檢測
      </div>
      <div className="info-content">
        <pre>{
          "檢測內容：　　程式設計實作題\n" + 
          "檢測開始時間：13:40\n" +
          "檢測時間：　　150 分鐘\n" + 
          "\n" +
          `應測生姓名：　${STU_NAME}\n` +
          `准考證號碼：　${STU_ID}\n` +
          `身分證字號：`
        }</pre>
        <input
          className="info-id-input"
          placeholder={"僅測試, 勿填個資"}
          value={uid}
          onChange={
            (e) => setUID(e.target.value)
          }
          type="password"
        />
        <button
          className="info-login"
          disabled={ uid.length === 0 }
          onClick={ () => props.setUID(uid) }
        >
          登入
        </button>
      </div>
    </div>
  )
}

export default Info;