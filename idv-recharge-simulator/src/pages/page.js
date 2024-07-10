import Pack from "../components/pack/Pack";
import { useState } from "react";
import "./page.css";
import "../globals.css";

export default function Home() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const [count5, setCount5] = useState(0);
  const [count6, setCount6] = useState(0);
  const [count7, setCount7] = useState(0);
  const [count8, setCount8] = useState(0);
  
  const base1 = 60, bonus1 = 0, bonusWeb1 = 6, price1 = 0.99, img1 = "https://gameclub-fp.akamaized.net/file/64f05e135ef3e4cd78a767c8y82aROeg03";
  const base2 = 185, bonus2 = 9, bonusWeb2 = 18, price2 = 2.99, img2 = "https://gameclub-fp.akamaized.net/file/64f05e0f73ef21d93d8bfacbPiuEEi7503";
  const base3 = 305, bonus3 = 15, bonusWeb3 = 30, price3 = 4.99, img3 = "https://gameclub-fp.akamaized.net/file/64f05e1143f12d8f7a06c7321bicA9yo03";
  const base4 = 690, bonus4 = 33, bonusWeb4 = 69, price4 = 9.99, img4 = "https://gameclub-fp.akamaized.net/file/64f05e14723a550b59d4af23TQQFU1ic03";
  const base5 = 1308, bonus5 = 63, bonusWeb5 = "unavailable", price5 = 19.99, img5 = "https://gameclub-fp.akamaized.net/file/64f05e14723a550b59d4af23TQQFU1ic03";
  const base6 = 2025, bonus6 = 98, bonusWeb6 =  202, price6 = 29.99, img6 = "https://gameclub-fp.akamaized.net/file/64f05e10a860c2e95ba5f94cBf8dyHkX03";
  const base7 = 3330, bonus7 = 168, bonusWeb7 = 333, price7 = 49.99, img7 = "https://gameclub-fp.akamaized.net/file/64f05e125ef3e4cd78a767bcAPclOAdy03";
  const base8 = 6590, bonus8 = 1328, bonusWeb8 = 659, price8 = 99.99, img8 = "https://gameclub-fp.akamaized.net/file/64f05e135a032b5f7a84aeeeBs7v12Tk03";

  let numEchoes = (base1+bonus1)*count1 + (base2+bonus2)*count2 + (base3+bonus3)*count3 + (base4+bonus4)*count4
                + (base5+bonus5)*count5 + (base6+bonus6)*count6 + (base7+bonus7)*count7 + (base8+bonus8)*count8 ;

  let totalPrice = price1*count1 + price2*count2 + count3*price3 + price4*count4 
                 + price5*count5 + price6*count6 + price7*count7 + price8*count8;
  
  let ppe = 0;
  if(totalPrice / numEchoes > 0){
    ppe = totalPrice / numEchoes;
  }

  let numEchoesWeb = (base1+bonusWeb1)*count1 + (base2+bonusWeb2)*count2 + (base3+bonusWeb3)*count3 + (base4+bonusWeb4)*count4
                + (base6+bonusWeb6)*count6 + (base7+bonusWeb7)*count7 + (base8+bonusWeb8)*count8 ;

  let totalPriceWeb = price1*count1 + price2*count2 + count3*price3 + price4*count4 
     + price6*count6 + price7*count7 + price8*count8;

  let ppeWeb = 0;
    if(totalPriceWeb / numEchoes > 0){
    ppe = totalPriceWeb / numEchoesWeb;
  }

  function resetCount(){
    setCount1(0);
    setCount2(0);
    setCount3(0);
    setCount4(0);
    setCount5(0);
    setCount6(0);
    setCount7(0);
    setCount8(0);
  }

  return (
    <main className="main">
      <h1 className="title"> Identity V Recharge Simulator</h1>
      
      <button className="resetButton" onClick={resetCount}>Reset</button>

      <div className="content">
          {/* left side: echo packs */}
          <div className="echoPacks">
            <Pack count={count1} setCount={setCount1} base={base1} bonus={bonus1} bonusWeb={bonusWeb1} price={price1} imgLink={img1}></Pack>
            <Pack count={count2} setCount={setCount2} base={base2} bonus={bonus2} bonusWeb={bonusWeb2} price={price2} imgLink={img2}></Pack>
            <Pack count={count3} setCount={setCount3} base={base3} bonus={bonus3} bonusWeb={bonusWeb3} price={price3} imgLink={img3}></Pack>
            <Pack count={count4} setCount={setCount4} base={base4} bonus={bonus4} bonusWeb={bonusWeb4} price={price4} imgLink={img4}></Pack>
            <Pack count={count5} setCount={setCount5} base={base5} bonus={bonus5} bonusWeb={bonusWeb5} price={price5} imgLink={img5}></Pack>
            <Pack count={count6} setCount={setCount6} base={base6} bonus={bonus6} bonusWeb={bonusWeb6} price={price6} imgLink={img6}></Pack>
            <Pack count={count7} setCount={setCount7} base={base7} bonus={bonus7} bonusWeb={bonusWeb7} price={price7} imgLink={img7}></Pack>
            <Pack count={count8} setCount={setCount8} base={base8} bonus={bonus8} bonusWeb={bonusWeb8} price={price8} imgLink={img8}></Pack>
          </div>

          {/* right side: calculations */}
          <div className="calculations">
            {/* in-app purchases */}
            <div>
              <p className="headingStyle">In-app Recharge</p>
              <div className="info">
                <span className="infoHeading"> Echoes </span>
                <span className="numberStyle"> {numEchoes} </span>
              </div>

              <div className="info">
                <span className="infoHeading"> Cost USD </span>
                <span className="numberStyle"> {totalPrice.toFixed(2)} </span>
              </div>

              <div className="info">
                <span className="infoHeading"> Price per Echo </span>
                <span className="numberStyle"> ~ {ppe.toFixed(6)}</span>
              </div>
            </div>

            <hr></hr>

            {/* web purchase */}
            <div className="webStyle">
              <p className="headingStyle">Web Recharge</p>
              <div className="info">
                <span className="infoHeading"> Echoes </span>
                <span className="numberStyle"> {numEchoesWeb} </span>
              </div>

              <div className="info">
                <span className="infoHeading"> Cost USD </span>
                <span className="numberStyle"> {totalPriceWeb.toFixed(2)} </span>
              </div>

              <div className="info">
                <span className="infoHeading"> Price per Echo </span>
                <span className="numberStyle"> ~ {ppeWeb.toFixed(6)}</span>
              </div>

              <p className="note">Note: 1308 Echoes Pack ($19.99) is not available on Web Recharge.</p>

            </div>

          </div>
      </div>

    </main>
  );
}
