import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className="flex justify-center bg-[#a56a6a] text-white py-10">
                <div className="container flex flex-col items-center py-4">
                    <p className='text-xl font-bold'>Blog Pessoal | Copyright: </p>
                    <p className='text-lg pt-2 font-bold'>Contato</p>
                    <div className='flex gap-2 pt-2'>
                        <a href="https://github.com/als-samara" target="_blank" className='hover:scale-90'>
                            <GithubLogo size={44}/>
                        </a>
                        <a  href='https://www.linkedin.com/in/samara-almeida-als/' target="_blank" className='hover:scale-90'>
                            <LinkedinLogo size={44}/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer