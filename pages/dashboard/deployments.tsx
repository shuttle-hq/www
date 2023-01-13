import DeploymentsSection from 'components/sections/Deployments'
import { DashboardPage } from 'components/templates'
import { ReactNode } from 'react'

export default function Deployments() {
	return <DeploymentsSection />
}

Deployments.getLayout = (children: ReactNode) => <DashboardPage>{children}</DashboardPage>
