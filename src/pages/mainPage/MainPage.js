import MainSlider from "../../components/mainSlider/MainSlider";
import MainBigBanner from "../../components/mainBigBanner/MainBigBanner";
import Banner from "../../components/banner/Banner";
import Tab from "../../components/tab/Tab";

const dataFirst = [
	{
		img: "https://art.kartinkof.club/uploads/posts/2025-01/art-kartinkof-club-p11m-p-idei-dlya-risunkov-2d-arti-23.jpg",
		name: "NATURE",
	},
	{
		img: "https://art.kartinkof.club/uploads/posts/2025-01/art-kartinkof-club-oium-p-idei-dlya-risunkov-2d-arti-6.jpg",
		name: "ABSTRACTION",
	},
	{
		img: "https://img3.akspic.ru/crops/5/8/1/1/21185/21185-biom-gora-dnevnoe_vremya-iskusstvo-pejzazhi_gor-3840x2160.jpg",
		name: "END OTHER",
	},
];

const dataSecond = [
	{
		img: "https://art.kartinkof.club/uploads/posts/2025-01/art-kartinkof-club-bl30-p-idei-dlya-risunkov-red-art-8.jpg",
		name: "NATURE",
	},
	{
		img: "https://art.kartinkof.club/uploads/posts/2025-01/art-kartinkof-club-bp8e-p-idei-dlya-risunkov-red-art-18.jpg",
		name: "ABSTRACTION",
	},
];

const MainPage = () => {
	return (
		<div>
			<MainBigBanner />
			<MainSlider />
			<Banner data={dataFirst} />
			<Banner data={dataSecond} />
			<Tab />
		</div>
	);
};

export default MainPage;
