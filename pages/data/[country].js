import {useRouter} from 'next/router'
import styles from "../../styles/dataComponent.module.css"
import {Line} from "react-chartjs-2"
import {useEffect, useState} from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import Navbar from '../../components/Navbar'
import Footer from '../../components/FooterComponent'

function perCountry() {
    const router = useRouter()
    const id = router.query
    let region = ''
    if(id.country){
        region = id.country
    }
    const cookie = new Cookies()
    const [data2, setData] = useState()
    useEffect(()=>{
        axios({
            url: `http://localhost:4000/api/data/country/${region}`,
            method: "get",
            headers: {Authorization: `Bearer ${cookie.get('token')}`}
        }).then(response => {return response})
        .then(response => setData(response))
    },[])
  let datesArr = ['']
  let vaccinesArr = ['']
  console.log(data2)
  if (data2){
    if(data2.data.error){
      return (
        <div>Not found</div> 
      )
    }
    data2.data.people_fully_vaccinated.map((it)=>{
      let conv = parseInt(it)
      vaccinesArr.push(conv)
    })
    // console.log(data2.data)
    data2.data.date.map((it) => {
      datesArr.push(it)
    })
  }
  const data1 = {
    labels: datesArr,
    datasets: [{
      fill: 'origin',
      label: '# People vaccined',
      data: vaccinesArr,
      fill: true,
      backgroundColor: 'rgba(0, 109, 255, 0.2)',
      borderColor: 'rgba(0, 109, 255, 1)',
      pointBackgroundColor: 'rgba(0, 109, 255, 1)'
    }]
  }
  const options = {
    plugins: {
      filler: {
        propagate: true,
      }
    }
  }
    return (
      <div className={styles.data}>
        <Navbar></Navbar>
        <div className={styles.title}>
          <h1>Data of {region}</h1>
        </div>
        <div className={styles.chart}>
            <Line className={styles.back} data={data1} options={options}></Line>
        </div>
        <Footer></Footer>
      </div>
    )
}

perCountry.getInitialProps = async (ctx) =>{
    const cont = ctx.query
    return {country: cont}
}

export default perCountry;
