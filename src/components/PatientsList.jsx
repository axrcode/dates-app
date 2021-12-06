import Paciente from './Paciente'

const PatientsList = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 pb-10">
            <h2 className="font-bold text-3xl text-center">
                Listado Pacientes
            </h2>

            <p className="text-gray-400 text-lg mt-3 mb-8 text-center">
                Administra tus {''}
                <span className="text-indigo-600 font-bold">Pacientes</span>
            </p>

            <Paciente />

        </div>
    )
}

export default PatientsList
