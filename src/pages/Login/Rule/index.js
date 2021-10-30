import React from 'react';
import './index.css'

const Rule = (props) => {

  return (
    <div className="rule-container">
      <div className="rule-title">
        程式設計實作題
      </div>
      <pre className="rule-brief">
      {"檢測時間：150分鐘\n題數：4題"}
      </pre>
      <div className="rule-details-title">檢測注意事項</div>
      <pre className="rule-details-content">{
        "1. 檢測時間共150分鐘，按下本頁下方[開始檢測並開始計時]按鍵後開始計時。\n" +
        "2. 檢測期間，如因病、因故(如廁等)需暫時離場時，須經監試人員同意，並在監試人員陪同始准離場。\n" +
        "3. 離場應測生經治療或處理後，如檢測尚未結束，仍可入場，但不得請求延長時間或補考。\n" +
        "4. 題目下載後將自動儲存於桌面。\n" +
        "5. 每題均需自行上傳程式碼，程式碼可重複上傳，評分以最後上傳版本為主。"
      }</pre>
      <button
        onClick={ props.start }
      >
        開始檢測並開始計時
      </button>
    </div>
  )
}

export default Rule;