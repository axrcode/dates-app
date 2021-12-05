function Form() {
    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-gray-400 text-lg mt-3 mb-8 text-center">
                Añade Nuevos Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form className="bg-gray-900 shadow-md rounded-lg p-10 mb-10">
                <div className="mb-5">
                    <label 
                        htmlFor="mascota"
                        className="block text-gray-300 uppercase font-bold">
                        Nombre Mascota
                    </label>

                    <input
                        className="bg-gray-800 w-full p-2 px-4 mt-2 placeholder-gray-500 rounded-md focus:outline-none" 
                        type="text"
                        id="mascota"
                        autocomplete="off"
                        placeholder="Nombre de la Mascota"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="propietario"
                        className="block text-gray-300 uppercase font-bold">
                        Nombre Propietario
                    </label>

                    <input
                        className="bg-gray-800 w-full p-2 px-4 mt-2 placeholder-gray-500 rounded-md focus:outline-none" 
                        type="text"
                        id="propietario"
                        autocomplete="off"
                        placeholder="Nombre del Propietario"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="email"
                        className="block text-gray-300 uppercase font-bold">
                        Correo Electónico
                    </label>

                    <input
                        className="bg-gray-800 w-full p-2 px-4 mt-2 placeholder-gray-500 rounded-md focus:outline-none" 
                        type="email"
                        id="email"
                        autocomplete="off"
                        placeholder="Email Contacto Propietario"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="alta"
                        className="alta text-gray-300 uppercase font-bold">
                        Fecha de Alta
                    </label>

                    <input
                        className="bg-gray-800 w-full p-2 px-4 mt-2 placeholder-gray-500 rounded-md focus:outline-none" 
                        type="date"
                        id="alta"
                    />
                </div>

                <div className="mb-5">
                    <label 
                        htmlFor="sintomas"
                        className="alta text-gray-300 uppercase font-bold">
                        Síntomas
                    </label>

                    <textarea
                        className="bg-gray-800 w-full p-2 px-4 mt-2 placeholder-gray-500 rounded-md focus:outline-none" 
                        id="sintomas"
                        placeholder="Describe los Síntomas"
                        rows="4"
                    />
                </div>
                
                <input 
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    type="submit" 
                    value="Agregar Paciente"
                />
            </form>

        </div>
    )
}

export { Form }
