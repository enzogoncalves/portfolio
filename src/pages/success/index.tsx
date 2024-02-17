import { Analytics } from "@vercel/analytics/react"

const SuccessPage = () => {
	return (
		<>
			<div>
				<button type="button">
					Voltar para o aplicativo
				</button>
			</div>
			<Analytics />
		</>
	)
}

export default SuccessPage