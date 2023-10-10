import styles from '../Home/index.module.css';
import Button from '../Button';

export default function Home() {
	return (
		<div className={styles.test}>
			<div className={styles.bg}>
				<div className={styles.firstCnt}>
					<div className={styles.logos}>
						<img src="/drupalcon-be-human-think-digital.svg" alt="drupal" />
						<img src="/QED42.svg" alt="qed42" />
					</div>
					<div className={styles.heading1}>Welcome to</div>
					<div className={styles.heading2}>Trivia Fun</div>
					<div className={styles.qedLogo}>
						<div>Powered by QED42</div>
						{/* <img src="/QED42.svg" alt="qed42" /> */}
					</div>
					<hr className={styles.line} />
				</div>
				<div className={styles.imgCnt}>
					<img className={styles.mainImg} src="/mainImage.svg" alt="icon" />
				</div>
				{/* <div className={styles.qedLogo}>
					<div>Powered by</div>
					<img src="/QED42.svg" alt="qed42" />
				</div> */}
				<div className={styles.lastSection}>
					<div className={styles.lastSectionText}>
						Answer fun questions about Drupal, win cool prizes and show off your
						knowledge!
					</div>
					<Button src="/arrowRight.svg" text="Get Started" href="/questions" />
				</div>
			</div>
		</div>
	);
}
