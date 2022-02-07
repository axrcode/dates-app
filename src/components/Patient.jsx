const Patient = ({ paciente, setPaciente, eliminarPaciente }) => {

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = window.confirm('Deseas eliminar este paciente?')

        if ( respuesta ) {
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mt-5 md:ml-5 bg-gray-900 shadow-md rounded-lg p-10">
            <p className="font-bold mb-3 text-gray-300 uppercase">
                Nombre Mascota: {''}
                <span className="font-normal normal-case">
                    { nombre }
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-300 uppercase">
                Nombre Propietario: {''}
                <span className="font-normal normal-case">
                    { propietario }
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-300 uppercase">
                Correo Electónico: {''}
                <span className="font-normal normal-case">
                    { email }
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-300 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">
                    { fecha }
                </span>
            </p>

            <p className="font-bold text-gray-300 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">
                    { sintomas }
                </span>
            </p>

            <div className="mt-10 flex justify-between">
                <button 
                    className="py-2 px-10 bg-green-600 hover:bg-green-700 text-white font-bold uppercase rounded-md"
                    type="button"
                    onClick={ () => setPaciente(paciente) }
                >
                    Editar
                </button>

                <button 
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md"
                    type="button"
                    onClick={ handleEliminar }
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Patient
