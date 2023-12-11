"use client";

import React, {useState, useEffect} from 'react'
import { Line } from 'react-chartjs-2';

import{
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
)


export default function GraphTemp(_temperatures) {
  const [chartData, setChartData] = useState({
    datasets: [],
  })
  const [chartOptions, setChartOptions] = useState({

  })

  const temperatures = Object.values(_temperatures)[0];

  useEffect(() => {
    setChartData({
      labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
      datasets: [
        {
          label: 'Température',
          data: temperatures,
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

  return (
    <>
        <div className='p-8 h-auto w-96 lg:w-2/5 rounded-xl border border-gray-300 mx-6 mb-6 dark:bg-gray-700'>
            <h1 className='text-center font-bold text-2xl mb-4'>Température</h1>
            <Line data={chartData} options={chartOptions}/>
        </div>
    </>
  );
}
