import Logo from '@/assets/images/logo.png';
import IconUser from '@/assets/images/icon-user.png';
import IconAbout from '@/assets/images/icon-about.png';
import IconCart from '@/assets/images/icon-cart.png';
import { Link } from '@tanstack/react-router';

export const Header = () => {
    return (
        <div className="relative">
            <header className='fixed top-10 left-0 right-0 z-8 mx-8'>
                <div className=' bg-white text-black max-w-264 mx-auto flex justify-between items-center py-3 px-4 rounded-xl mt-4'>
                    <img src={Logo} alt="Logo SyntaxWear" className='w-25.6 md:w-28.8' />

                    <nav className='hidden min-[768px]:block'>
                        <ul className='flex gap-8'>
                            <li>
                                <a href="#">Masculino</a>
                            </li>
                            <li>
                                <a href="#">Feminino</a>
                            </li>
                            <li>
                                <a href="#">Outlet</a>
                            </li>
                        </ul>
                    </nav>

                    <nav>
                        <ul className='flex gap-3.2 md:gap-8'>
                            <li className='hidden min-[768px]:block'>
                                <a href="#">Nossas lojas</a>
                            </li>
                            <li className='hidden min-[768px]:block'>
                                <a href="#">Sobre</a>
                            </li>
                            <li>
                                <Link to="/sign-in">
                                    <img src={IconUser} alt="Ícone de login" />
                                </Link>
                            </li>
                            <li>
                                <a href="#"><img src={IconAbout} alt="Ícone de sobre" /></a>
                            </li>
                            <li>
                                <a href="#"><img src={IconCart} alt="Ícone de carrinho" /></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
}