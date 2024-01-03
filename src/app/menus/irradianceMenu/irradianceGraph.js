"use client";

import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
import sorterDay from '@/app/sorters/sorterDay'
import sorterWeek from '@/app/sorters/sorterWeek'
import sorterMonth from '@/app/sorters/sorterMonth'
import sorterYear from '@/app/sorters/sorterYear'
import{
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)

export default function GraphIrradiance(_data) {
  const [selectedValue, setSeletedValue] = useState();
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({
  })
  const data = Object.values(_data)[0];
  const allTimestamps = data.map(__data => new Date(__data.timestamp));
  const maxDate = new Date(Math.max(...allTimestamps));


  useEffect(() => {
    var _labels;
    var winds;

    switch(selectedValue){
      case "Month":
        winds = sorterMonth(data, maxDate)
        const daysNumber = new Date(maxDate.getFullYear(), maxDate.getMonth() + 1, 0).getDate();
        _labels = Array.from({ length: daysNumber }, (_, index) => index + 1); //Iterable puis map _ car on veut pas utilisé de valeurs juste l'index
        break

      case "Year":
        winds = sorterYear(data)
        _labels = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aoû', 'Sep' ,'Oct', 'Nov', 'Dec']
        break
      
      case "Week":
        winds = sorterWeek(data, maxDate)
        _labels = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim']
        break

      default:
        winds = sorterDay(data, maxDate)
        _labels = ["1h", "2h", "3h", "4h", "5h", "6h", "7h", "8h", "9h", "10h", "11h", "12h", "13h", "14h", "15h", "16h", "17h", "18h", "19h", "20h", "21h", "22h", "23h", "24h"];
        break
  
    }

    setChartData({
      labels: _labels,
      datasets: [
        {
          label: 'Irradiance',
          data: winds,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgb(53, 162, 235, 0.4)',
          fill: false, // Cette propriété indique que le graphique ne doit pas être rempli
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false
        },
        point: {
          radius: 0, // Supprime les points sur la ligne
        },
      },
      maintainAspectRatio: false,
      responsive: false
    })
  }, [selectedValue])

  const handleSelectChange = (event) => {
    setSeletedValue(event.target.value);
  };

  return (
    <>
        <div className='p-8 w-96 lg:w-2/5 rounded-xl border border-gray-300 mt-10 dark:bg-gray-700 m-auto'>
            <div className='Flex'>
                <h1 className='text-center font-bold text-2xl mb-3'>Irradiance</h1>
                <div className='flex'>
                    <label htmlFor="countries" className="block text-sm font-medium text-gray-900 dark:text-white mr-2 my-auto">Données sur : </label>
                    <select onChange={handleSelectChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Day">Journée</option>
                        <option value="Week">Semaine</option>
                        <option value="Month">Mois</option>
                        <option value="Year">Année</option>
                    </select>
                </div>
            </div>
            <Line data={chartData} options={chartOptions}/>
        </div>
    </>
  );
}
