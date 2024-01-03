import React from 'react'
import GraphWind from './graphs/graphWind';
import GraphTemp from './graphs/graphTemp';
import GraphIrradiance from './graphs/graphIrradiance';
import GraphHumidity from './graphs/graphHumidity';
import Header from './globalComponents/header';
import Footer from './globalComponents/footer';
import { promises as fs } from 'fs';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
  const data = JSON.parse(file);
  const winds = data.measurements.map(measurement => ({ value: measurement.wind, timestamp: measurement.timestamp }));
  const temperatures = data.measurements.map(measurement => ({ value: measurement.temperature, timestamp: measurement.timestamp }));
  const irradiances = data.measurements.map(measurement => ({ value: measurement.irradiance, timestamp: measurement.timestamp }));
  const humidities = data.measurements.map(measurement => ({ value: measurement.humidity, timestamp: measurement.timestamp }));

  return (
    <main className="dark:bg-gray-800">
      <Header logo='Home'/>
      <div className='justify-center w-full md:col-span-2 m-auto px-24 py-8 bg-white flex flex-wrap dark:bg-gray-800'>
        <GraphWind winds={winds}/>
        <GraphTemp temperatures={temperatures}/>
        <GraphIrradiance irradiances={irradiances}/>
        <GraphHumidity humidities={humidities}/>
      </div>
      <Footer/>
    </main>
  );
}
