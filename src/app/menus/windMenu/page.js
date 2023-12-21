import Footer from "@/app/globalComponents/footer";
import Header from "@/app/globalComponents/header";
import { promises as fs } from 'fs';
import GraphWind from "./windGraph";


export default async function WindMenu(){
    const file = await fs.readFile(process.cwd() + '/src/app/files/data.json', 'utf8');
    const data = JSON.parse(file);
    const winds = data.measurements.map(measurement => measurement.temperature);


    return(
        <main className="dark:bg-gray-800 h-screen">
            <Header logo='Wind'></Header>
            <div>
                <GraphWind winds={winds}/>
            </div>
            <Footer></Footer>
        </main>

    )
}