import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {

    const navigate = useNavigate();

    const { handleLogout} = useContext(AuthContext)

    function logout(){

        handleLogout()
        alert('O Usuário foi desconectado com sucesso!')
        navigate('/login')
    }

    return (
        <>
            <div className='w-full bg-black text-white flex justify-center py-9 px-16'>
                <div className="container flex justify-between text-lg items-center">
                    <div className='items-center'>
                        <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
                    </div>

                    <div className='flex gap-3 cursor-pointer'>
                        <Link to='/login' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Login</Link>
                        <Link to='/home' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Home</Link>
                        
                        <div className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Postagens</div>
                        <div className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Temas</div>
                        <div className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Cadastrar tema</div>
                        <div className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Perfil</div>

                        <Link to='' onClick={logout} className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Sair</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar