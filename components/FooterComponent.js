import styles from '../styles/footer.module.css'

function Footer(){
    return (
        <div>
            <footer className={`text-center ${styles.all}`}>
                <div className={`${styles.up}`}>
                    <section>
                        <a
                            className={`btn btn-link btn-floating btn-lg text-dark m-1 ${styles.button}`}
                            href="http://facebook.com"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i aria-hidden className={`fab fa-twitter ${styles.icons}`}></i>
                        </a>
                        <a
                            className={`btn btn-link btn-floating btn-lg text-dark m-1 ${styles.button}`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i aria-hidden className={`fab fa-google ${styles.icons}`}></i>
                        </a>
                        <a
                            className={`btn btn-link btn-floating btn-lg text-dark m-1 ${styles.button}`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i aria-hidden className={`fab fa-instagram ${styles.icons}`}></i>
                        </a>
                        <a
                            className={`btn btn-link btn-floating btn-lg text-dark m-1 ${styles.button}`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i aria-hidden className={`fab fa-linkedin ${styles.icons}`}></i>
                        </a>
                        <a
                            className={`btn btn-link btn-floating btn-lg text-dark m-1 ${styles.button}`}
                            href="#!"
                            role="button"
                            data-mdb-ripple-color="dark"
                            ><i aria-hidden className={`fab fa-github ${styles.icons}`}></i>
                        </a>
                    </section>
                </div>
                <div className={`text-center p-3 ${styles.down}`}>© 2021 Copyright: <a href="https://mdbootstrap.com/">The covid-19 API</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer