/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { useHttp } from "../hooks/http.hook";

import "./header.scss";
import HeaderHead from "./components/headerHead";
import HeaderMain from "./components/headerMain";

const Header = () => {
    const {request} = useHttp();
    const [headerData, setHeaderData] = useState({
        head: {},
        main: {}
    });

    useEffect(() => {
        request('/site?id=header').then(data => {
            setHeaderData({head: data.head, main: data.main});
        });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<header className="header">
			<HeaderHead headData={headerData.head}/>
            <HeaderMain mainData={headerData.main}/>
		</header>
	);
};

export default Header;
