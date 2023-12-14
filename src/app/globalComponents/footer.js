import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaWind } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaThermometerHalf } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";

export default function Footer(){
    return (
    <div className="fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
            <Link href='/menus/windMenu' data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <FaWind className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
              <span className="sr-only">Vent</span>
            </Link>
            <button data-tooltip-target="tooltip-wallet" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <FaSun className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
              <span className="sr-only">Irradiance</span>
            </button>
            <div className="flex items-center justify-center">
                <Link href="/" data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                    <FaHome className="w-5 h-5 text-white"/>
                    <span className="sr-only">Accueil</span>
                </Link>
            </div>
            <button data-tooltip-target="tooltip-settings" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <FaThermometerHalf className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
              <span className="sr-only">Température</span>
            </button>
            <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
              <WiHumidity className="w-8 h-8 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"/>
              <span className="sr-only">Humidité</span>
            </button>
        </div>
    </div>
    )
}