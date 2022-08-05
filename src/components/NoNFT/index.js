import React from "react";
import sad from "../../assets/img/sad.svg";

export const NoNFT = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6 mx-auto text-center">
          <img alt="sad" src={sad} />
          <p className="lead font-weight-light mt-4">It seems that you don't have any NFT in your wallet address.</p>
          <button type="button" className="btn btn-dark btn-round mb-0 mt-4">Back to main page</button>
        </div>
      </div>
    </div>
  );
};

export default NoNFT;
