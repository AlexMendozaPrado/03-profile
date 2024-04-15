import alex from '../assets/images/alex.jpeg';
const Sidebar = () => {
  return (
    <>
      <div className='bg-violet-800 min-h-screen p-3 text-white'>
        <div className='flex justify-center mt-2'>
            <img src={alex} alt='Alex' className='w-36 h-36 rounded-full'/>
        </div>
        
        <p className='font-semibold text-left mt-3 text-2xl'>Especialidad</p>
        <hr className='bg-white mb-2'/>
        <div className='flex item-center gap-1 mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
          </svg>
          <p>Desarrollo Movil</p>
        </div>
         {/* Teléfono */}
         <div className='flex items-center gap-2 mb-2'>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

          <p>Desarrollo WEB </p>
        </div>
         {/* GitHub */}
         <div className='flex items-center gap-2 mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M10 0C4.48 0 0 4.48 0 10c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.42 9.42 0 0 1 10 4.48c.85.004 1.71.115 2.52.337 1.9-1.29 2.74-1.02 2.74-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48A10.01 10.01 0 0 0 20 10c0-5.52-4.48-10-10-10z" clipRule="evenodd" />
          </svg>
          <p>Ciencia de Datos</p>
        </div>

        {/* Habilidades */}
        <p className='font-semibold text-left mt-3 text-2xl'>Habilidades</p>
        <hr className='bg-white mb-2'/>
        <div className='mb-1 text-base font-medium'>
          Javascript
        </div>
        <div className='w-full bg-gray-200 h-1.5 rounded-full'>
          <div className='bg-yellow-600 h-1.5 rounded-full w-5/6'></div>
        </div>

        {/* Agregando Python */}
        <div className='mb-1 text-base font-medium'>
          Python
        </div>
        <div className='w-full bg-gray-200 h-1.5 rounded-full'>
          <div className='bg-green-600 h-1.5 rounded-full w-4/6'></div>
        </div>
        <div className='mb-1 text-base font-medium'>
          Java
        </div>
        <div className='w-full bg-gray-200 h-1.5 rounded-full'>
          <div className='bg-green-600 h-1.5 rounded-full w-4/6'></div>
        </div>
        <div className='mb-1 text-base font-medium'>
          TypeScript
        </div>
        <div className='w-full bg-gray-200 h-1.5 rounded-full'>
          <div className='bg-green-600 h-1.5 rounded-full w-4/6'></div>
        </div>
        <div className='mb-1 text-base font-medium'>
          C++
        </div>
        <div className='w-full bg-gray-200 h-1.5 rounded-full'>
          <div className='bg-green-600 h-1.5 rounded-full w-4/6'></div>
        </div>
        <div className='mb-1 text-base font-medium'>
          ReactJS 
        </div>
        <div className='w-full bg-gray-200 h-1.5 rounded-full'>
          <div className='bg-green-600 h-1.5 rounded-full w-4/6'></div>
        </div>
        <p className='font-semibold text-left mt-3 text-2xl'>Logros</p>
        <hr className='bg-white mb-2'/>
        <div className='flex items-center gap-1'>
        <div className='flex flex-col items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<p className='text-center text-sm'>prev internship JD</p>
<div className='flex flex-col item-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<p className='text-center text-sm'>gpa: 97</p>


        </div>
        <div className='flex flex-col item-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
</svg>
<p className='text-center text-sm'>SWE intern@BloombergLP</p>


        </div>


        </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar;
