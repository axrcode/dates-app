import { useState, useEffect } from 'react'
import Error from './Error'

const Form = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [ nombre, setNombre ] = useState('')
    const [ propietario, setPropietario ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ fecha, setFecha ] = useState('')
    const [ sintomas, setSintomas ] = useState('')

    const [ error, setError ] = useState(false)

    useEffect( () => {
        if ( Object.keys(paciente).length ) {
            //  Reiniciar los inputs del formulario
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }
    }, [paciente])

    const generarId = () => {
        const random = Math.random().toString(36).substr(2)
        const date = Date.now().toString(36)

        return date + random
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        //   Validación deL Formulario
        if ( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
            setError(true)
            return
        }

        setError(false)

        //   Objeto para Paciente
        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            fecha, 
            sintomas,
        }
        
        if ( paciente.id ) {
            objetoPaciente.id = paciente.id
            
            const pacienteActualizado = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState )

            setPacientes(pacienteActualizado)
            setPaciente({})
        } else {
            //   Toma una copia del arreglo y agrega el objeto al final
            objetoPaciente.id = generarId()
            setPacientes([ ...pacientes, objetoPaciente ])
        }
        
        //  Reiniciar los inputs del formulario
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-bold text-3xl text-center">
                Seguimiento Pacientes
            </h2>

            <p className="text-gray-400 text-lg mt-3 mb-8 text-center">
                Añade Nuevos Pacientes y {''}
                <span className="text-indigo-600 font-bold">Administralos</span>
            </p>

            <form 
                onSubmit={handleSubmit}
                className="bg-gray-900 shadow-md rounded-lg p-10 mb-10"
            >
                { error && (
                    <Error 
                        msg='Todos los campos son obligatorios'
                    />
                ) }

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
                        placeholder="Nombre de la Mascota"
                        autoComplete="off"
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
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
                        placeholder="Nombre del Propietario"
                        autoComplete="off"
                        value={propietario}
                        onChange={ (e) => setPropietario(e.target.value) }
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
                        placeholder="Email Contacto Propietario"
                        autoComplete="off"
                        value={email}
                        onChange={ (e) => setEmail(e.target.value) }
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
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
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
                        value={sintomas}
                        onChange={ (e) => setSintomas(e.target.value) }
                    />
                </div>
                
                <input 
                    className="bg-indigo-600 w-full p-3 text-white rounded-md uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    type="submit" 
                    value={ paciente.id ? 'Guardar Cambios' : 'Agregar Paciente' }
                />
            </form>

        </div>
    )
}

export default Form