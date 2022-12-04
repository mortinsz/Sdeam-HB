import React, {useState} from 'react'
import Select from 'react-select'
import Svg from '../../../Svgs/Svg'
import s from './Filter.module.scss'

function Filter() {

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
    const filterData = [  
      {
        id: '0',
        first: 'Город', 
        firstLable: 'city', 
        firstOptions: 'selectCity',
        second: 'Комнаты', 
        secondLable: 'room', 
        secondOptions: 'selectRooms', 
      },
      {
        id: '1',
        first: 'Город', 
        firstLable: 'city', 
        firstOptions: 'selectCity',
        second: 'Комнаты', 
        secondLable: 'room', 
        secondOptions: 'selectRooms', 
      },
      {
        id: '2',
        first: 'Город', 
        firstLable: 'city', 
        firstOptions: 'selectCity',
        second: 'Бани', 
        secondLable: 'bath', 
        secondOptions: 'selectBath', 
      },
      {
        id: '3',
        first: 'Город', 
        firstLable: 'city', 
        firstOptions: 'selectCity',
        second: 'Авто', 
        secondLable: 'Car', 
        secondOptions: 'selectCar', 
      }
    ]

    let idFilter = types.indexOf(active)
  return (
    <div className={s.filter}>
    {types.map((type) => (
      <button className={active === type ? s.btnActive : s.btnInactive} onClick={() => {setActive(type) 
      console.log(idFilter)}}>
        {type}
      </button>
    ))}

        <div className={s.filterChoose}>
            <div className={s.filterSelect}>
              <label className={s.label} htmlFor="city">{filterData[idFilter].first}</label>
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
            <button className={s.moreOptionBtn}>На карте <Svg type="map"/></button>
            </div>

            <button className={s.submit}>Показать <Svg type="arrow"/></button>

        </div>
    </div>
  )
}

export default Filter