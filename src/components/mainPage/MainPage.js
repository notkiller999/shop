import MainSlider from '../mainSlider/MainSlider';
import MainBigBanner from '../mainBigBanner/MainBigBanner';
import Banner from '../banner/Banner';
import Tab from '../tab/Tab';
import ProductCard from '../productCrad/ProductCard';
import ProductSlider from '../productSlider/ProductSlider';

const dataFirst = [
        {
            img: "https://look.com.ua/pic/201209/640x480/look.com.ua-11633.jpg",
            name: 'NATURE'
        },
          {
            img: "https://mobimg.b-cdn.net/v3/fetch/9c/9c63d540a3284fd5b7077e6a63dd2d3e.jpeg",
            name: 'ABSTRACTION'
        },
        {
            img: "https://img3.akspic.ru/crops/5/8/1/1/21185/21185-biom-gora-dnevnoe_vremya-iskusstvo-pejzazhi_gor-3840x2160.jpg",
            name: 'END OTHER'
        },
]
    
const dataSecond = [
    {
        img: "https://look.com.ua/pic/201209/640x480/look.com.ua-11633.jpg",
        name: 'NATURE'
    },
        {
        img: "https://mobimg.b-cdn.net/v3/fetch/9c/9c63d540a3284fd5b7077e6a63dd2d3e.jpeg",
        name: 'ABSTRACTION'
    },
]

const MainPage = () => {
    return (
        <div>
            <MainBigBanner/>
            <MainSlider />
            <Banner data={dataFirst} />
            <Banner data={dataSecond} />
            <Tab />
            <ProductSlider/>
        </div>
    )
}

export default MainPage