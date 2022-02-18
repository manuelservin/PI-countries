import{useState} from 'react'

export const useForm = (initialForm,validateForm) => {
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({}); // si el obj esta vacio,no hay errores
    const [loading, setLoading] = useState(false); 
    const [response, setResponse] = useState(null)

    const handleChange= (e) => {
        const {name,value} = e.target;
        setForm({ 
            ...form,
            [name]: value,
        })
    } //manejo el cambio
    const handleBlur= (e) => {
        handleChange(e);
        setErrors(validateForm(form)) //si hay algun error se crea un msg en el obj error

    } //aca hago las validaciones
    const handleSubmit= (e) => {}

    return{
        form,
        errors,
        loading,
        response,
        handleChange,
        handleBlur,
        handleSubmit
    }


   
}

// los hooks personalizados no se exportan por default