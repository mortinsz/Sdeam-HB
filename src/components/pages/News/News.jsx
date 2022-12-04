import {useState ,useEffect} from 'react'
import Container from '../../Container/Container'
import Navigation from '../../Navigation/Navigation'
import NewsCard from '../../NewsCard/NewsCard'
import Search from '../../Search/Search'
import Svg from '../../Svgs/Svg'
import s from './News.module.scss'
import {data} from '../../../data'
import usePagination from '../../../hooks/usePagination'


function News(props) {


    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
      } = usePagination({
        contentPerPage: 6,
        count: data.length,
      });



    const news = {
        navigation: {
            title: 'Новости',
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
            ],
        },
        search:{
            searchTitle: 'Поиск по статьям',
        },
        articles: [
            {
                id: '1',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: `Линия Сталина: суровый отдых в усадьбах на сутки`,
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
            {
                id: '2',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: `Линия Сталина: суровый отдых в усадьбах на сутки `,
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
            {
                id: '4',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
            {
                id: '5',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
            {
                id: '6',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
            {
                id: '7',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
            {
                id: '8',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
            {
                id: '9',
                scrImg: '../assets/images/CardImg.png',
                alt: 'card',
                title: 'Линия Сталина: суровый отдых в усадьбах на сутки',
                description: 'Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А...',
                date: '14 Января 2008',
                btnText: 'Читать'
            },
        ],
    }

    const [newsPost, setNewsPost] = useState([])

    useEffect(() => {
        setNewsPost(data)
    }, [])

    let breadcrumbsItems = news.navigation.breadcrumbs.map( bc =>
        <li className={s.linkCrumb} key={bc.id}>
            <a href={bc.link} className={s.navlink}>
                <Svg className={`${bc.svg && s.linksvg}`} type={bc.svgName}/>
                {bc.name}
            </a>
        </li>
    )

    let articles = news.articles
    .slice(firstContentIndex, lastContentIndex)
    .map( ar =>
        <NewsCard linkTo={`/news/${ar.id}`} key={ar.id} title={ar.title} scrImg={ar.scrImg} description={ar.description} text={ar.btnText} date={ar.date}/>
    )

    console.log(data)
  return (
    <div className={s.main}>
        <Container>
            <div className={s.navigation}>
                <Navigation breadcrumbsNav={breadcrumbsItems} nameClass={s.nameTitle} title={news.navigation.title}/>
                <Search title={news.search.searchTitle}/>
            </div>
            <div className={s.articles}>    
                {articles}
            </div>
            {/* TODO сделать пагинацию */}
            <div className={s.pagination}>
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={`${s.page} ${page === el + 1 ? s.active : s.none}`}
                    >
                    {el + 1}
                    </button>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default News