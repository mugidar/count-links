import { useEffect, useState } from 'react'
import './App.css'
import clsx from 'clsx'

function App() {
	const [text, setText] = useState(``)
	const [counts, setCounts] = useState({})
	const [displayedCount, setDisplayedCount] = useState([])
	const [totalLinks, setTotalLinks] = useState(0)

	const countVideos = () => {
		setDisplayedCount([])
		setCounts([])
		const stringLines = text.split(/\r?\n/)
		const filteredLinks = stringLines
			.map(link => {
				if (link.indexOf('https') !== -1) {
					return link.substring(link.indexOf('https'), link.indexOf('?'))
				}
			})
			.filter(link => link !== undefined)

		filteredLinks.forEach(item =>
			setCounts(prev => ({ ...prev, [item]: (prev[item] || 0) + 1 }))
		)
	}

	useEffect(() => {
		for (let i in counts) {
			setDisplayedCount(prev => [...prev, { videoLink: i, count: counts[i] }].sort((a,b) => b.count-a.count))
		}
		
    const total = Object.values(counts).reduce((prev, cur) => prev+cur , totalLinks )
    setTotalLinks(total)
	}, [counts])

	return (
		<div className="App w-screen overflow-x-hidden ">
			<h1 className="mt-5 mb-5 text-center text-3xl font-bold">
				Подсчёт повторов ссылок ютуб 3D
			</h1>

			<div className="flex items-start justify-evenly">
				<div className="mt-10 flex items-center justify-center flex-col">
					<textarea
						className="bg-black/20 rounded-lg p-5 resize-none border-sky-50
           border-2 shadow-lg"
						value={text}
						cols={70}
						rows={10}
						onChange={e => setText(e.target.value)}
					/>
					<button
						className="px-4 py-2 mt-2 bg-green-400 rounded-lg"
						onClick={countVideos}
					>
						Подсчитать
					</button>
				</div>

				<div className="output border-2 p-2">
       
					{displayedCount.length > 0 ? (
						<>
               <h1 className='font-bold text-xl'>Всего: {totalLinks}</h1>
							<table className="flex flex-col">
								<tbody className="p-4">
									{displayedCount.map(count => (
										<tr key={count.videoLink}>
											<td className="p-1">{count.videoLink}</td>
											<td
												className={clsx(
													'p-1 text-xl font-bold',
													count.count < 5
														? 'text-green-400'
														: count.count < 6 && count.count >= 5
														? 'text-orange-500'
														: 'text-red-500'
												)}
											>
												{count.count}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</>
					) : (
						<h1>Нечего считать, босс!</h1>
					)}
				</div>
			</div>
		</div>
	)
}

export default App
