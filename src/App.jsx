import { useEffect, useState } from 'react'
import './App.css'
import clsx from 'clsx'
import { testString } from './data'

function App() {
	const storagedText = localStorage.getItem('text')
	const [text, setText] = useState(storagedText || ``)
	const [counts, setCounts] = useState({})
	const [displayedCount, setDisplayedCount] = useState([])
	const [totalLinks, setTotalLinks] = useState(0)


	useEffect(() => {
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
		localStorage.setItem('text', text)
	}, [text])
	
	useEffect(() => {
		for (let i in counts) {
			setDisplayedCount(prev =>
				[...prev, { videoLink: i, count: counts[i] }].sort(
					(a, b) => b.count - a.count
				)
			)
		}

		const total = Object.values(counts).reduce((prev, cur) => prev + cur, 0)
		setTotalLinks(total)
	}, [counts])

	return (
		<div className="App w-screen overflow-x-hidden ">
			<h1 className="mt-5 mb-5 text-center text-3xl font-bold">
				Подсчёт повторов ссылок ютуб 3D
			</h1>

			<div className="flex items-center justify-center flex-col sm:flex-row sm:justify-evenly sm:items-start">
				<div className="my-10 flex items-center justify-center flex-col">
					<button
						className="px-4 py-2 mt-2 bg-orange-400 rounded-lg"
						onClick={() => setText(testString)}
					>
						Тест текст
					</button>{' '}
					<textarea
						className="w-full bg-black/20 rounded-lg p-5 resize-none border-sky-50
           border-2 shadow-lg"
						value={text}
						cols={70}
						rows={10}
						onChange={e => setText(e.target.value)}
					/>
			
				</div>

				<div className="flex w-[330px] items-start">
					<div className="output border-2 p-2">
						{displayedCount.length > 0 ? (
							<>
								<h1 className="font-bold text-xl">Всего: {totalLinks}</h1>
								<h1 className="font-bold text-xl">
									Уникальных: {displayedCount.length}
								</h1>
								<table className="flex flex-col">
									<tbody className="p-4">
										{displayedCount.map((count, index) => (
											<tr key={count.videoLink}>
												<td className="p-1">
													<span className="font-bold">{index + 1}: </span>
													{count.videoLink}
												</td>
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
		</div>
	)
}

export default App
