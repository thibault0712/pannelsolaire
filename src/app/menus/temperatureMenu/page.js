import Footer from "@/app/globalComponents/footer";
import Header from "@/app/globalComponents/header";
import { promises as fs } from 'fs';
import GraphTemperature from "./temperatureGraph";


export default async function temperatureMenu(){
    const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
    const data = JSON.parse(file);
    const temperatures = data.measurements.map(measurement => ({ value: measurement.temperature, timestamp: measurement.timestamp }));


    return(
        <main className="dark:bg-gray-800 h-screen">
            <Header logo='Temperature'></Header>
            <div>
                <GraphTemperature temperatures={temperatures}/>
            </div>
            <Footer></Footer>
        </main>

    )
}