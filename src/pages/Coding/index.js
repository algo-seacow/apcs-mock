import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import API from '../../services/api';
import Timer from '../../components/Timer/index';
import Instruction from './Instruction/index';
import Problem from './Problem/index';
import Submission from './Submission/index';
import Submit from './Submit/index';
import Finish from './Finish/index';
import './index.css'


const Coding = () => {

  let history = useHistory();
  const [start, setStart] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [checkeds, setCheckeds] = useState([1, 0, 0, 0])
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    const getProfile = async() => {
      const res = await API.call('GET', '/profile', {});
      if (res.start === undefined)
        history.push('/');
      setStart(res.start);
      setLoading(false);
    }

    getProfile();
  }, [history]);

  const finish = async() => {
    const res = await API.call('GET', '/finish', {});
    if (res)
      setIsFinish(true);
  }

  const getRemainTime = (time) => {
    if (start === undefined)
      return <div className="timer-container" />
    const rem = Math.floor(150 * 60 - (time - start) / 1000);

    if (rem < 0)
      history.push('/');
      
    const minute = Math.floor(rem / 60)
    const second = rem - minute * 60;
    
    return (
      <div className="timer-container">
        {`距離檢測時間結束尚有 ${minute} 分 ${second} 秒`}
      </div>
    )
  }

  if (loading)
    return <div />

  if (isFinish)
    return <Finish />

  return (
    <div className="coding-container">
      <Timer child={getRemainTime} />
      <Instruction />
      <div className="problem-container">
        <Problem id={1} />
        <Problem id={2} />
        <Problem id={3} />
        <Problem id={4} />
      </div>
      <div className="submission-container">
        <Submission checkeds={checkeds} setCheckeds={setCheckeds} />
      </div>
      <div className="submit-container">
        <Submit finish={finish}/>
      </div>
    </div>
  );
}

export default Coding;