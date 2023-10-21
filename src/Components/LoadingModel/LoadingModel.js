import React, {useState, useEffect} from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './LoadingModel.css';


function LoadingModel() {

  return (
    <div className="loading-modal-style">
      <div className="loading-background"> 
      <RotatingLines
					className="text-center"
					strokeColor="grey"
					strokeWidth="5"
					animationDuration="1"
					width="96"
					visible={true}
				/>
      </div>
    </div>
  )
}

export default LoadingModel