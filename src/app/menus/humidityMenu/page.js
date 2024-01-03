import Footer from "@/app/globalComponents/footer";
import Header from "@/app/globalComponents/header";
import { promises as fs } from 'fs';
import GraphHumidity from "./humidityGraph";


export default async function humidityMenu(){
    const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
    const data = JSON.parse(file);
    const humidities = data.measurements.map(measurement => ({ value: measurement.humidity, timestamp: measurement.timestamp }));


    return(
        <main className="dark:bg-gray-800 h-screen">
            <Header logo='Humidity'></Header>
            <div>
                <GraphHumidity humidities={humidities}/>
            </div>
            <Footer></Footer>
        </main>

    )
}