import { useState } from "react"
import { useAppDispatch , useAppSelector } from "../hooks/useStore"
import { addNewUser } from "../store/users/slice"
import { useNavigate, Link } from "react-router-dom"

export function AddNewUser () {

    const dispatch = useAppDispatch()
    const users = useAppSelector(state => state.users)

    const navigate = useNavigate()
    const [ error, setError ] = useState<boolean | null>(null)
    const [addtButtonColor, setAddtButtonColor] = useState<string>('bg-violet-900 text-gray-50')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const fields = new FormData(form)
        
        const name = fields.get('name') as string
        const mail = fields.get('email') as string
        const github = fields.get('github') as string
        
        if(!name || !mail || !github){
            setAddtButtonColor('bg-red-400 text-red-700')
            setTimeout(() => setAddtButtonColor('bg-violet-900 text-gray-50 transition-colors duration-1000'), 500)
            setError( true )
            return
        }
        
        const isUsers = () => {
            const newId = users[users.length - 1]
            return newId ? parseInt(newId.id) + 1 : 1
        }

        dispatch(addNewUser({id: isUsers().toLocaleString(), name, mail, github}))

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

                    <div className="flex justify-between">
                        <div className="flex items-center gap-3 ">
                            <button 
                            type="submit" 
                            className={`${addtButtonColor}parent group text-violet-400 text-start w-fit ease-out font-semibold px-5 py-2 rounded-lg`}
                            >
                                <span className="child group-hover:text-white transition-colors duration-300">Add</span>
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