import styled from 'styled-components';
import { palette } from 'styled-theme';
import { transition, borderRadius } from '../../config/style-util';
import WithDirection from '../../config/withDirection';

const SidebarWrapper = styled.div`
	.isomorphicSidebar {
		z-index: 1000;
		background: ${palette('secondary', 0)};
		width: 280px;
		flex: 0 0 280px;
		width: 280px !important;
		max-width: none !important;
		flex: 0 0 280 !important;
		@media only screen and (max-width: 767px) {
			width: 240px !important;
			flex: 0 0 240px !important;
		}

		&.ant-layout-sider-collapsed {
			width: 80px !important;
			max-width: 80px !important;
			flex: 0 0 80 !important;
			@media only screen and (max-width: 767px) {
				width: 0;
				min-width: 0 !important;
				max-width: 0 !important;
				flex: 0 0 0 !important;
			}
		}

		.isoLogoWrapper {
			height: 70px;
			background: rgba(0, 0, 0, 0.3);
			margin: 0;
			padding: 0 10px;
			text-align: center;
			overflow: hidden;
			${borderRadius()};

			h3 {
				a {
					font-size: 21px;
					font-weight: 300;
					line-height: 70px;
					letter-spacing: 3px;
					text-transform: uppercase;
					color: ${palette('grayscale', 6)};
					display: block;
					text-decoration: none;
				}
			}
		}

		&.ant-layout-sider-collapsed {
			.isoLogoWrapper {
				padding: 0;

				h3 {
					a {
						font-size: 27px;
						font-weight: 500;
						letter-spacing: 0;
					}
				}
			}
		}

		.isoDashboardMenu {
			padding-top: 35px;
			padding-bottom: 35px;
			background: transparent;

			a {
				text-decoration: none;
				font-weight: 400;
			}

			.ant-menu-item {
				width: 100%;
				display: -ms-flexbox;
				display: flex;
				-ms-flex-align: center;
				align-items: center;
				padding: 0 24px;
			}

			.isoMenuHolder {
				display: flex;
				align-items: center;
				width: 100%;
			}

			.anticon {
				font-size: 18px;
				margin-right: 30px;
				color: inherit;
				${transition()};
			}

			i {
				font-size: 19px;
				color: inherit;
				margin: ${props =>
					props['data-rtl'] === 'rtl' ? '0 0 0 30px' : '0 30px 0 0'};
				width: 18px;
				${transition()};
			}

			.nav-text {
				font-size: 14px;
				color: inherit;
				font-weight: 400;
				${transition()};
			}

			.ant-menu-item-selected {
				background-color: rgba(0, 0, 0, 0.4) !important;
				.anticon {
					color: #fff;
				}

				i {
					color: #fff;
				}

				.nav-text {
					color: #fff;
				}
			}

			> li {
				&:hover {
					&.active {
						i,
						.nav-text {
							color: #ffffff;
						}
					}
				}
			}
		}

		.ant-menu-dark .ant-menu-inline.ant-menu-sub {
			background: ${palette('secondary', 5)};
		}

		.ant-menu-submenu-inline,
		.ant-menu-submenu-vertical {
			> .ant-menu-submenu-title {
				width: 100%;
				display: flex;
				align-items: center;
				padding: 0 24px;

				> span {
					display: flex;
					align-items: center;
				}

				&:after {
					content: '\f123';
					font-family: 'Ionicons' !important;
					font-size: 16px;
					color: inherit;
					left: ${props => (props['data-rtl'] === 'rtl' ? '16px' : 'auto')};
					right: ${props => (props['data-rtl'] === 'rtl' ? 'auto' : '16px')};
					${transition()};
				}

				&:hover {
					&:after {
						color: #ffffff;
					}
				}
			}

			.ant-menu-inline,
			.ant-menu-submenu-vertical {
				> li:not(.ant-menu-item-group) {
					padding-left: ${props =>
						props['data-rtl'] === 'rtl' ? '0px !important' : '74px !important'};
					padding-right: ${props =>
						props['data-rtl'] === 'rtl' ? '74px !important' : '0px !important'};
					font-size: 13px;
					font-weight: 400;
					color: inherit;
					${transition()};

					&:hover {
						color: #ffffff;
					}
				}

				.ant-menu-item-group {
					padding-left: 0;

					.ant-menu-item-group-title {
						padding-left: 100px !important;
					}
					.ant-menu-item-group-list {
						.ant-menu-item {
							padding-left: 125px !important;
						}
					}
				}
			}

			.ant-menu-sub {
				background-color: transparent !important;
			}
		}

		&.ant-layout-sider-collapsed {
			.nav-text {
				display: none;
			}

			.ant-menu-submenu-inline >  {
				.ant-menu-submenu-title:after {
					display: none;
				}
			}

			.ant-menu-submenu-vertical {
				> .ant-menu-submenu-title:after {
					display: none;
				}

				.ant-menu-sub {
					background-color: transparent !important;

					.ant-menu-item {
						height: 35px;
					}
				}
			}
		}
	}
`;

export default WithDirection(SidebarWrapper);