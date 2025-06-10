import {
	EmailIcon,
	FacebookIcon,
	InstagramIcon,
	MapIcon,
	MasterCardIcon,
	MobileIcon,
	PhoneIcon,
	VisaIcon,
	WhatsAppIcon,
} from "../assets/icons/icons";
import logo from "../assets/icons/white logo.webp";
import "./footer.scss";

const Footer = () => {
	return (
		<footer>
			<div className="footer d-flex f-space-between mt-20">
				<div className="footer-info">
					<div className="footer-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="footer-time">
						©2018-2022
						<br />
						Все права защищены
					</div>
					<div className="footer-mbile mt-20">
						<a href="/">
							<MobileIcon />
							Мобильная версия
						</a>
					</div>
					<div className="footer-pay mt-20">
						<p className="footer-pay-text">Мы принимаем к оплате:</p>
						<div className="footer-pay-icons">
							<VisaIcon />
							<MasterCardIcon />
						</div>
					</div>
				</div>
				<div className="footer-catalog">
					<ul className="footer-title">
						<h4>Каталог:</h4>
						<li>
							<a href="/" className="footer-link">
								Платья
							</a>
						</li>
						<li>
							<a href="/" className="footer-link">
								Костюмы
							</a>
						</li>
						<li>
							<a href="/" className="footer-link">
								Туники и блузки
							</a>
						</li>
						<li>
							<a href="/" className="footer-link">
								Верхняя одежда
							</a>
						</li>
						<li>
							<a href="/" className="footer-link">
								Акция
							</a>
						</li>
						<li>
							<a href="/" className="footer-link">
								Большая распродажа
							</a>
						</li>
					</ul>
				</div>
				<div className="footer-client ml-20">
					<div className="footer-client-links">
						<ul className="footer-title">
							<h4>Клиентам:</h4>
							<li>
								<a href="/" className="footer-link">
									Вход в личный кабинет
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Главная
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Каталог
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									О нас
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Оплата и доставка
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Обмен и возврат
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Контактная информация
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Блог
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Пользовательское соглашение
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Отзывы о магазине
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Карта сайта
								</a>
							</li>
							<li>
								<a href="/" className="footer-link">
									Оферта
								</a>
							</li>
						</ul>
					</div>
					<div className="footer-client-social">
						<h4 className="footer-social-title mt-10">Мы в соцсетях:</h4>
						<div className="footer-client-social-icons">
							<a href="/" className="footer-client-social-links">
								<InstagramIcon />
							</a>
							<a href="/" className="footer-client-social-links">
								<FacebookIcon />
							</a>
						</div>
					</div>
				</div>
				<div className="footer-contacts ml-20">
					<h4>Контактная информация:</h4>
					<div className="footer-contacts-group d-flex f-space-between">
						<div className="footer-conacts-tel">
							<ul>
								<li>
									<PhoneIcon />
									<a href="tel:+380505399657">+38(050)-53-99-657</a>
								</li>
								<li style={{ marginLeft: "34px" }}>
									<a href="tel:+380505399657">+38(050)-53-99-657</a>
								</li>
							</ul>
						</div>
						<div className="footer-conacts-internet">
							<li>
								<VisaIcon />
								<a href="viber://chat?number=%2B380505399657">
									+38(050)-53-99-657
								</a>
							</li>
							<li>
								<WhatsAppIcon />
								<a href="https://api.whatsapp.com/send?phone=380505399657">
									+38(050)-53-99-657
								</a>
							</li>
							<li>
								<EmailIcon />
								<a href="mailto:notkiller999@gmail.com">
									notkiller999@gmail.com
								</a>
							</li>
						</div>
					</div>
					<div className="footer-contacts-group mt-20">
						<div className="footer-contact-adress d-flex">
							<MapIcon />
							<p className="footer-contacts-addres">
								7 км., ул. Рыночная, №4006 Одесса, Одесская область, Украина
								65059
							</p>
						</div>
						<li style={{ marginLeft: "20px" }} className="mt-10">
							<a href="/">Карта проезда</a>
						</li>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
