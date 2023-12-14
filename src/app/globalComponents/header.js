import { FaHome, FaWind } from 'react-icons/fa';

export default function Header(data) {
  let iconComponent;
  let title;

  switch (data.logo){
    case 'Home':
      iconComponent = <FaHome className='mr-4 m-auto w-6 h-auto'></FaHome>;
      title = "accueil";
      break;
    case 'Wind':
      iconComponent = <FaWind className='mr-4 m-auto w-6 h-auto'></FaWind>;
      title = "vent";
      break;
  }

    return(
      <header className='pt-8'>
        <div className='flex md:mx-96 h-14 border-gray-300 dark:bg-gray-700 rounded-xl border'>
          <div className='m-auto flex'>
            {iconComponent}
          <p flex className='text-center font-bold text-2xl'>
            {title}
          </p>
          </div>

        </div>
      </header>
    );
}