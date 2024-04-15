export const Home = () => {
  return (
    <>
      <h1 className="text 3xl font-bold mt-8 text-center">
        Alejandro Mendoza Prado 
      </h1>
      <p className="font-semibold text-center">Software engineer</p>
      <div className="mx-5 mt-2">
        <p className="text-gray-50 font-semibold bg-violet-700 p-2 mb-1">
          Summary
        </p>
        <p className="leading-8 tracking-wide">

        Alejandro Mendoza es un estudiante de Ingeniería en Computación del ITESM, con un sobresaliente GPA de 4.0 y una proyección de graduación en junio de 2025. Su experiencia incluye una práctica de ingeniería de software en John Deere, donde se destacó en el desarrollo de microservicios y mejoras en eficiencia operativa. Líder en el club de robótica VantTec, Alejandro impulsó la productividad del equipo y contribuyó a su éxito en competencias internacionales. Como moderador en SWIT, coordinó eventos con figuras líderes en TI, potenciando el perfil académico de ITESM. Su portfolio de proyectos y habilidades técnicas abarca desde desarrollo web full-stack hasta inteligencia artificial con aplicaciones en el sector social, respaldado por competencias en lenguajes como JavaScript, Java y Swift, y herramientas como AWS y Docker. Alejandro combina conocimientos técnicos profundos con liderazgo probado y una visión clara para la innovación tecnológica.        </p>
        <p className="text-gray-50 font-semibold bg-violet-700 p-2 mb-1">
          Experiencia 
        </p>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          <p className="font-semibold">CEMEX</p>
        </div>
        <p className="ml-7 mb-3">
          Operations Development Intern (feb 2024 - currently)
        </p>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
          </svg>
          <p className="font-semibold">John Deere</p>
        </div>
        <p className="ml-7 mb-3">
          Software Engineer Intern (august 2023 - January 2024)
        </p>

        {/* Sección de Educación */}
        <p className="text-gray-50 font-semibold bg-violet-700 p-2 mb-1">
          Educación
        </p>
        <div className="flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
            <path d="M10 2L1 6.5v2.75c0 5.16 4.34 9.68 9 10.75 4.66-1.07 9-5.59 9-10.75V6.5L10 2z" />
          </svg>
          <p className="font-semibold">ITESM Campus Monterrey</p>
        </div>
        <p className="ml-7 mb-3">
          Computer Science and Technology (2021 - 2025)
        </p>
      </div>
    </>
  );
}

export default Home;
