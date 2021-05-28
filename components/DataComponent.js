import styles from "../styles/dataComponent.module.css"
import {Line} from "react-chartjs-2"
export default function dataComponent({api}){
  console.log(api.country)
  const data1 = {
    labels: ['2021-01-21', '2021-01-27', '2021-02-04', '2021-02-17', '2021-02-21'],
    datasets: [{
      label: '# of votes',
      data: [0, 1962, 3708, 6228, 20137],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    }]
  }
  return (
    <div className={styles.data}>

      <Line className={styles.back} data={data1}></Line>
    </div>
  ) 
}