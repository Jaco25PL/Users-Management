import { useState } from "react"
import { useAppDispatch ,useAppSelector } from "../hooks/useStore"
import { updateUser } from "../store/users/slice"
import { Link, useParams, useNavigate } from "react-router-dom"
// import { UserId } from "../types"

type ErrorState =  boolean | null

export function Update () {

    const navigate = useNavigate()

    const [ error , setError] = useState<ErrorState>(null)
    const [addtButtonColor, setAddtButtonColor] = useState<string>('bg-violet-900 text-gray-50')

    const { id } = useParams()
    const users = useAppSelector(state => state.users)
    const dispatch = useAppDispatch()

    const userExist = users.filter(user => user.id === id)
    const { name, mail, github } = userExist[0]

    const [ newName, setNewName ] = useState(name)
    const [ newMail, setNewMail ] = useState(mail)
    const [ newGithub, setNewGithub ] = useState(github)


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
            mail: newMail,
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

                    <div className="flex justify-between">
                        <div className="flex items-center gap-3 ">
                            <button 
                            type="submit" 
                            className={`${addtButtonColor}parent group text-violet-400 text-start w-fit ease-out font-semibold px-5 py-2 rounded-lg`}
                            >
                                <span className="child group-hover:text-white transition-colors duration-300">Update</span>
                            </button>
                            { 
                                error && <span className="text-red-400">Please fill al the fields</span>
                            }
                        </div>

                        <Link 
                        to={'/'} 
                        className={`bg-zinc-700 hover:bg-violet-900 transition-colors duration-300 text-start w-fit ease-out font-semibold px-5 py-2 rounded-lg`}
                        >Back</Link>
                    </div>

                </form>
            </div>

        </section>
    )
}