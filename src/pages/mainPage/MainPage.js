import MainSlider from "../../components/mainSlider/MainSlider";
import MainBigBanner from "../../components/mainBigBanner/MainBigBanner";
import Banner from "../../components/banner/Banner";
import Tab from "../../components/tab/Tab";
import { useHttp } from "../../components/hooks/http.hook";
import { useEffect, useState } from "react";

const MainPage = () => {

    const { request } = useHttp();

    const [settings, setSettings] = useState({});

    useEffect(() => {
        request('/site?id=bloks')
            .then(data => setSettings(data))
            .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const renderBloks = (arr) => {
        if (arr && arr.length > 0) {            
            return arr.map((item, i) => {
                switch(item.name) {

                    case 'slider':                         
                        const {delay, indicators, slides} = item;
                        if (item.mask && item.mask.visible) {
                            return <>
                                <MainBigBanner key={"mask"} data={item.mask}/>
                                <MainSlider 
                                    key={i} 
                                    delay={delay}
                                    indicators={indicators}
                                    slides={slides} 
                                />
                                </>
                        }
                        return <MainSlider 
                                key={i} 
                                delay={delay}
                                indicators={indicators}
                                slides={slides} 
                            />;

                    case 'block':
                        return <Banner key={i} data={item.bloks}/>;
                        
                    case 'tabs':
                        return <Tab key={i} data={item.tabs}/>;
                    default: return null;
                }
            });
        }
        return null;
    }    

    const elems = renderBloks(settings.structure)

	return (
		<div>
            {elems}
		</div>
	);
};

export default MainPage;
