import React from "react";

import { Loading } from "../common/Loading";

export const WelcomePage: React.FC = (): JSX.Element => {
  return (
    <>
      <div className="container">
        <h1 style={{alignSelf: 'center'}}>Doing Something</h1>
        <Loading />
      </div>
    </>
  );
};
