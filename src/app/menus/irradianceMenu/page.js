import Footer from "@/app/globalComponents/footer";
import Header from "@/app/globalComponents/header";
import { promises as fs } from 'fs';
import GraphIrradiance from "./irradianceGraph";


export default async function irradianceMenu(){
    const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
    const data = JSON.parse(file);
    const irradiances = data.measurements.map(measurement => ({ value: measurement.irradiance, timestamp: measurement.timestamp }));


    return(
        <main className="dark:bg-gray-800 h-screen">
            <Header logo='Irradiance'></Header>
            <div>
                <GraphIrradiance irradiances={irradiances}/>
            </div>
            <Footer></Footer>
        </main>

    )
}