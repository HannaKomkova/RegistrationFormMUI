import RegistrationStyle from './Registration.module.scss';
import Header from '../../components/Header/Header.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';

function Registration(){

    const[promptedEmail, setPromptedEmail]= useState('');
    const[promptedPassword, setPromptedPassword]= useState('');
    const[promptedDublictatedPassword, setPromptedDublictatedPassword]= useState('');

    const patternEmail = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/

    function checkPassword(){
        if(promptedPassword === promptedDublictatedPassword && patternEmail.test(promptedEmail)){
            alert('Регистрация успешно завершена!')
        } else if(promptedPassword !== promptedDublictatedPassword && !patternEmail.test(promptedEmail)){
            alert('Вы неверно ввели email и повторный пароль!')
        } else if(!patternEmail.test(promptedEmail)){
            alert('Вы неверно ввели email!')
        } else {
            alert('Вы неверно ввели повторный пароль!')
        }
          
    }
    return <>
    <Header/>
        <main>
            <section className={RegistrationStyle.hero}>
                <div className='container'>
                    <div className={RegistrationStyle['hero-wrapper']}>
                        <h1>Registration</h1>
                        <TextField id="standard-basic" label="Email" variant="standard" onChange={(e) =>{
                            setPromptedEmail(e.target.value)
                        }} />
                        <TextField id="standard-basic" label="Password" variant="standard" onChange={(e)=>{
                            setPromptedPassword(e.target.value)
                        }} />
                        <TextField id="standard-basic" label="Confirm Password" variant="standard" onChange={(e)=>{
                            setPromptedDublictatedPassword(e.target.value)
                        }}/>

                        <Button variant="outlined" onClick={()=> {checkPassword()}}>Sign up</Button>
                        <div className={RegistrationStyle['hero-text']}>
                            <p>Already have an account?</p>
                            <Link to={'/'} className={RegistrationStyle['hero-link']}>SIGN IN</Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
 
}

export default Registration;