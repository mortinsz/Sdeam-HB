import s from './LogIn.module.scss'
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {NavLink} from 'react-router-dom'

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function LogIn() {

  const [loginOnFocuse, setLoginOnFocuse] = useState(false)
  const [passwordnOnFocuse, setPasswordOnFocuse] = useState(false)

  return (
    <div className={s.main}>
        <div className={s.block}>
            <div className={s.title}>Авторизация</div>
            <div className={s.subtitle}>Авторизируйтесь, чтобы начать публиковать свои объявления</div>
            <Formik
              initialValues={{
                email: '',
                password: '',
                toggle: false,
              }}
              
              validateOnBlur
              onSubmit={async (values) => {
                await sleep(500);
                console.log(JSON.stringify(values, null, 2));
              }}
            >
              {({ isSubmitting }) => (
                <Form className={s.form}>
                  <div className={loginOnFocuse ? s.loginOnFocuse : s.loginOut}>
                    <Field  
                      className={s.input + ' ' + s.login}
                      type="login"
                      name="login"
                      placeholder="Логин"
                      autoComplete="off"
                      onFocus={() => setLoginOnFocuse(true)}
                      onBlur={() => setLoginOnFocuse(false)}/>
                  </div>

                    <div className={passwordnOnFocuse ? s.passwordOnFocuse : s.passwordOut}>
                      <Field  
                        className={s.input + ' ' + s.password}
                        type="password"
                        name="password"
                        autoComplete="off"
                        placeholder="Пароль"
                        onFocus={() => setPasswordOnFocuse(true)}
                        onBlur={() => setPasswordOnFocuse(false)}/>
                    </div>


                    <div className={s.lastLine}>
                      <Field id='checkboxRemember' className={s.checkbox} type="checkbox" name="toggle" />
                      <label htmlFor="checkboxRemember" className={s.checkboxLable}>
                      </label>

                      <NavLink to='/forgetPassword' className={s.forgetPassword}>Забыли пароль?</NavLink>
                    </div>
                      <button
                        className={s.btnSubmit}
                        type= "submit"
                        disabled={isSubmitting}>
                        Войти
                      </button>
                      <div className={s.ask}>
                        <p className={s.askP}>Еще нет аккаунта? <NavLink to='/signup' className={s.askLink}>Создайте акканут</NavLink></p>
                      </div>
                </Form>
              )}
            </Formik>
        </div>
    </div>
  )
}

export default LogIn