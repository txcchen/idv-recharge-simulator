'use client';
import styles from "./pack.module.css";
import PropTypes from 'prop-types';

const Pack = ({count, setCount, base, bonus, bonusWeb, price, imgLink}) => {
 
    function addAmount(){
        setCount(count => count + 1);
    };

    function subtractAmount(){
        if(count > 0){
            setCount(count => count - 1);
        }
    }

    return (
        <div className={styles.container}>

            <div className={styles.buttonContent}>
                <button className={styles.buttonStyle} onClick={subtractAmount}>-</button>
                <span className={styles.countStyle}>{count}</span>
                <button className={styles.buttonStyle} onClick={addAmount}>+</button>
            </div>

            <div className={styles.content} onClick={addAmount}>
                {/* img of echo pack */}
                <div className={styles.imageIcon}>
                    <img src={imgLink}
                        alt="echoes" className={styles.imageEchoes}/>
                </div>

                <div className={styles.baseAmount}> {base} Echoes </div>
                <div className={styles.bonus}> 
                    <span>bonus:</span>
                   <span> + {bonus} </span>
                   <span className={styles.bonusWeb}> + {bonusWeb} </span>                  
                </div>
                <div className={styles.price}> {price} USD</div>
            </div>

        </div>
    )
}

Pack.propTypes = {
    count: PropTypes.number.isRequired, 
    setCount: PropTypes.func,
    base: PropTypes.number.isRequired,
    bonus: PropTypes.number.isRequired, 
    bonusWeb: PropTypes.number.isRequired, 
    price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]), 
    imgLink: PropTypes.string.isRequired
};

export default Pack