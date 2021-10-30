import React, { useState } from 'react';
import { LANGUAGE_ID, EXTENSION } from './const';
import API from '../../../services/api';
import problems from '../../../data/problems/20160305';

import './index.css'

const Problem = (props) => {
  const [code, setCode] = useState('')
  const [lang, setLang] = useState('cpp')

  const hiddenFileInput = React.useRef(null);
  const handleClick = e => {
    hiddenFileInput.current.click();
  }

  const handleChange = async (event) => {
    const fileUploaded = event.target.files[0];
    const fr = new FileReader()
    fr.onload = async () => {
      setCode(fr.result)
      hiddenFileInput.current.value = ""
      const token = await API.call('POST', '/submission', {
        "language_id": LANGUAGE_ID[lang],
        "source_code": Buffer.from(fr.result).toString('base64')
      })
    }
    if (fileUploaded) {
      fr.readAsText(fileUploaded)
    }
  };

  return (
    <div className="problem">
      <div className="problem-title">第 {props.id} 題</div>
      <button
        className="problem-download-button"
        onClick={() => window.open(problems[`p${props.id}`])}
      >
        題目下載
      </button>
      <div className="problem-submit">
        <select
          className="problem-submit-language"
          onChange={(e) => setLang(e.target.value)}
          value={lang}
        >
          <option value="c">C Files (*.c)</option>
          <option value="cpp">C++ Files (*.cpp)</option>
          <option value="java">Java Files (*.java)</option>
          <option value="py2">Python2 (*.py)</option>
          <option value="py3">Python3 (*.py)</option>
        </select>
        <button
          className="problem-submit-button"
          onClick={handleClick}
        >
          上傳程式碼
        </button>
        <input
          type="file"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{display: 'none'}}
          accept={EXTENSION[lang]}
        />
      </div>
      <div className="code-block">
        <div>程式碼預覽</div>
        <textarea
          cols={80}
          rows={12}
          wrap='off'
          className="code-input"
          readOnly={true}
          defaultValue={code} />
      </div>
    </div>
  )
}

export default Problem;