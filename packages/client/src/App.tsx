import React from 'react';
import Login from './layers/login/Login';
import { useAtom } from 'jotai';
import { userAtom } from './utils/atoms';
import Dashboard from './layers/dashboard/Dashboard';


const App: React.FC = ()  => {

  const [userData] = useAtom(userAtom)

  return (

    <>
      {userData.name.length > 0 ?  <Dashboard /> : <Login />}
    </>
  )
}

export default App