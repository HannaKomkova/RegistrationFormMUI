import HeaderStyle from './Header.module.scss';
import { Link } from 'react-router-dom';


function Header(){
return <>
    <header className={HeaderStyle.header}>
      <div className='container'>
        <div className={HeaderStyle["header-wrapper"]}>
            <Link to={'/'} className={HeaderStyle['header-link']}>Login</Link>
            <Link to={'/registration'} className={HeaderStyle['header-link']}>Registration</Link>
          </div>
        </div>
    </header>
</>

}

export default Header;
