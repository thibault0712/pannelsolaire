"use client";

import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';
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

export default function GraphWind(_winds) {
  const [selectedValue, setSeletedValue] = useState();
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({

  })

  const winds = Object.values(_winds)[0];

  useEffect(() => {
    setChartData({
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      datasets: [
        {
          label: 'Vent',
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
      responsive: true
    })
  }, [])

  const handleSelectChange = (event) => {
    setSeletedValue(event.target.value);
  };

  useEffect(() => {
    console.log("coucou");
  }, [selectedValue])

  return (
    <>
        <div className='p-8 w-96 lg:w-2/5 rounded-xl border border-gray-300 mt-10 dark:bg-gray-700 m-auto'>
            <div className='Flex'>
                <h1 className='text-center font-bold text-2xl mb-3'>Vent</h1>
                <div className='flex'>
                    <label htmlFor="countries" className="block text-sm font-medium text-gray-900 dark:text-white mr-2 my-auto">Données sur : </label>
                    <select onChange={handleSelectChange} id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Day">Journée</option>
                        <option defaultValue="Week">Semaine</option>
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
