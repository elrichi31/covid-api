import styles from '../styles/notFound.module.css'

function notFound(){
    return (
        <div className={styles.all}>
            <h1>404</h1>
            <p>Take me back to <a>home</a></p> 
        </div>
    )
}

export default notFound