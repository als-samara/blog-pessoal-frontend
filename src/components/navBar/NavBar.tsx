import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { toastAlerta } from "../../utils/toastAlert";

function Navbar() {

    const navigate = useNavigate();

    const { usuario, handleLogout} = useContext(AuthContext)

    let component: ReactNode

    function logout(){

        handleLogout()
        toastAlerta('O Usuário foi desconectado com sucesso!', 'sucesso')
        navigate('/login')
    }

    if (usuario.token !== ""){
        component = (
            <div className='w-full bg-amber-400 text-white flex justify-center py-10 px-16'>
                <div className="container flex justify-between text-lg items-center">
                    <div className='items-center'>
                        <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link>
                    </div>

                    <div className='flex gap-3 cursor-pointer'>
                        <Link to='/home' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Home</Link>
                        <Link to='/postagens' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Postagens</Link>
                        <Link to='/temas' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Temas</Link>
                        <Link to='/cadastroTema' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Cadastrar Tema</Link>
                        <Link to='/profile' className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Perfil</Link>
                        <Link to='' onClick={logout} className='hover:bg-[#ff725e] py-1 px-4 rounded-3xl duration-300'>Sair</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar