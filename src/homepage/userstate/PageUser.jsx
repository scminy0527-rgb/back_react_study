import React, { useContext, useEffect } from "react";
import { HomePageContext } from "../homePageContext";

const PageUser = () => {
  const { state, actions } = useContext(HomePageContext);
  // console.log(actions);

  const { changeName } = actions;

  useEffect(() => {
    changeName("이규학");
  }, []);
  return (
    <div>
      <p>유저 정보를 등록합니다.</p>
    </div>
  );
};

export default PageUser;
