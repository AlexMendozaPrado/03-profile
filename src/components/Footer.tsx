const Footer = () => {
    return (
      <div className="bg-violet-900 text-white p-4">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© 2023 by Alejandro Mendoza Prado</p>
          <div className="flex flex-col md:flex-row items-center md:gap-4 mt-4 md:mt-0">
            <a href="mailto:a0081983@tec.mx" className="hover:text-gray-300">
               Correo de contacto: a0081983@tec.mx
            </a>
            <a href="tel:+528121573953" className="hover:text-gray-300">
               Numero telefonico de contacto : +52 812 157 3953
            </a>
            <a href="https://github.com/AlexMendozaPrado" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
               Links a proyectos: GitHub/AlexMendozaPrado
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer;
  