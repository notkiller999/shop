import { useState } from "react";
import ProductSlider from "../productSlider/ProductSlider";
import "./tab.scss";

const tabData = [
	{
		title: "Платья",
		id: "Платья",
	},
	{
		title: "Туники и блузки",
		id: "Туники и блузки",
	},
	{
		title: "Верхняя одежда",
		id: "Верхняя одежда",
	},
];

const Tab = () => {
	const [active, setActive] = useState(tabData[0].id);

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

	const elems = renderTabs(tabData);

	return (
		<div className="tab">
			<div className="tab__panel">{elems}</div>
			<div className="tab__content">
				<ProductSlider id={active} slides={4} />
			</div>
		</div>
	);
};

export default Tab;
