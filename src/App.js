import { useState } from 'react'
import Form from './components/Form';
import Header from './components/Header';
import PatientsList from './components/PatientsList';

function App() {

    const [ pacientes, setPacientes ] = useState([]);

    return (
        <div className="container mx-auto mt-20 md:px-20 px-5">
            <Header />

            <div className="mt-12 md:flex">
                <Form 
                    pacientes={pacientes}
                    setPacientes={setPacientes}
                />
                <PatientsList 
                    pacientes={pacientes}
                />
            </div>
        </div>
    );
}

export default App;