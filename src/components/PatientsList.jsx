import { Fragment } from 'react'
import Patient from './Patient'

const PatientsList = ({ pacientes, setPaciente }) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 pb-10">

            {
                pacientes && pacientes.length ? (
                    <Fragment>
                        <h2 className="font-bold text-3xl text-center">
                            Listado Pacientes
                        </h2>
            
                        <p className="text-gray-400 text-lg mt-3 mb-8 text-center">
                            Administra tus {''}
                            <span className="text-indigo-600 font-bold">Pacientes</span>
                        </p>
            
                        { 
                            pacientes.map( paciente => (
                                <Patient
                                    key={paciente.id} 
                                    paciente={paciente}
                                    setPaciente={setPaciente}
                                />
                            ) )   
                        }
                    </Fragment>
                ) : (
                    <Fragment>
                        <h2 className="font-bold text-3xl text-center">
                            No hay Pacientes
                        </h2>
            
                        <p className="text-gray-400 text-lg mt-3 mb-8 text-center">
                            Comienza agregando Pacientes {''}
                            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
                        </p>
                    </Fragment>
                )
            }

        </div>
    )
}

export default PatientsList
