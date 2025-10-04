import LoginStyle from './Login.module.scss';
import Header from '../../components/Header/Header.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function Login(){
    return <>
    <Header/>
        <main>
            <section className={LoginStyle.hero}>
                <div className='container'>
                    <div className={LoginStyle['hero-wrapper']}>
                        <h1>Login</h1>
                        <TextField id="standard-basic" label="Email" variant="standard" />
                        <TextField id="standard-basic" label="Password" variant="standard" />
                        <Button variant="outlined">Sign in</Button>
                    </div>
                </div>
            </section>
        </main>
    </>
 
}

export default Login;