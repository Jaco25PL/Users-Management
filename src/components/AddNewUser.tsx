import { useAppDispatch } from "../hooks/useStore"
import { addNewUser } from "../store/users/slice"

export function AddNewUser () {

    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const form = e.target as HTMLFormElement
        const fields = new FormData(form)
        
        const name = fields.get('name') as string
        const mail = fields.get('email') as string
        const github = fields.get('github') as string
        
        dispatch(addNewUser({name, mail, github}))
        
    }

    return (
        <section className="mt-10">

            <h2 className="text-xl font-semibold mb-3" >Add a new user</h2>

            <div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full justify-start gap-3  [&>input]:py-2 [&>input]:px-5 [&>input]:rounded-lg">
                    <input type="text" placeholder="Name" name="name" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="text" placeholder="Github Name" name="github" />

                    <button type="submit" className="bg-gray-700 text-start w-fit py-2 px-5 rounded-lg font-bold hover:bg-gray-600 active:bg-gray-500 transition-colors duration-300" >Add</button>
                </form>
            </div>

        </section>
    )
}