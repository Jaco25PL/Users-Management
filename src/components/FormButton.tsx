import { Link } from "react-router-dom"

interface Props {
    addtButtonColor: string
    error: boolean | null
    label: string   
}

export function FormButton ({ addtButtonColor, error, label }: Props) {

    return (
        <div className="flex justify-between">
            <div className="flex items-center gap-3 ">
                <button 
                type="submit" 
                className={`${addtButtonColor}parent group text-violet-400 text-start w-fit ease-out font-semibold px-5 py-2 rounded-lg`}
                >
                    <span className="child group-hover:text-white transition-colors duration-300">{label}</span>
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
    )
}