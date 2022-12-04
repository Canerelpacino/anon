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

  const t20 = () => {
    document.getElementById("t20").style.display = "none";
    document.getElementById("t21").style.display = "block";
  };

  const t21 = () => {
    document.getElementById("t21").style.display = "none";
    document.getElementById("t22").style.display = "block";
  };  

  const t22 = () => {
    document.getElementById("t22").style.display = "none";
    document.getElementById("t23").style.display = "block";
  };

  const t23 = () => {
    document.getElementById("t23").style.display = "none";
    document.getElementById("t24").style.display = "block";
  };

  const t24 = () => {
    document.getElementById("t24").style.display = "none";
    document.getElementById("t25").style.display = "block";
  };

  const t25 = () => {
    document.getElementById("t25").style.display = "none";
    document.getElementById("t26").style.display = "block";
  };

  const t26 = () => {
    document.getElementById("t26").style.display = "none";
    document.getElementById("t27").style.display = "block";
  };

  const t27 = () => {
    document.getElementById("t27").style.display = "none";
    document.getElementById("t28").style.display = "block";
  };

  const t28 = () => {
    document.getElementById("t28").style.display = "none";
    document.getElementById("t29").style.display = "block";
  };

  const t29 = () => {
    document.getElementById("t29").style.display = "none";
    document.getElementById("t30").style.display = "block";
  };

  const t30 = () => {
    document.getElementById("t30").style.display = "none";
    document.getElementById("t31").style.display = "block";
  };

  const t31 = () => {
    document.getElementById("t31").style.display = "none";
    document.getElementById("t32").style.display = "block";
  };

  const t32 = () => {
    document.getElementById("t32").style.display = "none";
    document.getElementById("t33").style.display = "block";
  };

  const t33 = () => {
    document.getElementById("t33").style.display = "none";
    document.getElementById("t34").style.display = "block";
  };

  const t34 = () => {
    document.getElementById("t34").style.display = "none";
    document.getElementById("t35").style.display = "block";
  };

  const t35 = () => {
    document.getElementById("t35").style.display = "none";
    document.getElementById("t36").style.display = "block";
  };

  const t36 = () => {
    window.open(
      "https://byanon.live/", "_blank");
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
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>So...</p>
            </div>

            <div id="t2" onClick={t2} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Look what art has done</p>
            </div>

            <div id="t3" onClick={t3} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Countless derivs</p>
            </div>

            <div id="t4" onClick={t4} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Over 450 ETH traded in days</p>
            </div>

            <div id="t5" onClick={t5} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>A worldwide presence</p>
            </div>

            <div id="t6" onClick={t6} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Connected different </p>
            </div>

            <div id="t7" onClick={t7} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>people</p>
            </div>

            <div id="t8" onClick={t8} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>projects,</p>
            </div>

            <div id="t9" onClick={t9} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Alphas</p>
            </div>

            <div id="t91" onClick={t91} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>NFT buyers</p>
            </div>

            <div id="t92" onClick={t92} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Degens</p>
            </div>

            <div id="t93" onClick={t93} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Investors</p>
            </div>

            <div id="t94" onClick={t94} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>And</p>
            </div>

            <div id="t10" onClick={t10} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>The whole web3 community</p>
            </div>

            <div id="t10-5" onClick={t105} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>In a way that has never been done</p>
            </div>
            
            <div id="t10-6" onClick={t106} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>We made people touch grass for an allow list</p>
            </div>

            <div id="t10-7" onClick={t107} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>We made the people you talk to on a daily share an opinion about you</p>
            </div>

            <div id="t10-8" onClick={t108} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>We infiltrated art basel while making a presence in Hong Kong</p>
            </div>

            <div id="t10-9" onClick={t109} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Conversations</p>
            </div>

            <div id="t10-10" onClick={t1010} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Conviction</p>
            </div>

            <div id="t11" onClick={t11} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Rumors</p>
            </div>

            <div id="t12" onClick={t12} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Whats</p>
            </div>

            <div id="t13" onClick={t13} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>It</p>
            </div>

            <div id="t14" onClick={t14} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>All</p>
            </div>

            <div id="t15" onClick={t15} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>For</p>
            </div>

            <div id="t16" onClick={t16} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>?</p>
            </div>

            <div id="t17" onClick={t17} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>??</p>
            </div>

            <div id="t18" onClick={t18} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>???</p>
            </div>

            <div id="t19" onClick={t19} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>????</p>
            </div>

            <div id="t20" onClick={t20} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>art</p>
            </div>


            <div id="t21" onClick={t21} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Who I am is not important</p>
            </div>

            <div id="t22" onClick={t22} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>The art is</p>
            </div>

            <div id="t23" onClick={t23} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Next time around will be your turn to create</p>
            </div>

            <div id="t24" onClick={t24} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>But for now</p>
            </div>

            <div id="t25" onClick={t25} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>Lets get on with it</p>
            </div>

            <div id="t26" onClick={t26} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>The</p>
            </div>

            <div id="t27" onClick={t27} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>performance</p>
            </div>

            <div id="t28" onClick={t28} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>must</p>
            </div>

            <div id="t29" onClick={t29} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>CONTINUE...</p>
            </div>

            <div id="t30" onClick={t30} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MINT</p>
            </div>

            <div id="t31" onClick={t31} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '4em'}}>MINT</p>
            </div>

            <div id="t32" onClick={t32} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '7em'}}>MINT</p>
            </div>

            <div id="t33" onClick={t33} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>M</p>
            </div>

            <div id="t34" onClick={t34} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MI</p>
            </div>

            <div id="t35" onClick={t35} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MIN</p>
            </div>

            <div id="t36" onClick={t36} style={{width: '80%', display: 'none', margin: 'auto', cursor: 'pointer'}}>
              <p style={{fontFamily: '"tiny", cursive', color: 'white', fontSize: '2em'}}>MINT</p>
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
background-color: black;
background-position: 50%; 
background-repeat: no-repeat;
background-size: cover; 
text-align: center; 
@media (orientation: landscape) {
  display: none;
}
`;

export default App;
