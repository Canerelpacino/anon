import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, isconnected } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import $ from "jquery";



const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function App() {

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(``);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;

   /*  if (mintAmount > 1) {
      cost = 3000000000000000;
    } */

    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Have some patience...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .Mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong.");
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `You got it!!!`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 10) {
      newMintAmount = 10;
    }
    setMintAmount(newMintAmount);
  };


  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const connected = () => {
    document.getElementById("connectbtn").style.display = "none";
    document.getElementById("connect-phone").style.display = "none";
    document.getElementById("text1").style.display = "none";
  };

  const t1 = () => {
    document.getElementById("t1").style.display = "none";
    document.getElementById("t2").style.display = "block";
  };

  const t2 = () => {
    document.getElementById("t2").style.display = "none";
    document.getElementById("t3").style.display = "block";

  };

  const t3 = () => {
    document.getElementById("t3").style.display = "none";
    document.getElementById("t4").style.display = "block";
  };

  const t4 = () => {
    document.getElementById("t4").style.display = "none";
    document.getElementById("t5").style.display = "block";
  };

  const t5 = () => {
    document.getElementById("t5").style.display = "none";
    document.getElementById("t6").style.display = "block";
  };

  const t6 = () => {
    document.getElementById("t6").style.display = "none";
    document.getElementById("t7").style.display = "block";
  };

  const t7 = () => {
    document.getElementById("t7").style.display = "none";
    document.getElementById("t8").style.display = "block";
  };

  const t8 = () => {
    document.getElementById("t8").style.display = "none";
    document.getElementById("t9").style.display = "block";
  };

  const t9 = () => {
    document.getElementById("t9").style.display = "none";
    document.getElementById("t91").style.display = "block";
  };

  const t91 = () => {
    document.getElementById("t91").style.display = "none";
    document.getElementById("t92").style.display = "block";
  };

  const t92 = () => {
    document.getElementById("t92").style.display = "none";
    document.getElementById("t93").style.display = "block";
  };

  const t93 = () => {
    document.getElementById("t93").style.display = "none";
    document.getElementById("t94").style.display = "block";
  };

  const t94 = () => {
    document.getElementById("t94").style.display = "none";
    document.getElementById("t10").style.display = "block";
  };


  const t10 = () => {
    document.getElementById("t10").style.display = "none";
    document.getElementById("t10-5").style.display = "block";
  };

  const t105 = () => {
    document.getElementById("t10-5").style.display = "none";
    document.getElementById("t10-6").style.display = "block";
  };

  const t106 = () => {
    document.getElementById("t10-6").style.display = "none";
    document.getElementById("t10-7").style.display = "block";
  };

  const t107 = () => {
    document.getElementById("t10-7").style.display = "none";
    document.getElementById("t10-8").style.display = "block";
  };

  const t108 = () => {
    document.getElementById("t10-8").style.display = "none";
    document.getElementById("t10-9").style.display = "block";
  };

  const t109 = () => {
    document.getElementById("t10-9").style.display = "none";
    document.getElementById("t10-10").style.display = "block";
  };

  const t1010 = () => {
    document.getElementById("t10-10").style.display = "none";
    document.getElementById("t11").style.display = "block";
  };


  const t11 = () => {
    document.getElementById("t11").style.display = "none";
    document.getElementById("t12").style.display = "block";
  };

  const t12 = () => {
    document.getElementById("t12").style.display = "none";
    document.getElementById("t13").style.display = "block";
  };

  const t13 = () => {
    document.getElementById("t13").style.display = "none";
    document.getElementById("t14").style.display = "block";
  };

  const t14 = () => {
    document.getElementById("t14").style.display = "none";
    document.getElementById("t15").style.display = "block";
  };

  const t15 = () => {
    document.getElementById("t15").style.display = "none";
    document.getElementById("t16").style.display = "block";
  };

  const t16 = () => {
    document.getElementById("t16").style.display = "none";
    document.getElementById("t17").style.display = "block";
  };

  const t17 = () => {
    document.getElementById("t17").style.display = "none";
    document.getElementById("t18").style.display = "block";
  };

  const t18 = () => {
    document.getElementById("t18").style.display = "none";
    document.getElementById("t19").style.display = "block";
  };

  const t19 = () => {
    document.getElementById("t19").style.display = "none";
    document.getElementById("t20").style.display = "block";
  };

  return (
    <div>
      <div className="home">

        <div style={{width: '100%', display: 'flex', flexDirection: 'row', position: 'absolute'}}>
          <img src="/config/images/anon.png" style={{width: '200px', marginLeft: '30px', marginTop: '-30px'}}></img>
        </div>

        <div style={{width: '100%', backgroundColor: 'black', height: '100vh', display: 'flex'}}>
          <div id="connectbtn" style={{display: 'none', margin: 'auto', cursor: 'pointer'}}
              onClick={(e) => {
                e.preventDefault();
                dispatch(connect());
                getData();
                connected();
              }}
            >
              CONNECT
            </div>

            <div id="t1" onClick={t1} style={{width: '80%', display: 'block', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Go back to Icy.Tools</p>
            </div>

            <div id="t2" onClick={t2} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>OpenSea?</p>
            </div>

            <div id="t3" onClick={t3} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}> Your navigation is right here in plain sight</p>
            </div>

            <div id="t4" onClick={t4} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Congrats you got a virus, congrats we are now draining you</p>
            </div>

            <div id="t5" onClick={t5} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>change to accessing your private keys...</p>
            </div>

            <div id="t6" onClick={t6} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>buying azukis and bored apes with your ETH...</p>
            </div>

            <div id="t7" onClick={t7} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}> Who I am is not important, art is</p>
            </div>

            <div id="t8" onClick={t8} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>by ANON</p>
            </div>

            <div id="t9" onClick={t9} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>So ask yourself, what are you really doing here</p>
            </div>

            <div id="t91" onClick={t91} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Looking for art?</p>
            </div>

            <div id="t92" onClick={t92} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Looking for money?</p>
            </div>

            <div id="t93" onClick={t93} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Looking for love?</p>
            </div>

            <div id="t94" onClick={t94} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Are you happy?</p>
            </div>

            <div id="t10" onClick={t10} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Oh, you wanna mint me? Gotcha.</p>
            </div>

            <div id="t10-5" onClick={t105} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>click here to mint</p>
            </div>
            
            <div id="t10-6" onClick={t106} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>mint</p>
            </div>

            <div id="t10-7" onClick={t107} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>M</p>
            </div>

            <div id="t10-8" onClick={t108} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MI</p>
            </div>

            <div id="t10-9" onClick={t109} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MIN</p>
            </div>

            <div id="t10-10" onClick={t1010} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MINT</p>
            </div>

            <div id="t11" onClick={t11} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>sike</p>
            </div>

            <div id="t12" onClick={t12} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}> alright jokes beside</p>
            </div>

            <div id="t13" onClick={t13} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>click here to mint</p>
            </div>

            <div id="t14" onClick={t14} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '3em'}}>MINT</p>
            </div>

            <div id="t15" onClick={t15} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '5em'}}>MINT</p>
            </div>

            <div id="t16" onClick={t16} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '7em'}}>MINT</p>
            </div>

            <div id="t17" onClick={t17} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '12em'}}>MINT</p>
            </div>

            <div id="t18" onClick={t18} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>I give up lmao</p>
            </div>

            <div id="t19" onClick={t19} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '5em'}}>CONNECT</p>
            </div>

            <div id="t20" style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '3em'}}>Coming soon, for anons only.</p>
            </div>

        </div>

        {/*Mint Section*/}
        <div className="mint">
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <div
                className="soldout" style={{ fontFamily: "'tiny', cursive", color: 'black'}}
              >
                SOLD OUT!
              </div>
              <s.SpacerSmall />
            </>
          ) : (
            <>
              <s.SpacerXSmall />
              <s.SpacerSmall />
              {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                <s.Container ai={"center"} jc={"center"}>
                  <s.SpacerSmall />

                  {blockchain.errorMsg !== "" ? (
                    <>
                      <s.SpacerSmall />
                    </>
                  ) : null}
                </s.Container>
              ) : (
                <>
                  <div onLoad={connected()}></div>
                  <s.SpacerMedium />
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <btn id="roundbtn" className="round-button"
                      style={{ fontFamily: "'tiny', cursive", color: 'black', cursor: 'pointer' }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                    >
                      -
                    </btn>
                    <s.SpacerMedium />
                    <s.TextDescription id="mint-amount"
                      style={{
                        textAlign: "center",
                        color: 'black', fontFamily: "'tiny', cursive"
                      }}
                    >
                      {mintAmount}
                    </s.TextDescription>
                    <s.SpacerMedium />
                    <btn className="round-button"
                      style={{ fontFamily: "'tiny', cursive", color: 'black', cursor: 'pointer' }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                    >
                      +
                    </btn>
                  </s.Container>
                  <s.Container ai={"center"} jc={"center"} fd={"row"}>
                    <div className="mintbtn" style={{ fontFamily: "'tiny', cursive", color: 'black', fontSize: '4em', cursor: 'pointer', marginTop: '2px', marginLeft: '8px' }}
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                      }}
                    >
                      MINT!
                    </div>
                  </s.Container>
                </>
              )}
            </>
          )}
        </div>
      </div>









      <Phone>
      </Phone>
    </div>
  );
}


export const Phone = styled.div`
display: flex; 
flex-direction: column; 
justify-self: center; 
align-items: center; 
height: 100vh;
minWidth: 100%;
background-image: url("/config/images/ybg.png");
background-position: 50%; 
background-repeat: no-repeat;
background-size: cover; 
text-align: center; 
@media (orientation: landscape) {
  display: none;
}
`;

export default App;
