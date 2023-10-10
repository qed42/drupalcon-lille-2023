import { useEffect, useState } from 'react';
import styles from '../questions/index.module.css';
import Button from '../../components/Button';

const Questions = (props) => {
	const [questions, setQuestions] = useState([
		{
			question: 'Guess the name of this theme 👢?',
			answer: '',
			icon: '/icon2.svg',
			identifier: 'design',
			options: ['Bootstrap', 'Heels'],
		},
		{
			question: 'Guess the name of this module 🍯?',
			answer: '',
			icon: '/icon2.svg',
			identifier: 'design',
			options: ['Claypot', 'Honeypot'],
		},
		{
			question: 'Guess the module: 🕸️📃?',
			answer: '',
			icon: '/icon2.svg',
			identifier: 'design',
			options: ['Webform', 'Spiderweb'],
		},
		{
			question: 'Guess the module 🚩?',
			answer: '',
			icon: '/icon2.svg',
			identifier: 'design',
			options: ['Flag', 'Symbol'],
		},
		{
			question: 'Guess the module 📊?',
			answer: '',
			icon: '/icon2.svg',
			identifier: 'design',
			options: ['Statistics', 'Bar-chart'],
		},

		{
			question: 'Who received the Aaron Winborn award this year?',
			answer: '',
			icon: '/icon1.svg',
			identifier: 'drupal',
			options: ['AmyJune Hineline', 'Randy Fay', 'Angie Byron'],
		},
		{
			question: 'What is the latest version of Drupal?',
			answer: '',
			icon: '/icon1.svg',
			identifier: 'drupal',
			options: ['Drupal 10.1.5', 'Drupal 10.1.9', 'Drupal 9.5.11'],
		},
		{
			question: 'What does Drupal mean to you?',
			answer: '',
			icon: '/icon1.svg',
			identifier: 'drupal',
			options: [],
		},
	]);
	const [activeIndex, setIndex] = useState(0);
	const [errorMsg, setErrorMsg] = useState('');

	const handleChange = (e) => {
		const value = e.target.value;
		const newQuestions = questions.map((ele, index) => {
			if (index === activeIndex) {
				return { ...ele, answer: value };
			} else {
				return { ...ele };
			}
		});
		setQuestions(newQuestions);
	};
	const handleClick = async (e) => {
		e.preventDefault();
		if (questions[activeIndex].answer === '') {
			setErrorMsg('Please answer above question');
		} else {
			setErrorMsg('');

			if (activeIndex + 1 === questions.length) {
				// const formEle = document.querySelector('form');
				// const formData = new FormData(formEle);
				// console.log(formEle);
				// //setMessage(questions);

				// await fetch(
				// 	'https://script.google.com/macros/s/AKfycbw3d0o9MJ8f8gGEDnJIxigWxRyYZefrr4guzgCul7x8HrrMEKgk1C167f3H3sgXzZum/exec',
				// 	{
				// 		method: 'POST',
				// 		body: formData,
				// 	}
				// );
				//setHref('/details');

				// location.push('/details');
				location.href = `/details/?questions=${JSON.stringify(questions)}`;
			} else {
				setIndex((prev) => {
					return prev + 1;
				});
			}
		}
	};
	const handleHomeClick = (e) => {
		e.preventDefault();
		if (activeIndex === 0) {
			location.replace('/');
		} else {
			setErrorMsg('');
			setIndex((prev) => {
				return prev - 1;
			});
		}
	};

	return (
		<div className={styles.test}>
			<div className={styles.bg}>
				<div className={styles.buttonCnt}>
					<div className={styles.proceed} onClick={handleHomeClick}>
						<Button text="" src="/arrowLeft.svg" />
					</div>
				</div>
				<div className={styles.lines}>
					{questions.map((ele, index) => {
						return (
							<hr
								className={`${styles.line} ${
									index <= activeIndex ? styles.activeLine : ''
								}`}
								key={index}
							/>
						);
					})}
				</div>
				<div>
					<div className={styles.icon}>
						<img src={questions[activeIndex].icon} alt="icon" />
					</div>
					<div className={styles.question}>
						{questions[activeIndex].question}
					</div>
					<div>
						<form>
							{questions.map((ele, index) => {
								if (ele?.options?.length > 0) {
									return (
										<div
											key={index}
											className={`${
												index === activeIndex ? '' : styles.display
											}`}
											onChange={handleChange}
										>
											{ele?.options?.map((option, i) => {
												return (
													<div key={i} className={styles.option}>
														<input
															type="radio"
															id={option}
															name={ele.question}
															value={option}
															className={styles.radio}
														/>
														<label className={styles.label} htmlFor={option}>
															{option}
														</label>
													</div>
												);
											})}
										</div>
									);
								} else {
									return (
										<textarea
											key={index}
											onChange={handleChange}
											className={`${styles.textarea} ${
												index === activeIndex ? '' : styles.display
											}`}
											placeholder="Type your answer here..."
											rows={5}
											required
											name={ele.question}
											value={ele.answer}
										/>
									);
								}
							})}
						</form>
						{errorMsg && <p className={styles.errorMsg}>*{errorMsg}</p>}
					</div>
				</div>
				<div className={styles.lastSection}>
					<div className={styles.qedLogo}>
						<div>Powered by</div>
						<img src="/QED42.svg" alt="qed42" />
					</div>
					<div className={styles.proceed} onClick={handleClick}>
						<Button text="Save & Proceed" bgColor={'#B1BD98'} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Questions;
