import {useState} from 'react'
import s from './SignUp.module.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {NavLink} from 'react-router-dom'
import Svg from '../../Svgs/Svg';

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function SignUp() {

  const [loginOnFocuse, setLoginOnFocuse] = useState(false)
  const [emailOnFocuse, setEmailOnFocuse] = useState(false)
  const [againPasswordOnFocuse, setAgainPasswordOnFocuse] = useState(false)
  const [passwordnOnFocuse, setPasswordOnFocuse] = useState(false)
  const [errorSign, setErrorSign] = useState(false)
  const [errorClass, setErrorClass] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  
  return (
    <div className={s.main}>
      <div className={s.block}>
        <div className={s.formSide}>
          <h1 className={s.title}>Регистрация</h1>
          <Formik
            initialValues={{
              login: '',
              email: '',
              password: '',
              againPassword: '',
            }}
            validate={values => {
              const errors = {};
              if (!values.email || !values.login || !values.password || !values.againPassword) {
                
                setErrorSign(true);
                setErrorClass(true);
                console.log('errooor')

              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  
                  setErrorSign(true);
              } else if (values.passwordValue !== values.againPasswordValue){
                
                setErrorSign(true);

              }else{
                setErrorSign(false);
                setErrorClass(false);
              }
              return errors;

            }}
            onSubmit={async (values) => {
              await sleep(500);
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ isSubmitting }) => (
              <Form className={s.form}>
              <div className={loginOnFocuse ? s.loginOnFocuse : errorClass ? s.errorClass : s.loginOut}>
                <Field  
                  className={s.input + ' ' + s.login}
                  type="login"
                  name="login"
                  placeholder="Логин"
                  autoComplete="off"
                  onFocus={() => setLoginOnFocuse(true)}
                  onBlur={() => setLoginOnFocuse(false)}/>
              </div>
                <ErrorMessage className={s.errorMessage} name="email" component="p"/>

                <div className={emailOnFocuse ? s.emailOnFocuse : errorClass ? s.errorClass : s.emailOut}>
                <Field  
                  className={s.input + ' ' + s.login}
                  type="email"
                  name="email"
                  placeholder="Электронная почта"
                  autoComplete="off"
                  onFocus={() => setEmailOnFocuse(true)}
                  onBlur={() => setEmailOnFocuse(false)}/>
              </div>

                <div className={passwordnOnFocuse ? s.passwordOnFocuse : errorClass ? s.errorClass : s.passwordOut}>
                  <Field  
                    className={s.input + ' ' + s.password}
                    type="password"
                    name="password"
                    autoComplete="off"
                    placeholder="Пароль"
                   
                    onFocus={() => setPasswordOnFocuse(true)}
                    onBlur={() => setPasswordOnFocuse(false)}/>
                  </div>
                  <div className={againPasswordOnFocuse ? s.againPasswordOnFocuse : errorClass ? s.errorClass : s.againPasswordOut}>
                  <Field  
                    className={s.input + ' ' + s.password}
                    type="password"
                    name="againPassword"
                    autoComplete="off"
                    
                    placeholder="Повторите пароль"
                    onFocus={() => setAgainPasswordOnFocuse(true)}
                    onBlur={() => setAgainPasswordOnFocuse(false)}/>
                  </div>
                  {errorSign && 
                  <div className={s.errorBlock}>
                      Ошибка ввода <Svg type='errorSign'/>
                  </div>}
                  <button
                    className={s.btnSubmit}
                    type= "submit"
                    disabled={isSubmitting}>
                    Зарегистрироваться
                  </button>
                  
            </Form>
            )}
          </Formik>
        </div>
        <div className={s.textSide}>
          <div className={s.commit}>
            <h2 className={s.commitTitle}>Пользователь обязуется:</h2>
            <ul className={s.list}>
              <li className={s.listItem}> предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
              <li className={s.listItem}>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
            </ul>
          </div>
          <div className={s.ask}>
            <p className={s.askP}>Уже есть аккаунта? <NavLink to='/login' className={s.askLink}>Войдите</NavLink></p>
          </div>
        </div>
      </div>
      
  </div>
  )

}




export default SignUp
