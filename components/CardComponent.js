import styles from '../styles/cardComponet.module.css'
export default function CardComponent ({country, flag}){
    return(
            <div className={styles.card_div}>
                <div className={styles.img_div}>
                    <img src={`https://flagcdn.com/h240/${flag}.png`} className={styles.img_card}></img>
                </div>
                <div className={styles.text_div}>
                    <h1 className={styles.card}>{country}</h1>
                    <p className={styles.card}>People vaccined: 99999999</p>
                </div>
            </div>

    )
}