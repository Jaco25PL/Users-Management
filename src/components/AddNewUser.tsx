import { useState } from "react"
import { useAppDispatch , useAppSelector } from "../hooks/useStore"
import { addNewUser } from "../store/users/slice"
import { useNavigate } from "react-router-dom"
import { FormButton } from "./FormButton"

export function AddNewUser () {

    const dispatch = useAppDispatch() //Send an action to the slice
    const users = useAppSelector(state => state.users) // Whet the users array to know the last one for the ID

    const navigate = useNavigate() // Go back (this case)

    const [ error, setError ] = useState<boolean | null>(null) 
    const [addtButtonColor, setAddtButtonColor] = useState<string>('bg-violet-900 text-gray-50') //Change add button color when an error happens

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const fields = new FormData(form) // Get the inputs then by their attribute name
        
        const name = fields.get('name') as string 
        const mail = fields.get('email') as string
        const github = fields.get('github') as string
        
        if(!name || !mail || !github){
            setAddtButtonColor('bg-red-400 text-red-700') // If there is an error paint the button red
            setTimeout(() => setAddtButtonColor('bg-violet-900 text-gray-50 transition-colors duration-1000'), 500) // After a half second turn it as default slowly
            setError( true )
            return
        }
        
        const isUsers = () => {
            const newId = users[users.length - 1]
            return newId ? parseInt(newId.id) + 1 : 1 // If no users retrun one, if there are users retrun the last one id
        }

        dispatch(addNewUser({id: isUsers().toLocaleString(), name, mail: mail.toLocaleLowerCase() , github})) // Send it all to the slice

        setError(false)
        form.reset()
        navigate('/')
    }


    return (
        <section className="mt-10 w-[500px]">

            <h2 className="text-xl font-semibold mb-3" >Add a new user</h2>

            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full justify-start gap-3 [&>input]:bg-zinc-700 [&>input]:py-2 [&>input]:px-5 [&>input]:rounded-lg">
                    <input type="text" placeholder="Name" name="name" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="text" placeholder="Github Name" name="github" />

                    <FormButton addtButtonColor={addtButtonColor} error={error} label={'Add'} />
                    
                </form>
            </div>

        </section>
    )
}