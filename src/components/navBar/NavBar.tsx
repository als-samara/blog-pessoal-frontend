import { Link } from "react-router-dom"

function Navbar() {

    return (
        <>
            <div className='w-full bg-teal-700 text-white flex justify-center py-8 px-16'>
                <div className="container flex justify-between text-lg items-center">
                    <div className='items-center'>
                        <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
                    </div>

                    <div className='flex gap-3 cursor-pointer'>
                        <Link to='/login' className='hover:bg-rose-900 py-2 px-4 rounded-3xl duration-300'>Login</Link>
                        <div className='hover:bg-rose-900 py-2 px-4 rounded-3xl duration-300'>Postagens</div>
                        <div className='hover:bg-rose-900 py-2 px-4 rounded-3xl duration-300'>Temas</div>
                        <div className='hover:bg-rose-900 py-2 px-4 rounded-3xl duration-300'>Cadastrar tema</div>
                        <div className='hover:bg-rose-900 py-2 px-4 rounded-3xl duration-300'>Perfil</div>
                        <div className='hover:bg-rose-900 py-2 px-4 rounded-3xl duration-300'>Sair</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar