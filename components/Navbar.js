import Style from '../styles/navbar.module.css'

export default function Navbar() {
    return(
        <header>
            <nav className={Style.nav}>
                <span className={Style.logo}>Bitt</span>
                <button className={Style.addbtn}>Add</button>
            </nav>
        </header>
    );
};