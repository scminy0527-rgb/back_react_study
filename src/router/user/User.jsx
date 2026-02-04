import React, { useContext, useEffect } from 'react';
import { RouteContext } from '../../context/expert/RouteContext';

// 컨텍스트에 회원 정보를 담는다!
const User = () => {

  const user = {
    userName: "홍길동",
    userAge: 20,
    userAddress: "서울시 강남",
    userPhone: "010-1234-1234",
  }

  const {state, actions} = useContext(RouteContext)
  const {setUser, setPreviousUrl} = actions

  useEffect(() => {
    setUser(user)
  }, [])
  
  console.log("state", state)
  console.log("actions", actions)

  return (
    <div>
      회원
    </div>
  );
};

export default User;