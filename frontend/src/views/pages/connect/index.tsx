import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMoralis } from "react-moralis";

const Connect = () => {
  const { authenticate, isAuthenticated, user } = useMoralis();
  const navigate = useNavigate();

  const onMetamask = () => {
    if (!isAuthenticated) {
      authenticate().then((res) => {
        console.log(res);
        navigate('/connected');
      });
    }
  };

  return (
    <main className="main">
      <div className="authincation section-padding">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-4">
                <a href="/">
                  <img src="./images/logoi.png" alt="" />
                </a>
                <h4 className="card-title mt-5">Connect your wallet.</h4>
                <p className="px-5 mt-3">
                  Connect with one of our available wallet info providers or
                  create a new one.
                </p>
              </div>
              <div className="auth-form">
                <div className="row">
                  <div className="col-xl-6">
                    <a className="card text-center" onClick={onMetamask}>
                      <div className="card-body">
                        <img
                          src="./images/wallet/1.webp"
                          alt=""
                          width="50"
                          className="mb-3"
                        />
                        <h5 className="mb-0">MetaMask</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a className="card text-center" href="/dashboard.html">
                      <div className="card-body">
                        <img
                          src="./images/wallet/2.webp"
                          alt=""
                          width="50"
                          className="mb-3"
                        />
                        <h5 className="mb-0">Coinbase</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a className="card text-center" href="/dashboard.html">
                      <div className="card-body">
                        <img
                          src="./images/wallet/3.webp"
                          alt=""
                          width="50"
                          className="mb-3"
                        />
                        <h5 className="mb-0">WalletConnect</h5>
                      </div>
                    </a>
                  </div>
                  <div className="col-xl-6">
                    <a className="card text-center" href="/dashboard.html">
                      <div className="card-body">
                        <img
                          src="./images/wallet/4.webp"
                          alt=""
                          width="50"
                          className="mb-3"
                        />
                        <h5 className="mb-0">Formatic</h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Connect;
