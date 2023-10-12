import styles from '../Home/index.module.css';
import Button from '../Button';
import { useState, useEffect } from 'react';
import Header from '../Header';

export default function Home() {
	const [showSpace, setShowSpace] = useState(true);
	const crossClick = (e) => {
		e.preventDefault();
		setShowSpace(false);
	};
	// useEffect(() => {
	// 	const queryParams = new URLSearchParams(window.location.search);
	// 	if (queryParams.get('space')) {
	// 		setShowSpace(JSON.parse(queryParams.get('space')));
	// 	}
	// }, []);
	return (
		<div className={styles.test}>
			{showSpace && (
				<>
					{/* <div className={styles.spaceSection}>
						<div className={styles.spacebg}>
							<div>
								<img src="/space-logo-white.svg" alt="logo" />
								<div className={styles.spaceText}>
									Supercharge your Drupal projects with SPACE and save upto 40%
									time
								</div>
								<div className={styles.spaceLink}>
									Sign up for Exclusive beta{' '}
									<a className={styles.aTag} href="/" target="_blank">
										access here
									</a>
								</div>
							</div>
							<div onClick={crossClick}>
								<img src="/cross.svg" alt="cross" />
							</div>
						</div>
					</div> */}
					<Header handleClick={crossClick} />
				</>
			)}
			<div className={styles.bg}>
				<div className={styles.firstCnt}>
					<div className={styles.logos}>
						<img src="/drupalcon-be-human-think-digital.svg" alt="drupal" />
						<img src="/QED42.svg" alt="qed42" />
					</div>
					<div className={styles.heading1}>Welcome to</div>
					<div className={styles.heading2}>Trivia Fun</div>

					<hr className={styles.line} />
					<div className={styles.qedLogo}>
						<div>by QED42</div>
					</div>
				</div>
				<div className={styles.lastSection}>
					<div className={styles.lastSectionText}>
						Answer fun questions about Drupal, win cool prizes and show off your
						knowledge!
					</div>
					<Button
						src="/arrowRight.svg"
						text="Get Started"
						href={`/questions/?space=${JSON.stringify(showSpace)}`}
					/>
				</div>

				<div className={styles.imgCnt}>
					<img className={styles.mainImg} src="/mainImage.svg" alt="icon" />
				</div>
			</div>
		</div>
	);
}
