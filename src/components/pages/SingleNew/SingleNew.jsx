import s from './SingleNew.module.scss'
import {useParams} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Navigation from '../../Navigation/Navigation'
import Svg from '../../Svgs/Svg'
import Container from '../../Container/Container'
import Date from '../../Date/Date'
import {
  VKShareButton,
  FacebookShareButton,
  ViberShareButton,
  TelegramShareButton,
  WhatsappShareButton,
} from "react-share";
import NewsCard from '../../NewsCard/NewsCard'

function SingleNew() {
  const singleNew = {
    navigation: {
        title: 'Линия Сталина: суровый отдых в усадьбах на сутки ',
        breadcrumbs: [
            {
                id: '1',
                name: '',
                svgName: 'home',
                link: '/main',
                svg: true,
            },
            {
                id: '2',
                name: 'Новости',
                svgName: '',
                link: '/news',
                svg: false,
            },
            {
              id: '2',
              name: 'Линия Сталина: суровый отдых в усадьбах на сутки',
              svgName: '',
              link: '',
              svg: false,
          },
        ],
    },
    search:{
        searchTitle: 'Поиск по статьям',
    },
    date: '14 Января 2008',
    img: '../assets/images/CardImg.png',
    imgAlt: 'NewsName',
    articles: [
      {
          id: '1',
          scrImg: '../assets/images/CardImg.png',
          alt: 'card',
          title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
          description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
          date: '14 Января 2008',
          btnText: 'Читать'
      },
      {
          id: '2',
          scrImg: '../assets/images/CardImg.png',
          alt: 'card',
          title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
          description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
          date: '14 Января 2008',
          btnText: 'Читать'
      },
      {
          id: '3',
          scrImg: '../assets/images/CardImg.png',
          alt: 'card',
          title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
          description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
          date: '14 Января 2008',
          btnText: 'Читать'
      },
    ]
}

  let breadcrumbsItems = singleNew.navigation.breadcrumbs.map( bc =>
    <li className={s.linkCrumb} key={bc.id}>
        <a href={bc.link} className={s.navlink}>
            <Svg className={`${bc.svg && s.linksvg}`} type={bc.svgName}/>
            {bc.name}
        </a>
    </li>
)
let articles = singleNew.articles.map( ar =>
  <NewsCard linkTo={`/news/${ar.id}`} key={ar.id} title={ar.title} scrImg={ar.scrImg} description={ar.description} text={ar.btnText} date={ar.date}/>
)

  return (
    <div className={s.main}>
      <div className={s.inner}>

        <Container>
          <Navigation breadClass={s.breadClass} breadcrumbsNav={breadcrumbsItems} nameClass={s.nameTitle} title={singleNew.navigation.title}/>
        </Container>
        <Container>
          <div className={s.moreInfo}>
            <Date date={singleNew.date} nameClass={s.date}/>
            <div className={s.socials}>
              <p className={s.name}>Поделиться</p>
              <ul className={s.listOfSocials}>
                <li className={s.socialBlock}>
                  <VKShareButton 
                    url={"/"}
                    quote={" - World is yours to explore"}
                    hashtag="#"
                    className={s.socialMediaButton}>
                    <Svg type='vk'/>
                  </VKShareButton>
                </li>
                <li className={s.socialBlock}>
                  <FacebookShareButton 
                      url={"/"}
                      quote={" - World is yours to explore"}
                      hashtag="#"
                      className={s.socialMediaButton}>
                      <Svg type='facebookLetter'/>
                    </FacebookShareButton>
                </li>
                <li className={s.socialBlock}>
                  <ViberShareButton 
                      url={"/"}
                      quote={" - World is yours to explore"}
                      hashtag="#"
                      className={s.socialMediaButton}>
                      <Svg type='viber'/>
                    </ViberShareButton>
                </li>
                <li className={s.socialBlock}>
                  <TelegramShareButton 
                      url={"/"}
                      quote={" - World is yours to explore"}
                      hashtag="#"
                      className={s.socialMediaButton}>
                      <Svg type='telegram'/>
                    </TelegramShareButton>
                </li>
                <li className={s.socialBlock}>
                  <WhatsappShareButton 
                      url={"/"}
                      quote={" - World is yours to explore"}
                      hashtag="#"
                      className={s.socialMediaButton}>
                      <Svg type='whatsup'/>
                    </WhatsappShareButton>
                </li>
              </ul>
            </div>
          </div>
        </Container>
          <div className={s.image}>
            <Svg type='dots'/>
            <img src={singleNew.img} alt={singleNew.imgAlt}/>
          </div>
          <div className={s.text}>
              
              <p className={s.textP}>«Линия Сталина» - это уникальный музейный комплекс, располагающийся под открытым небом. Поэтому желательно приезжать сюда в хорошую погоду. Его территория поистине огромна: целых 26 га. Такое название дано музею неспроста: «Линией Сталина» в 20е-30е гг. XX века именовали цепь укреплений, созданную для защиты государственной границы СССР. Комплекс же построен лишь в 2005 году – к шестидесятой годовщине Победы в Великой Отечественной войне.</p>

              <p className={s.textP}>Если вы заранее позаботились о том, чтобы снять усадьбу на сутки в направлении Молодечно, то можете провести в музейном комплексе хоть целый день. Здесь действительно есть на что посмотреть: ДОТы, испещрённые следами немецких снарядов, окопы, противотанковые заграждения, зенитные пушки, бронетехника… Вы встретите даже элементы ракетных войск – и всё это не муляжи, а настоящие боевые орудия! За отдельную плату вам предложат пострелять из винтовки и пулемёта, а также прокатиться на танке. Проголодались? Загляните в кафе и насладитесь сытным домашним обедом.</p>

              <p className={s.textP}>Посетить «Линию Сталина» будет интересно как взрослым, так и детям. Особенно мальчишкам! Уставшие от впечатлений, они будут рады вместо долгой дороги домой остановиться на ночь в уютном современном коттедже. На сайте можно выбрать и снять посуточно наиболее удобный для вас вариант. Проведите незабываемые выходные за городом – приезжайте в «Линию Сталина»!</p>

              <p className={s.textP}>Отличная усадьба в 10 км от "Линии Сталина".</p>
          </div>
          <div className={s.readMore}>
            <Container>
              <div className={s.titleReaddMore}>Читайте также</div>
              <div className={s.cards}>
                {articles}
              </div>
            </Container>
          </div>
      </div>
    </div>
  )
}

export default SingleNew