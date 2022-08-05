import * as React from 'react';
import { useLocation } from 'react-router-dom';
import bg from "../../assets/img/bg-header.jpg";

const PageNotFound = () => {
  const { pathname } = useLocation();
  return (
    <header className='p-5 h-100-vh'>
      <div className='page-header overflow-visible mb-0 border-radius-xl align-items-center min-vh-75 p-2 h-100' style={{backgroundImage: `url(${bg})`}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-7 mx-auto d-flex justify-content-center flex-column text-center">
              <h2 className="mb-4 font-weight-bolder text-white">Page not found</h2>
              <h1 className="mb-4 display-2 font-weight-bolder text-white">404</h1>
              <p className="h4 font-weight-normal text-white">
                {pathname}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageNotFound;
