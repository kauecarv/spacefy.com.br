const Projects = () => {
  return (
    <section className="bg-black w-full h-full flex flex-col">
      <div className="flex flex-col justify-start w-full">
        <h2 className="text-white text-3xl font-bold font-poppins">Projetos Realizados</h2>
        <div className="flex justify-between">
          <div className="flex items-center">
            <button>Todos</button>
            <button>Sites</button>
            <button>Modelos</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
