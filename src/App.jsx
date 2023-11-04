import { useEffect, useState } from 'react'
import './App.css'
import clsx from 'clsx'
const testString = `Прямые эфиры привлекательны тем, что всё происходит в реальном времени, что позволяет полностью насладиться эмоциями, вызванными захватывающими и забавными моментами. Некоторые из них сегодня в нашей подборке.
1 https://youtu.be/uLsoexlh6Iw?si=cGWY7M7UJknooHrR&t=847
Телеведущий сказал, что гостья может чувствовать себя как дома, но она слишком буквально всё восприняла
2 https://youtu.be/ZPX_9hYx8WE?si=rKbEBVPxbWeSe87j&t=372
Может стоит рассказать этому парню про существование спортивного костюма? Иначе, так тренироваться каждый раз будет дороговато
3  https://youtu.be/pJBz_vsRHVw?si=C3cjnJUii0eBUdR_&t=485
Будучи спортивным журналистом, нужно не только пытаться красиво выглядеть на камеру, но и следить за ходом игры
4 https://youtu.be/Z-iuX3sNh5I?si=D66B0zBb3VmV4FKg&t=101
Довольно креативный и в то же время криповый вариант преподношения прогноза погоды. Надеемся, это не утренняя программа, не хотелось бы такое увидеть спросонья  
5 https://youtu.be/AvI10w9JOEM?si=Rs75SDTwMaJvaVMd&t=397 ( + )
Вот такой прогноз получше. Девушка намекает, на улице стало очень жарко, так что одеваем купальники и вперёд на пляж! 
6 https://youtu.be/aYrnnHXTZdM?si=zFRHZ3-QbzzgZt7M&t=520 ( превью )
Кажется, это было запланировано, иначе как объяснить то, что это произошло именно при передаче слова ведущей. Магия? 
7 https://youtu.be/TXsxzzhoH50?si=TuXSa1x824v-GP64&t=6 ( + )
Конфуций сказал «Выбери себе работу по душе, и тебе не придётся работать ни одного дня в своей жизни.»…    Конан О'брайен с этим однозначно согласен
8 https://youtu.be/S6HsYKR9Fkg?si=PZrfqwJY3zFY0hsq&t=287
Соведущие программы посчитали забавным и принялись оставлять следы муки на девушке. Мужу ведущей, смотрящему эту программу, можно только посочувствовать
9 https://youtu.be/Z-iuX3sNh5I?si=tjRTmLV7ShULi29Q&t=765
Девушка настолько зажигательно танцевала, что пёсик просто не смог удержаться и присоединился
10 https://youtu.be/TXsxzzhoH50?si=DvMU-wpQ2eMxU3Ny&t=480
Этот гениальный журналист приготовил кофе себе и однорукому герою репортажа, но подал его в блюде. Кажется, он так и не понял, почему участник передачи не пьёт его 
11 https://youtu.be/hdJIOSvcu3g?si=ivTVWbAeHeFY_MUo&t=55
Чтобы выглядеть в кадре хорошо, нужно иметь хорошую осанку и сидеть ровно, эта девушка на мгновение забыла про это, но тут же исправилась
12 https://youtu.be/Z-iuX3sNh5I?si=3B3vMkduRf0aI_fJ&t=1241
Ведущему показалось, что его стиль просто идеально подходит под выступление девушек и без его присутствия они просто не справятся 
13 https://youtu.be/pJBz_vsRHVw?si=0TfI2BntOX7I5R90&t=644
Жираф ну просто не мог не выразить свою симпатию журналистке. В результате чего и стал неожиданным гостем программы 
14 https://youtu.be/Z-iuX3sNh5I?si=8y3NipRFiWgSvEye&t=348
Каждый раз, когда по телевизору идёт прямое включение с гостями из дому, никогда не знаешь, в какой обстановке они сейчас находятся
15 https://youtu.be/TXsxzzhoH50?si=7Z8ymU2ounYbdus5&t=400
Девушка чуть ли не получила нервный срыв из-за пранка от соведущего. Оно и ясно, никто не хотел бы намокнуть в прохладную погоду 
16 https://youtu.be/TXsxzzhoH50?si=yNaFX70zXq0MUnAL&t=345
Это был конкурс на самую красивую башню из песка. Мы думаем, что победила правая. А вы как считаете? Ждём ваше мнение в комментариях
17 https://youtu.be/aYrnnHXTZdM?si=CWfWfqDldUE3WC5s&t=69
Что это? Танцы на выбывание в прямом эфире? Что бы это ни было, кажется, девушка проиграла
18 https://youtu.be/ZPX_9hYx8WE?si=peeJKwAV-d0JY0YM&t=316
В профессии репортёра нужно быть готовым к тому, что придётся участвовать в самых различных активностях. Хотя, эта девушка не особо то и против
19 https://youtu.be/ZPX_9hYx8WE?si=KxjqAx8c7eSAzNki&t=432
Во время прямой трансляции вам села муха на лицо,а двигать руками запретили? Не беда, этот парень нашёл оптимальное решение
20 https://youtu.be/aYrnnHXTZdM?si=RY687jPRNkMK9Rt2&t=175
Надеемся, это послужит ей уроком и в следующий раз она будет смотреть куда садится
21 https://youtu.be/hdJIOSvcu3g?si=sv9vkxsEP7LjtIEJ&t=135
Ладно, это оказался частый случай. В таком случае надеемся что уроком это послужит для многих
22 https://youtu.be/Z-iuX3sNh5I?si=ezEL6rzgK8T84XPM&t=695
Что не сделаешь, лишь бы надеть любимое платье на размер меньше. Вот вам и результат
23 https://youtu.be/aYrnnHXTZdM?si=zVY-WB6o0qnIckr2&t=29
Каблуки… Причиной стольких падений стала эта обувь, но девушки всё так же продолжают испытывать удачу ради красоты. Пора открывать курсы ходьбы на каблуках
24 https://youtu.be/aYrnnHXTZdM?si=UkuFaBKpkLbYJfcw&t=206
Девушку из прошлого момента ещё можно понять, но в каблуках на баскетбольном покрытии?! Это уже мазохизм…
25 https://youtu.be/aYrnnHXTZdM?si=ISlH5Hmmzy8AkALW&t=326
Снова прямой эфир, снова каблуки, и снова… Ладно, хватит на сегодня моментов с каблуками
26 https://youtu.be/Z-iuX3sNh5I?si=sgxt6gTEQPoGVQB3&t=449 ( + )
Он просто посчитал несправедливым то, что он единственный из студии намок и решил искупать ещё и ведущую 
27 https://youtu.be/AvI10w9JOEM?si=GHDp104IwEpZGqBS&t=551
Эта рождественская декорация настолько реалистична, что заставила мужчину прибежать на помощь. Хозяева, даже вызывали полицию, не поняв намерения спасителя
28 https://youtu.be/TXsxzzhoH50?si=X37ujVBejEvkfiCx&t=610
Если кто-то из вас, когда-нибудь будет брать интервью у гонщика на кросс-байке: всегда старайтесь не оказаться позади мотоцикла 
29 https://youtu.be/ZPX_9hYx8WE?si=Xd7JJZLuitLpJ0AZ&t=37
Когда при устройстве на работу ведущим указал в резюме умение «Кататься на скейте» и руководство посчитало это твоим преимуществом
30 https://youtu.be/hdJIOSvcu3g?si=3SYNADs-apvchZMK&t=81
Порой, даже хромакей нужно выбирать по размеру
31 https://youtu.be/S6HsYKR9Fkg?si=AFq_BJubxRPwRS3f&t=264
Дуэйн Джонсон своими действиями сделал невозможным продолжение прямого эфира. Сердце ведущей растоплено)
32 https://youtu.be/hdJIOSvcu3g?si=FcOfg7_cqBsIHwxH&t=528
Репортёрша покидала ферму, но забыла попрощаться с курицей, ничего, пернатая взяла инициативу в свои лапы
33 https://youtu.be/AvI10w9JOEM?si=FbOekEPqZSPDKsbC&t=535
Иногда всего лишь одно действие другого человека способно заставить на долгое время запомнить нелепую ситуацию, в которой оказываешься
34 https://youtu.be/hdJIOSvcu3g?si=ybMFbEQSLLFlT72e&t=102
Сейчас советуем вам быть крайне внимательными
35 https://youtu.be/pJBz_vsRHVw?si=jqayL_dwjWqDEhNA&t=742
Слыхали ли вы что-нибудь про Йетти? Так вот, судя по этим кадрам, он устал скрываться от глаз людей и решил показаться в прямом эфире
36 https://youtu.be/uLsoexlh6Iw?si=3ii-wAXnu0kqpjsG&t=84
У каждого человека свои источники уверенности и успокоения
37 https://youtu.be/uLsoexlh6Iw?si=Wf02Wv14l3aGZvPH&t=346
Достоверно неизвестно, почему ей достался настолько ненадёжный стул, но падение оказалось достаточно зрелищным
38 https://youtu.be/S6HsYKR9Fkg?si=7gp1CwE6mn4TdFfo&t=134
Мужчина так интенсивно делился эмоциями что у него аж челюсть отпала. К счастью, он быстро вернул её на место
39 https://youtu.be/Ws1TL9UJav0?si=4BcLnznCw-HKZt-N&t=72
Конкурсы на телешоу могут удивлять не меньше голливудских фильмов. Как они их вообще придумывают?
40 https://youtu.be/AvI10w9JOEM?si=-dhVCjMp4cjGjguH&t=379
Пара хотела продемонстрировать важность светоотражающей одежды в тёмное время суток. Однако, единственное что показала девушка это способности катания на льду
41 https://youtu.be/uLsoexlh6Iw?si=aCJRpQwfkpt2lW-Y&t=502
Небольшое баловство в студии закончилось коллизией хула-хупа и челюсти ведущей. Благо, всё обошлось без травм
42 https://youtu.be/S6HsYKR9Fkg?si=7mfMp3DK_eCron6N&t=233
Будем честны, между рукопожатием и чеком на хорошенькую сумму, каждый из нас выбрал бы второе
43 https://youtu.be/Ws1TL9UJav0?si=ox65IUAtWIg0-qPi&t=22
Очень часто корреспонденты становятся жертвами шуток окружающих. Интересно, у них есть инструкция, что делать в таких ситуациях?
44 https://youtu.be/vRCA4-_shy4?si=pNiR7SioLmyVtyhb&t=116
Игра в кёрлинг может быть весьма увлекательной, особенно, если играть на приставке
45 https://youtu.be/Ws1TL9UJav0?si=Kk7MtwhJxZavX3sx&t=88
Префикс «сноу» в слове сноуборд стоит не просто так. Девушка в этом убедилось в прямом эфире
46 https://youtu.be/uLsoexlh6Iw?si=Q162ZIcb5l8f9vBX&t=570
Участник этого конкурса ещё никогда не был настолько метким. Стимул – это главное
47 https://youtu.be/vRCA4-_shy4?si=EaWErdQnwQEz9-eg&t=84
На этих кадрах, как и в жизни есть два пути, медленный, но стабильный, или быстрый, но чертовски экстремальный, без понятия, что ждёт за поворотом
48 https://youtu.be/uLsoexlh6Iw?si=CfqQJYK8q4txzw7O&t=643
Не выспались перед работой? Это не проблема, если вы умеете правильно использовать рабочие перерывы
49 https://youtu.be/uLsoexlh6Iw?si=jjKmdTML64h4Jhzt&t=785
Ей абсолютно всё равно, что её кто-то снимает, ведь она наслаждается моментом. Кому-то для счастья достаточно попкорна и хорошей игры
50 https://youtu.be/vRCA4-_shy4?si=RidUC4B_E-8O789W&t=418
Наверняка, перед началом телепрограммы стоило провести инструктаж по использованию микрофона для участников
51 https://youtu.be/pJBz_vsRHVw?si=FLJqJD3UJQ9aNuxd&t=393
Девушка была настолько возмущена, что у неё просто снесло крышу
52 https://youtu.be/vRCA4-_shy4?si=rq7lK4ibJ_FOiC4Y&t=519
Этого не ожидал никто, даже сама репортёрша. К счастью, парень вовремя среагировал и спас её от падения
53 https://youtu.be/Ws1TL9UJav0?si=TX45gwQa_2fBfSw3&t=305
Они решили прокатить козу на доске для сёрфинга, а она ведь и не очень-то сопротивляется.     Судя по её спокойствию, ей даже нравится
54 https://youtu.be/Ws1TL9UJav0?si=rie5DLSaBRIrkyjs&t=115
Это самые милые кадры из всех прямых эфиров, которые мы видели
55 https://youtu.be/ZPX_9hYx8WE?si=IUHp7BhlzFyPYPQ-&t=92
Жизнь нужно прожить так, чтобы сохранить чувство юмора даже в старости, как этот мужчина. 
Ну, а мы готовы вам с этим помочь, ведь у нас ещё множество интересных и смешных подборок на канале, некоторые из них – у вас на экране

`

function App() {
	const storagedText = localStorage.getItem("text")
	const [text, setText] = useState(storagedText || ``)
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
						onChange={e => {
							setText(e.target.value)
							localStorage.setItem('text', text)
						}}
					/>
					<button
						className="px-4 py-2 mt-2 bg-green-400 rounded-lg"
						onClick={countVideos}
					>
						Подсчитать
					</button>
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
