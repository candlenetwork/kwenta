import styled from 'styled-components';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';

import { FlexDiv, FlexDivCol, PageContent } from 'styles/common';
import AppLayout from 'sections/shared/Layout/AppLayout';
import { DesktopOnlyView, MobileOrTabletView } from 'components/Media';
import DashboardCard from 'sections/dashboard/DashboardCard';
import TrendingSynths from 'sections/dashboard/TrendingSynths';

const DashboardPage = () => {
	const { t } = useTranslation();

	const dashboardCard = <DashboardCard />;

	return (
		<>
			<Head>
				<title>{t('dashboard.page-title')}</title>
			</Head>
			<AppLayout>
				<PageContent>
					<DesktopOnlyView>
						<Container>
							<LeftContainer>{dashboardCard}</LeftContainer>
							<RightContainer>
								<TrendingSynths />
								<BottomShadow />
							</RightContainer>
						</Container>
					</DesktopOnlyView>
					<MobileOrTabletView>
						<MobileContainer>{dashboardCard}</MobileContainer>
					</MobileOrTabletView>
				</PageContent>
			</AppLayout>
		</>
	);
};

const MobileContainer = styled.div`
	max-width: 364px;
`;

const Container = styled(FlexDiv)`
	justify-content: space-between;
	width: 100%;
	flex-grow: 1;
	height: 100vh;
`;

const LeftContainer = styled(FlexDivCol)`
	flex-grow: 1;
	padding-bottom: 48px;
	margin: 0px 75px;
	padding-top: 80px;
	max-width: 1000px;
	position: relative;
`;

const RightContainer = styled(FlexDivCol)`
	width: 320px;
	background-color: ${(props) => props.theme.colors.elderberry};
	padding: 80px 0 5px 0;
	margin-right: -20px;
	flex-shrink: 0;
	position: relative;
`;

const BottomShadow = styled.div`
	background: linear-gradient(360deg, #10101e 0%, rgba(16, 16, 30, 0) 100%);
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 32px;
	pointer-events: none;
`;

export default DashboardPage;