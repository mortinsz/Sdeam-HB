import {useState} from 'react'
import s from './Main.module.scss'
import Container from '../../Container/Container'
import Select from 'react-select'
import Svg from '../../Svgs/Svg'

function Main() {

  const types = ["Квартиры на сутки", "Коттеджи и усадьбы", "Бани и сауны", "Авто напрокат"];
  const [active, setActive] = useState(types[0]);

  const selectCity = [
    { value: 'Минск', label: 'Минск' },
    { value: 'Москва', label: 'Москва' },
    { value: 'Будапешт', label: 'Будапешт' }
  ]
  const selectRooms = [
    { value: 'Однокомнатная', label: 'Однокомнатная' },
    { value: 'Двухкомнатная', label: 'Двухкомнатная' },
    { value: 'Студия', label: 'Студия' }
  ]

  return (
    <div className={s.main}>
      <Container>
        <div className={s.start}>
            <h1 className={s.h1}>Sdaem.by - у нас живут <span>ваши объявления</span></h1>
            <div className={s.filter}>
                {types.map((type) => (
                  <button className={active === type ? s.btnActive : s.btnInactive} onClick={() => setActive(type)}>
                    {type}
                  </button>
                ))}
            <div className={s.filterChoose}>
              <div className={s.filterSelect}>
                <label className={s.label} htmlFor="city">Город</label>
                <Select id='city' options={selectCity} />
              </div>
              <div className={s.filterSelect}>
                <label className={s.label} htmlFor="room">Комнаты</label>
                <Select id='room' options={selectRooms} />
              </div>

              <div className={s.filterSelect}>
                <div className={s.label}>Цена за сутки (BYN)</div>
                <div className={s.range}>
                  <input type="number" className={s.inputRange} placeholder='От' />
                  <div className={s.slash}>-</div>
                  <input type="number" className={s.inputRange} placeholder='До' />
                </div>
              </div>

              <div className={s.moreOption}>
                <button className={s.moreOptionBtn}>Больше опций <Svg type="moreOption"/></button>
              </div>

              <div className={s.onMap}>
                <button className={s.onMapBtn}>Больше опций <Svg type="map"/></button>
              </div>

              <button className={s.submit}>Показать <Svg type="arrow"/></button>

            </div>
            </div>
        </div>
      </Container>
    </div> 
  )
}

export default Main