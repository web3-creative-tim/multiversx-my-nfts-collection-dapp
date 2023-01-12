/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks/account';
import Modal from "react-bootstrap/Modal";
import NoNFT from "../../components/NoNFT";
import "../../assets/loading-dot.css";
import { elrondApi, collectionTicker } from "../../config";

const MyCollection = () => {
  const ref = React.createRef();
  const { address } = useGetAccountInfo();

  const [loading, setLoading] = useState(true);
  const [elrondData, setElrondData] = useState([]);
  const [myNFTS, setMyNFTS] = useState([]);
  const [collapseIndex, setCollapseIndex] = useState(false);
  const [userHaveNFT, setUserHaveNFT] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    fetch(
      `${elrondApi}/accounts/${address}/nfts?size=10000`,
      {
        method: "GET"
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setElrondData(Object.entries(data));
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
  }, [address]);

  useEffect(() => {
    // Check if I have NFT in my wallet
    const result = elrondData
      .map((data) => (data[1].identifier.includes(collectionTicker) ? data[1] : null))
      .filter((el) => el !== null);

    // All NFT data are inserated to this state
    setMyNFTS(result);
  }, [elrondData]);

  useEffect(() => {
    // Check if you have more than 6 NFTs to be collapsible
    myNFTS.forEach((data, i) => {
      if (i > 5) setCollapseIndex(true);
    });


    // If user don't have any NFT we display another component for him
    setUserHaveNFT(myNFTS.length !== 0 ? true : false);
  }, [myNFTS]);

  const handleClose = () => setModalIsOpen(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState([]);
  const [modalImage, setModalImage] = React.useState([]);

  const handleCollapse = () => {
    setTimeout(() => {
      setIsCollapsed(true);
    }, 500);
    
    ref.current.addEventListener("hide.bs.collapse", function(e) {    
      e.preventDefault();

      document.getElementById("myNFTs").scrollIntoView({
        behavior: "smooth"
      });

      setTimeout(() => {
        this.classList.remove("show");
        setIsCollapsed(false);
      }, 1000);
    });
  };

  const [nftsData, setNftsData] = useState([]);

  useEffect(() => {
    const result = myNFTS.map((data) => {
      return {
        name: data.name,
        nonce: data.nonce,
        image: data.url,
        attributes: Object.entries(data.metadata.attributes),
        rarity: Object.entries(data.metadata.rarity ? data.metadata.rarity : [])
      }
    });

    setNftsData(result);
  }, [myNFTS]);

  return userHaveNFT ? (
    <div className="container py-4 mt-n5" id="myNFTs">
      <div className="row">
        <div className="col-lg-12 col-xl-8 mx-auto">
          {loading ? (
            <div className="d-flex justify-content-center">
              <div className="dot-pulse"></div>
            </div>
          ) : (
            <>
              <div
                className={`collapse position-relative ${collapseIndex ? "collapse-visible" : "d-block"
                  }`}
                id="collapseNfts"
                ref={ref}
              >
                <div className="card card-body card-plain px-7 px-md-5">
                  <div className="row justify-content-center justify-content-lg-start">

                    {nftsData.map((data, i) => (

                      <div key={i} className="col-md-5 col-lg-4">
                        <div className="card card-nft shadow mb-4">
                          <div className="card-header p-0 card-header-mx-2 card-header-mt-2 position-relative z-index-1">
                            <div className="hover-img border-radius-lg">
                              <img
                                src={`${data?.image}`}
                                className="img-fluid border-radius-lg"
                                alt={`img-${i}`}
                              />

                              <button
                                className="btn btn-hover-nft btn-dark position-absolute mx-6 mx-sm-4 px-2 opacity-0"
                                onClick={() => {
                                  setModalData([data]);
                                  setModalImage(data?.image);
                                  setModalIsOpen(true);
                                }}
                              >
                                view attributes
                              </button>
                            </div>
                          </div>
                          <div className="card-body py-3 d-flex justify-content-center">
                            <h6 className="m-0 text-capitalize">
                              {data?.name}                              
                            </h6>
                          </div>
                        </div>
                      </div>
                    ))
                    }
                  </div>
                </div>
              </div>
              <div className={`text-center ${collapseIndex ? "" : "d-none"}`}>
                <button
                  className="btn btn-outline-dark btn-round mt-4 mb-0"
                  onClick={() => {
                    handleCollapse()
                  }}
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNfts"
                  aria-expanded="false"
                  aria-controls="collapseNfts"
                >
                  {isCollapsed ? (
                    <>
                      View Less <i className="fas fa-chevron-up ms-2"></i>
                    </>
                  ) : (
                    <>
                      View All <i className="fas fa-chevron-down ms-2"></i>
                    </>
                  )}
                </button>
              </div>
            </>
          )}
          <Modal
            show={modalIsOpen}
            onHide={handleClose}
            size="lg"
            className="d-flex align-items-center"
          >
            <Modal.Body className="p-0">
              <button
                type="button"
                className="btn btn-white border-0 text-dark shadow-none my-1 top-0 position-absolute z-index-1"
                style={{ right: "0" }}
                onClick={handleClose}
                aria-label="Close"
              >
                <i className="fas fa-times"></i>
              </button>
              <div className="card text-center shadow-none">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-sm-5 col-md-6 col-lg-4 mx-sm-auto d-flex align-items-center">
                      <img
                        src={modalImage}
                        className="img-fluid border-radius-lg shadow d-none d-sm-block"
                        alt=""
                      />
                    </div>
                    <div className="col-md-12 col-lg-8 mt-4 mt-lg-0">
                      <div className="row">
                        <div className="col-md-12 text-start">
                          <h5 className="text-capitalize mb-3 text-center text-lg-start">
                            {modalData.map((data, i) => {
                              return <span key={i}>
                                  {data?.name} &nbsp;
                                </span>
                            })}
                          </h5>
                        </div>

                        <div className="col-md-6 col-sm-6">
                          <p className="text-center text-sm-start text-dark text-sm font-weight-normal mb-2">
                            Attributes
                          </p>
                        </div>
                        {modalData.map((data, i) => {
                          if((data?.rarity[2])?.[1]){                          
                            return <div className="col-md-6 col-sm-6" key={i}>
                              <p className="text-center text-sm-end text-dark text-sm font-weight-normal mb-4 mb-lg-2">
                                Rarity Score: <span className="font-weight-bolder">{data?.rarity[2][1].toFixed(3)}</span>
                              </p>
                            </div>
                          } else {
                            return
                          }
                        })}
                        
                      </div>

                      {modalData.map((data, i) => (
                        <div className="row" key={i}>
                          {data.attributes.map((attr, i) => (
                            <div className="col-5 card card-body py-2 shadow-none border text-start m-2">
                              <h6 className="text-xs text-muted font-weight-normal mb-1">
                                {attr[1]?.trait_type}
                              </h6>
                              <h6 className="col-md text-sm m-0">
                                {attr[1]?.value}
                              </h6>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  ) : (
    <NoNFT />
  );
};

export default MyCollection;
