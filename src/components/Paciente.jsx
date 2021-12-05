const Paciente = () => {
    return (
        <div className="mt-5 ml-5 bg-gray-900 shadow-md rounded-lg p-10">
            <p className="font-bold mb-3 text-gray-300 uppercase">
                Nombre Mascota: {''}
                <span className="font-normal normal-case">
                    Chester
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-300 uppercase">
                Nombre Propietario: {''}
                <span className="font-normal normal-case">
                    Axel Castillo
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-300 uppercase">
                Correo Electónico: {''}
                <span className="font-normal normal-case">
                    axrcode@gmail.com
                </span>
            </p>

            <p className="font-bold mb-3 text-gray-300 uppercase">
                Fecha Alta: {''}
                <span className="font-normal normal-case">
                    01-01-2022
                </span>
            </p>

            <p className="font-bold text-gray-300 uppercase">
                Síntomas: {''}
                <span className="font-normal normal-case">
                    No presenta
                </span>
            </p>
        </div>
    )
}

export default Paciente
