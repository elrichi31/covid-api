import Cookies from 'universal-cookie'
import {useRouter}from 'next/router'
import Router from 'next/router'
import styles from "../styles/data.module.css"
import {useEffect} from 'react'
import CardComponent from '../components/CardComponent'
import {countries} from '../data'
import Navbar from '../components/Navbar'
import Search from '../components/Search'
import Footer from '../components/FooterComponent'
const cookie = new Cookies()

export default function data(){
    const router = useRouter()
    useEffect(()=> {
        if((!cookie.get('name'))){
            router?.push('/home')
        }
    }, [])
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.dataCo}>
                <Search></Search>
                <h1 className={styles.title}>Countries ({countries.length})</h1>
                <div className={styles.country}>
                    {
                        countries.map((it, i) => {
                            return(
                                <div key={i} onClick={e => Router.push('/data/[country]', `/data/${it.country}`)}>
                                    <CardComponent key={i} country={it.country} flag={it.code}></CardComponent>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}