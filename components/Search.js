import styles1 from '../styles/search.module.css'
import {countrys, codesCont} from '../components/dataCol'
import {countries} from '../data'
import {useState} from 'react'
import CardComponent from '../components/CardComponent'
import styles from "../styles/data.module.css"
import Router from 'next/router'

export default function Search(){
    const [word, setWord] = useState("")
    const handleInput = (event) => {
        let res = []
        res.push(countries.filter(item => item.country.toLowerCase().includes(event.target.value.toLowerCase())))
        setWord(res[0]) 
    }
    return(
        <div clasname={styles1.principal}>
            <section className={styles1.main}>
                <h2 className={styles1.main__title}>Search a country</h2>
                <input type='text' placeholder='Search...' className={styles1.input} onKeyUp={handleInput} />
            </section>
            {
                word.length > 0 & word.length < 20 && <h1 className={styles1.main__title} className={styles.title}>Search results</h1>
            }
            <div className={styles.country}>
                {
                    word.length < 20 & word.length > 0 ? word.map((item, i) => {
                        return(
                            <div key={i} onClick={e => Router.push('/data/[country]', `/data/${item.country}`)}>
                                <CardComponent key={i} country={item.country} flag={item.code}></CardComponent>
                            </div>
                        )
                    }) : <div></div>
                }
            </div>
        </div>
    )
}