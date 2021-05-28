import Navbar from '../components/Navbar'
import Footer from '../components/FooterComponent'
import styles from '../styles/api.module.css'
import Image from 'next/image'
import Prism from 'prismjs'
import Code from '../components/Code'
function infoApi(){
    const code = `function(){
        return 0
    }`
    const html = Prism.highlight(code, Prism.languages.javascript, 'javascript')
    return (
        <div>
            <Navbar></Navbar>
            <div className={styles.all}>
                <h1>Usage</h1>
                <p className={styles.text}>Its easy to use you only have to make a GET petition with a log in with bearer token that we provide you and after that you can use our API and make petitions. The following routes are http://localhost:4000/api/data/country/"The country that you want to consult"</p>
                <h2>Example with Postman</h2>
                <Image src="/exam1.png" width={1099} height={507}></Image>
                <p>The API will provide you the following information in JSON format: "country", "data", "vaccine", "total_vaccinations", "people_vaccinated", "people_fully_vaccinated", or you can make a consult with your favorite library in this case we will use Axios</p>
                <div>
                    <pre className={styles.code}>
                        <code className={`language-javascript`}>
{`axios({
    url: 'http://localhost:4000/api/data/(here the country)',
    method: 'get',
    headers: {Authorization: "Bearer (here your token)"}
}).then(response => showData(response)`}                        
                        </code>
                    </pre>
                </div>
            </div>
            <Footer></Footer>
        </div>

    )
}
export default infoApi