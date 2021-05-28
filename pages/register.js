import styles from "../styles/register.module.css"
import Link from "next/link"
import {useState} from 'react'
import axios from 'axios'
import Router from 'next/router'
import Image from 'next/image'

export default function register() {
    const [form, setValues] = useState({
        name: '',
        email: '',
        password: '',
    })
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const [validate, setValidate] = useState(true)
    const handleSubmit = (event) => {
        axios({
            url: "http://localhost:4000/api/login/sign-up",
            method: 'post',
            data: {
                name: form.name,
                email: form.email,
                password: form.password
            }
        }).then(res => {
            if(res.status === 201){
                Router.push('/home')
            }
            else{
                setValidate(false)
            }
        }).catch(e =>{
            console.log(e)
        })
        event.preventDefault()
    }
    return (
        <div className={styles.register_page}>
            <div className={styles.login_form}>
                <form className={styles.forms} onSubmit={handleSubmit}>
                        <h1 className={styles.forms_title}>Create a new account</h1>
                        {validate ? <div></div> : <div className={styles.info}>
                            <Image src="/war.svg" width={30} height={30} className={styles.img}/>
                            <p className={styles.text_info}>The email is already in use</p>
                            </div>}
                        <div className={`form-group ${styles.forms}`}>
                            <label className={`form-group ${styles.forms}`}>Name</label>
                            <input type="text" className="form-control" name='name' onChange={handleInput}></input>
                        </div>
                        <div className={`form-group ${styles.forms}`}>
                            <label className={`form-group ${styles.forms}`}>Email</label>
                            <input type="email" className="form-control" name='email' onChange={handleInput}></input>
                        </div>
                        <div className={`form-group ${styles.forms}`}>
                            <label className={`form-group ${styles.forms}`}>Password</label>
                            <input type="password" className="form-control" name='password' onChange={handleInput}></input>
                        </div>
                        <div className={`d-grid gap-2 ${styles.forms}`}>
                            <button type="submit" className="btn btn-primary" id={styles.button_form}>Register</button>
                        </div>
                        <div className={`text-register ${styles.forms_register}`}>You already have an account?<Link href="/home"><a className={styles.forms}>Log in</a></Link></div>
                    </form>
            </div>

        </div>
    )
}
