import { useState } from "react"
import { useAppDispatch ,useAppSelector } from "../hooks/useStore"
import { updateUser } from "../store/users/slice"
import { useParams, useNavigate } from "react-router-dom"
import { FormButton } from "./FormButton"

type ErrorState =  boolean | null

export function Update () {

    const navigate = useNavigate()

    const [ error , setError] = useState<ErrorState>(null)
    const [addtButtonColor, setAddtButtonColor] = useState<string>('bg-violet-900 text-gray-50')

    const { id } = useParams() // Get what comes as the param we defeined when the user click edit
    const users = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const userExist = users.filter(user => user.id === id) // Take the user with the same ID as the useParams
    const { name, mail, github } = userExist[0] // Take the first (the only one)

    const [ newName, setNewName ] = useState<string>(name) // States to update the fields
    const [ newMail, setNewMail ] = useState<string>(mail)
    const [ newGithub, setNewGithub ] = useState<string>(github)


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if(!newName || !newMail || !newGithub){
            setAddtButtonColor('bg-red-400 text-red-700')
            setTimeout(() => setAddtButtonColor('bg-violet-900 text-gray-50 transition-colors duration-1000'), 500)
            setError( true )
            return
        }
 
        id && dispatch(updateUser({
            id: id,
            name: newName,
            mail: newMail.toLocaleLowerCase(),
            github: newGithub,
        }))
        setError(false)
        navigate('/')
    }

    return (
               
        <section className="mt-10 w-[500px]">

            <h2 className="text-xl font-semibold mb-3" >Edit user</h2>

            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full justify-start gap-3 [&>input]:bg-zinc-700 [&>input]:py-2 [&>input]:px-5 [&>input]:rounded-lg">
                    <input value={newName}   onChange={e => setNewName(e.target.value)} type="text" placeholder="Name" name="name" />
                    <input value={newMail}   onChange={e => setNewMail(e.target.value)} type="text" placeholder="Email" name="email" />
                    <input value={newGithub} onChange={e => setNewGithub(e.target.value)} type="text" placeholder="Github Name" name="github" />

                    <FormButton addtButtonColor={addtButtonColor} error={error} label={'Update'} />

                </form>
            </div>

        </section>
    )
}