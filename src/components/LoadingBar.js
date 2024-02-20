import React ,{useEffect} from "react";
import { useSelector } from 'react-redux';
import { useLoadingBar } from "../hooks/useLoadingBar";

const LoadingBar = () => {    
   const [loading]  = useLoadingBar()
  
  return (
    <div className={loading?.isLoading ? "loading-div" : "loading-div show-hide"} >
          <h2>{loading?.loadingText}</h2> 
          <div className="spinner-group">
              <div className="spinner-grow text-primary" role="status"></div>
              <div className="spinner-grow text-secondary" role="status"></div>
              <div className="spinner-grow text-success" role="status"></div>
              <div className="spinner-grow text-danger" role="status"></div>
          </div>
    </div>
  );

};

export default LoadingBar