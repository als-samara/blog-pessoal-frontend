import { Link } from "react-router-dom"

function Home() {

    return (
        <>
            <div id="container" className="bg-stone-50 flex justify-center py-14">
                <div id="subcontainer" className="container grid grid-cols-2">

                    <div id="text" className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className="text-5xl font-bold">Seja bem-vinde</h2>
                        <p className="text-xl">Expresse aqui os seus pensamentos e opiniões...</p>

                        <div className="flex justify-around gap-4">
                            <Link to='/cadastroPostagem' className="rounded border-black border-solid border-2 px-4 py-2">
                                Cadastrar Postagem
                            </Link>
                            {/* aqui vai o outro botão */}
                        </div>
                    </div>

                    <div id="image" className="flex justify-center">
                        <img src="https://i.imgur.com/Vb4D5M2.png" alt="Imagem da página Home" className="w-2/3" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

// rfce -> atalho para criar o componente padrão 