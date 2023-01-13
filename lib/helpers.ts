import { DeploymentState } from './shuttle'

export function generateReadingTime(text: string): string {
	const wordsPerMinute = 200
	const noOfWords = text.split(/\s/g).length
	const minutes = noOfWords / wordsPerMinute
	const readTime = Math.ceil(minutes)
	return `${readTime} minute read`
}

export function capitalize(word: string): string {
	return word[0].toUpperCase() + word.substring(1).toLowerCase()
}

export function formatDate(last_update: string): string {
	return new Date(last_update).toLocaleString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: '2-digit',
	})
}

const colors = {
	green: '#12cd28',
	red: '#dc2f02',
	cyan: '#01ffff',
	gray: '#e0ffff',
	blue: '#00b6ec',
	yellow: '#ffc601',
}

export function getDeploymentColor(state: string) {
	let deploymentState: DeploymentState = state as DeploymentState

	switch (deploymentState) {
		case DeploymentState.Queued ||
			DeploymentState.Building ||
			DeploymentState.Built ||
			DeploymentState.Loading:
			return colors.cyan

		case DeploymentState.Running:
			return colors.green
		case DeploymentState.Crashed:
			return colors.red
		case DeploymentState.Unknown:
			return colors.yellow
		case DeploymentState.Completed || DeploymentState.Stopped:
			return colors.blue
		default:
			return colors.gray
	}
}
