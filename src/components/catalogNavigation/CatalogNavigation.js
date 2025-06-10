import "./catalogNavigation.scss";

const CatalogNavigation = () => {
	return (
		<>
			<section>
				<div className="nav">
					<div className="nav-menu">
						<a href="./index.html" className="nav-menu-link">
							Главная
						</a>
						<span>&gt;</span>
						<span className="nav-menu-current">Каталог</span>
					</div>
					<h1 className="nav-current text-center">Каталог</h1>
				</div>
			</section>
			<section>
				<div className="filter">
					<div className="filter-left">
						<div className="filter-head">Фильтр</div>
						<div className="filter-content">
							<div
								className="dropdown-content-item dropdown dropdown-trigger"
								id="icons"
							>
								<div className="filter-params dropdown-toggle">Иконки</div>
								<div
									className="filter-dropdown dropdown-menu"
									data-toggle-id="icons"
								>
									<ul>
										<li className="filter-item dropdown-item">
											<a href="/" className="filter-link">
												<span className="label">
													<span className="checkbox"></span>
													<span className="checkbox-text">Распродажа</span>
													<sup className="filter-unit">10</sup>
												</span>
											</a>
										</li>
										<li className="filter-item dropdown-item">
											<a href="/" className="filter-link">
												<span className="label">
													<span className="checkbox"></span>
													<span className="checkbox-text">Новинка</span>
													<sup className="filter-unit">10</sup>
												</span>
											</a>
										</li>
										<li className="filter-item dropdown-item">
											<a href="/" className="filter-link">
												<span className="label">
													<span className="checkbox"></span>
													<span className="checkbox-text">Хит</span>
													<sup className="filter-unit">10</sup>
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div
								className="dropdown-content-item dropdown dropdown-trigger"
								id="price-choice"
							>
								<div className="filter-params dropdown-toggle">Цена, грн</div>
								<div
									className="filter-dropdown dropdown-menu"
									data-toggle-id="price-choice"
								>
									<div className="price-container">
										<div className="price-input-wrapper">
											<input type="text" className="price-input-left" />
											<div className="price-input-devider"></div>
											<input type="text" className="price-input-right " />
											<div className="price-input-btn btn btn-outline-dark">
												Ok
											</div>
										</div>
										<div className="price-slider">
											<div
												className="price-slider-range"
												id="slide"
												style={{ left: "0%", width: "100%" }}
											></div>
											<span
												tabIndex="0"
												className="price-slider-handle"
												id="left-handler"
												style={{ left: "0%" }}
											></span>
											<span
												tabIndex="0"
												className="price-slider-handle"
												id="right-handler"
												style={{ left: "100%" }}
											></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="filter-right">
						<div className="filter-head">Сортировка</div>
						<div className="filter-content">
							<div className="dropdown-content-item dropdown">
								<div className="filter-params dropdown-toggle" id="filter-sort">
									По популярности
								</div>
								<div
									className="filter-dropdown dropdown-menu"
									data-toggle-id="filter-sort"
								>
									<ul>
										<li className="filter-sort-item dropdown-item">
											По популярности
										</li>
										<li className="filter-sort-item dropdown-item">
											Сначала дешевле
										</li>
										<li className="filter-sort-item dropdown-item">
											По названию
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CatalogNavigation;
