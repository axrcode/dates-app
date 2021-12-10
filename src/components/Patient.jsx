const Patient = ({ paciente }) => {

    const { nombre, propietario, email, fecha, sintomas } = paciente

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
        </div>
    )
}

export default Patient
