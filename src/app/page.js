import React from 'react'
import GraphWind from './graphs/graphWind';
import GraphTemp from './graphs/graphTemp';
import GraphIrradiance from './graphs/graphIrradiance';
import GraphHumidity from './graphs/graphHumidity';
import Header from './globalComponents/header';
import { promises as fs } from 'fs';


export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
  const data = JSON.parse(file);
  console.log(data.measurements[0].temperature);

  return (
    <main className="min-h-screen">
      <Header/>
      <div className='justify-center w-full md:col-span-2 lg:h-[78vh] h-[58vh] m-auto px-24 py-8 bg-white flex flex-wrap'>
        <GraphWind/>
        <GraphTemp/>
        <GraphIrradiance/>
        <GraphHumidity/>
      </div>
    </main>
  );
}
