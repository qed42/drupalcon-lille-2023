import { useState, useContext, useEffect } from 'react';
import styles from '../details/index.module.css';
import Button from '../../components/Button';

const Details = (props) => {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [email, setEmail] = useState('');

	const [questions, setQuestions] = useState([]);

	const submitData = async () => {
		const formEle = document.querySelector('form');
		const formData = new FormData(formEle);
		await fetch(
			'https://script.google.com/macros/s/AKfycbyxxqoLiDtujl1KQ48Uuux7NhYK3i4WR0P24Tl2gHJZcZeRFngYoT3hGojsus5fAFBL/exec',
			{
				method: 'POST',
				body: formData,
			}
		);

		location.replace('/thank-you');
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await submitData();
	};

	const handleSkip = async (e) => {
		e.preventDefault();
		await submitData();
	};

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		setQuestions(JSON.parse(queryParams.get('questions')));
	}, []);

	return (
		<div className={styles.bg}>
			<div className={styles.buttonCnt}>
				{/* <div onClick={handleHomeClick}> */}
				<Button text="" href="/questions" src="/arrowLeft.svg" />
				<div className={styles.proceed} onClick={handleSkip}>
					<Button
						className={styles.buttonPadding}
						text="Skip"
						//href="/questions"
					/>
				</div>
				{/* </div> */}
			</div>
			<div className={styles.imgCnt}>
				<img src="/details.svg" alt="icon" />
			</div>
			<div>
				<div className={styles.heading}>Stay in the Loop</div>
				<div className={styles.description}>
					While providing your contact information is completely optional, it
					helps us keep you in the loop if you&#39;re a lucky winner.
				</div>
				<div className={styles.para}>
					Rest assured, your information will be kept confidential.
				</div>
			</div>
			<div>
				<form className={styles.form}>
					{questions?.map((ele, index) => {
						return (
							<textarea
								style={{ display: 'none' }}
								key={index}
								onChange={(e) => e.preventDefault()}
								placeholder="Type your answer here..."
								rows={5}
								required
								name={ele.question}
								value={ele.answer}
							/>
						);
					})}
					<input
						className={styles.input}
						name="name"
						type="text"
						value={name}
						placeholder="Full Name"
						onChange={(e) => setName(e.target.value)}
					/>
					<input
						className={styles.input}
						name="company"
						type="text"
						value={company}
						placeholder="Company"
						onChange={(e) => setCompany(e.target.value)}
					/>
					<input
						className={styles.input}
						name="email"
						type="email"
						value={email}
						placeholder="Email Address"
						onChange={(e) => setEmail(e.target.value)}
					/>
				</form>
			</div>
			<div className={styles.lastSection}>
				<div className={styles.qedLogo}>
					<div>Powered by</div>
					<img src="/QED42.svg" alt="qed42" />
				</div>
				<div className={styles.proceed} onClick={handleSubmit}>
					<Button text="Save & Proceed" />
				</div>
			</div>
		</div>
	);
};

export default Details;
