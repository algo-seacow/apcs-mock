import React, {useEffect, useState} from "react";
import './index.css'
import { useHistory } from 'react-router';
import API from "../../services/api";

import Info from './Info/index';
import Rule from './Rule/index';

function Login() {
  const [uid, setUID] = useState('');
  const [loading, setLoading] = useState(true);
  let history = useHistory();

  useEffect(() => {
    const getProfile = async() => {
      const res = await API.call('GET', '/profile', {});
      if (res.start)
        history.push('/coding')
      setLoading(false);
    }

    getProfile();
  }, [history]);

  const start = async () => {
    const res = await API.call('GET', '/start', {})

    if (res)
      history.push('/coding')
  }

  if (loading)
    return <div />

  if (uid.length === 0)
    return <Info setUID={setUID} />
  
  return <Rule start={start} />
}

export default Login;