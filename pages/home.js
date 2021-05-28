import styles from "../styles/login.module.css"
import Link from "next/link"
import {useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import Router from 'next/router'
import Image from 'next/image'

const cookies = new Cookies()
export default function home2(){
    
    const [form, setValues] = useState({
        email: '',
        password: '',
    })
    const [logged, setLogged] = useState(true)
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        
        axios({
            url: "http://localhost:4000/api/login/sign-in",
            method: 'post',
            auth: {
                password: form.password,
                username: form.email
            }
        }).then((res) => {
            return res
        }).then(res => {
            if(Object.keys(res.data).length<3){
                cookies.set('id', res.data.user._id, {path: '/'})
                cookies.set('name', res.data.user.name, {path: '/'})
                cookies.set('token', res.data.token, {path: '/'})
                Router.push('/data')
            }else{
                setLogged(false)
            }
        })
        .catch(e => {
            console.log(e)
        })
        event.preventDefault()
    }
    if((cookies.get('name'))){
        Router.push('/data')
    }
    return (
        <div className={styles.home_page}>
            <div className={styles.login_form}>
                <form className={styles.forms} onSubmit={handleSubmit}>
                    <h1 className={styles.forms_title}>Log in to your account</h1>
                    {logged ? <div></div> : <div className={styles.info}>
                        <Image src="/war.svg" width={30} height={30} className={styles.img}/>
                        <p className={styles.text_info}>Enter a valid email or password</p>
                    </div>}
                    
                    <div className={`form-group ${styles.forms}`}>
                        <label className={`form-group ${styles.forms}`}>Email</label>
                        <input type="email" className="form-control" onChange={handleInput} name="email"></input>
                    </div>
                    <div className={`form-group ${styles.forms}`}>
                        <label className={`form-group ${styles.forms}`}>Password</label>
                        <input type="password" className="form-control" onChange={handleInput} name="password"></input>
                    </div>
                    <div className={`d-grid gap-2 ${styles.forms}`}>
                        <button type="submit" className="btn btn-primary" id={styles.button_form}>Log in</button>
                    </div>
                    <div className={`text-register ${styles.forms_register}`}>You don't have an account?<Link href="/register"><a className={styles.forms}>Register</a></Link></div>
                </form>
            </div>
            <div>
                <h1 className={styles.text_title}>The <br/> Covid-19 <br/> API</h1>
            </div>
        </div>
    )
}