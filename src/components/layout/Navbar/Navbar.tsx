import style from './Navbar.module.css'
import menu_restaurante from '../../../assets/menu-icons/restaurante_menu.svg'
import menu from '../../../assets/menu-icons/menu.svg'
import { useContext, useState } from 'react'
import { ICategoryContext } from '../../../types/Providers'
import CategoryContext from '../../providers/CategoryProvider'
import { Category } from '../../../types/Product'



const Navbar = () => {
    const {setSelectedCategory, categories} = useContext<ICategoryContext>(CategoryContext)
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(true)


    const toggleMenu = ()=> setMenuIsOpen(!menuIsOpen)
    
    const handleCategory = (category:Category)=>{
        setSelectedCategory(category)
        toggleMenu()
    }
  return (
    <header className={style.container}>
        <div className={style.menu_icon} onClick={toggleMenu}>
            {
                menuIsOpen ?
                <img src={menu_restaurante} alt="" />
                :
                <img src={menu} alt=""/>
            }
        </div>
        <nav className={`${style.nav} animate__animated ${menuIsOpen ? 'animate__slideInDown' : 'animate__slideOutUp'}`}>
            <h1 className={style.logo}>Logo</h1>
            <div className={style.categories_container}>
                <ul>
                    {
                        categories.map((category, index)=>(
                            <li key={index} onClick={()=> handleCategory(category)}><span>{category.beautifulName}</span></li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar