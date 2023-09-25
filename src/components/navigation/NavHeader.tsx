import GoogleIcon from "../GoogleIcon";
import {navigationStore} from "../../store";
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "./assets/logo.svg";

const NavHeader = () => {
    return (

        <div className='flex items-center gap-5 text-gray-700 w-[280px]'>
            <div className='cursor-pointer flex items-center ml-5' onClick={() => navigationStore.setIsMenuOpen()}>
                <GoogleIcon icon='menu'/>
            </div>
            <Link to='/Входящие'>
                <div className='flex items-center gap-1'>
                    <div className='h-10 w-10'>
                        <Logo />
                    </div>
                    <h4 className='text-xl font-medium '>Readonly mail box</h4>
                </div>
            </Link>
        </div>
    )
}

export default NavHeader