import { useDispatch } from "react-redux";
import classNames from "classnames";

import "./productPageLeft.scss";
import { changeActiveTab } from "../productPageSlice";

const ProductPageLeft = ({photos, activeTab}) => {

	const dispatch = useDispatch();

	const renderTabs = (data) => {
		return data.map((item, id) => {
			return (
				<div
					id={id}
					key={id}
					className={classNames("product-tab-item", {
						"product-tab-item--active": id.toString() === activeTab,
					})}
					onClick={() => dispatch(changeActiveTab(id.toString()))}
				>
					<img
						src={item}
						alt="not your deal"
						className="product-tab-item-img"
					/>
				</div>
			);
		});
	};

	const renderTabContent = (data) => {
		return data.map((item, id) => {
			return (
				<div
					id={id}
					key={id}
					className={classNames("product-tab-content", {
						"product-tab-content--active": id.toString() === activeTab,
					})}
				>
					<img
						src={item}
						alt="not your deal"
						className="product-tab-content-img"
					/>
				</div>
			);
		});
	};

	const panelElems = renderTabs(photos);
	const contentElems = renderTabContent(photos);

	return (
		<div className="product-left">
			<div className="product-tab">
				<div>{panelElems}</div>
				<div className="product-tab-wrapper">{contentElems}</div>
			</div>
		</div>
	);
};

export default ProductPageLeft;
