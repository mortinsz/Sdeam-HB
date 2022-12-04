import {useState} from 'react'
import s from './SignUp.module.scss'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {NavLink} from 'react-router-dom'
import BasicForms from '../../../elements/BasicForms'
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


function SignUp() {

  const [loginOnFocuse, setLoginOnFocuse] = useState(false)
  const [emailOnFocuse, setEmailOnFocuse] = useState(false)
  const [againPasswordOnFocuse, setAgainPasswordOnFocuse] = useState(false)
  const [passwordnOnFocuse, setPasswordOnFocuse] = useState(false)
  const [errorSign, setErrorSign] = useState(false)
  const [errorClass, setErrorClass] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  // config
  const [visible, setVisible] = useState(false)

  // navigation to finish registration
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `RegistFinish`; 
    navigate(path);
  }
  // add capcha
  function capchOnChange(value) {
    console.log("Captcha value:", value);
  }

  const visibleText = () => {
    if(visible){
      setVisible(false)
    }
    else{
      setVisible(true)
    }
  }
  
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
              confirmPassword: '',
            }}
            validate={BasicForms}
            onSubmit={async (values) => {
              await sleep(500);
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ isSubmitting }) => (
              <Form className={s.form} autoComplete="false">
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
                <div className={emailOnFocuse ? s.emailOnFocuse : s.emailOut}>
                    <Field  
                      className={s.input}
                      type="email"
                      name="email"
                      label='email'
                      placeholder="Электронная почта"
                      autoComplete="off"
                      onFocus={() => setEmailOnFocuse(true)}
                      onBlur={() => setEmailOnFocuse(false)}/>
                  </div>
                <div className={passwordnOnFocuse ? s.againPasswordOnFocuse : s.passwordOut}>
                  <Field  
                    className={s.input}
                    type="password"
                    name="password"
                    placeholder="Пароль"
                    autoComplete="off"
                    onFocus={() => setPasswordOnFocuse(true)}
                    onBlur={() => setPasswordOnFocuse(false)}/>
                </div>
                <div className={againPasswordOnFocuse ? s.againPasswordOnFocuse : s.againPasswordOut}>
                  <Field  
                    className={s.input}
                    type="password"
                    name="confirmPassword"
                    placeholder="Пароль"
                    autoComplete="off"
                    onFocus={() => setAgainPasswordOnFocuse(true)}
                    onBlur={() => setAgainPasswordOnFocuse(false)}/>
                </div>
                <ReCAPTCHA
                  sitekey="Your client site key"
                  onChange={capchOnChange}
                />
                  <div className={s.askNone}>
                    <p className={s.askP}>Уже есть аккаунта? <NavLink to='/login' className={s.askLink}>Войдите</NavLink></p>
                  </div>  
                <button className={s.commimobil} onClick={visibleText}>Пользователь обязуется:</button>
                <ul className={visible ? s.list : s.listNone}>
                  <li className={s.listItem}> предоставлять достоверную и актуальную информацию при регистрации и добавлении объекта;</li>
                  <li className={s.listItem}>добавлять фотографии объектов соответствующие действительности. Администрация сайта sdaem.by оставляет за собой право удалять любую информацию, размещенную пользователем, если сочтет, что информация не соответствует действительности, носит оскорбительный характер, нарушает права и законные интересы других граждан либо действующее законодательство Республики Беларусь.</li>
                </ul>

                  <button
                    className={s.btnSubmit}
                    type= "submit"
                    disabled={isSubmitting}
                    onClick={routeChange}
                    >
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
