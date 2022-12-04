import React, {useState} from 'react'
import Container from '../../Container/Container'
import Sosials from '../../Socials/Socials'
import Svg from '../../Svgs/Svg'
import s from './Contacts.module.scss'
import { Formik, Form, Field, ErrorMessage } from 'formik';

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function Contacts() {

  const soialsmedias = [
    {
      id: '1',
      type: 'viber',
      link: '/'
    },
    {
      id: '2',
      type: 'telegram',
      link: '/'
    },
    {
      id: '3',
      type: 'whatsup',
      link: '/'
    },
  ]

  const [nameOnFocuse, setNameOnFocuse] = useState(false)
  const [emailOnFocuse, setEmailOnFocuse] = useState(false)
  const [messageOnFocuse, setMessageOnFocuse] = useState(false)
  const [nameErrorSign, setNameErrorSign] = useState(false)
  const [emailErrorSign, setEmailErrorSign] = useState(false)
  const [messageErrorSign, setMessageErrorSign] =  useState(false)

  const [input, setInput] = useState('')


  return (
    <div className={s.main}>
        <Container>
            <div className={s.inner}>
                <div className={s.text}>
                    <h2 className={s.mainText}>Контакты</h2>
                    <p className={s.subtitle}>Если у Вас есть пожелания, предложения или претензии по организации работы сайта мы всегда рады услышать Ваше мнение.</p>
                    <ul className={s.info}>
                      <li className={s.listInfo}>
                        <div className={s.svgItem}><Svg type='map'/></div>
                        <div className={s.textItem}>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23 </div>           
                      </li>
                      <li className={s.listInfo}>
                        <div className={s.svgItem}><Svg type='phone'/></div>
                        <div className={s.textItem}>+375 29 621-48-33 <Sosials classAdd={s.classAdd} soialsmedias={soialsmedias}/>  </div>     
                      </li>
                      <li className={s.listInfo }>
                        <div className={s.svgItem}><Svg type='mail'/></div>
                        <div className={s.textItem + ' ' + s.underline}>sdaem@sdaem.by</div> 
                      </li>
                      <li className={s.listInfo}>
                        <div className={s.svgItem}><Svg type='clock'/></div>
                        <div className={s.textItem}>Режим работы: <span> 08:00-22:00 </span></div> 
                      </li>
                    </ul>
                    <div className={s.infoPerson}>ИП Шушкевич Андрей Викторович <br/>192602485 Минским горисполкомом 10.02.2016</div>
                    <div className={s.warning}>
                      <div className={s.warningSvg}><Svg type='errorSign'/></div>
                      <div className={s.warningText}>Администрация сайта не владеет информацией о наличии свободных квартир</div>
                    </div>
                </div>
                <div className={s.place}>
                <Formik
                    initialValues={{
                      name: '',
                      email: '',
                      message: '',
                    }}
                    validate={values => {
                      const errors = {};
                      if (!values.email || !values.name || !values.message) {
                        
                        setNameErrorSign(true);
                        setEmailErrorSign(true);
                        setMessageErrorSign(true);
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                        ) { 
                          setEmailErrorSign(true);
                      } else if (values.name){
      
                        setNameErrorSign(true);
                      }else if (values.message){
      
                        setMessageErrorSign(true);
                      }else{
                        setNameErrorSign(false)
                        setEmailErrorSign(false);
                        setMessageErrorSign(false);
                      }
                      return errors;

                    }}
                    onSubmit={async (values) => {
                      await sleep(500);
                      alert(JSON.stringify(values, null, 2));
                    }}
                  >
                    
                    <Form className={s.form}>
                    <div className={s.topField}>
                      <div className={s.field}>
                        <label className={s.lable} htmlFor="nameField">Ваше имя</label>
                        <div className={nameOnFocuse ? s.nameOnFocuse : nameErrorSign ? s.errorField : s.inputName}>
                          <Field 
                            type="name"
                            name="name"
                            autoComplete="off"
                            onFocus={() => setNameOnFocuse(true)}
                            onBlur={() => setNameOnFocuse(false)}
                            placeholder="Введите"
                            id="nameField" 
                            className={s.input + ' ' + s.nameInput} />
                        </div>
                      </div>
                      <div className={s.field}>
                        <label className={s.lable} htmlFor="emailField">Ваша электронная почта</label>
                        <div className={emailOnFocuse ? s.emailOnFocuse : emailErrorSign ? s.errorField : s.inputEmail}>
                          <Field 
                            onFocus={() => setEmailOnFocuse(true)}
                            onBlur={() => setEmailOnFocuse(false)}
                            id="emailField" 
                            placeholder="Введите"
                            type="email"
                            name="email"
                            className={s.input + ' ' + s.emailInput} />
                        </div>
                      </div>
                    </div>
                    <div className={s.bottonField}>
                      <div className={s.field}>
                          <label className={s.lable} htmlFor="emailField">Ваша электронная почта</label>
                          <div className={messageOnFocuse ? s.messageOnFocuse : messageErrorSign ? s.errorField : s.textareaField}>
                            <Field 
                              as='textarea'
                              autoComplete="off"
                              onFocus={() => setMessageOnFocuse(true)}
                              onBlur={() => setMessageOnFocuse(false)}
                              id="emailField" 
                              type="message"
                              name="message"
                              className={s.textarea} />
                          </div>
                        </div>
                    </div>
                    <button type='submit' className={s.button}>Отправить</button>
                    </Form>

                  </Formik>
                </div>
                <div className={s.socials}>

                </div>
            </div> 
        </Container>
    </div>
  )
}

export default Contacts


