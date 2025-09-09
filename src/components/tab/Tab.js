import { useState, useEffect} from "react";
import ProductSlider from "../productSlider/ProductSlider";
import { useHttp } from "../hooks/http.hook";
import "./tab.scss";

const Tab = (props) => {

    // const { request } = useHttp();
    const {data} = props;
    
    // const [tabData, setTabData] = useState([]);
	const [active, setActive] = useState(data[0].id);

    // useEffect(() => {
    //     const fetchTabs = async () => {
    //         const data = await request("/tabs");            
    //         setTabData(data);
    //         setActive(data[0].id);
    //     };
    //     fetchTabs();
    // }, []);

	const renderTabs = (data) => {
        
		return data.map((item) => {
			return (
				<div
					id={item.id}
					key={item.id}
					className={`tab__item ${
						item.id === active ? "tab__item-active" : null
					}`}
					onClick={changeTab}
				>
					{item.title}
				</div>
			);
		});
	};

	const changeTab = (e) => {
		setActive(e.target.id);
	};

    if (data.length === 0 || active === null) {
        return <div>Loading...</div>;
    }

	return (
		<div className="tab">
			<div className="tab__panel">{renderTabs(data)}</div>
			<div className="tab__content">
				<ProductSlider id={active} slides={4} />
			</div>
		</div>
	);
};

export default Tab;
