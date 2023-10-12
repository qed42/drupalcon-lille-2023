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

					<hr className={styles.line} />
					<div className={styles.qedLogo}>
						<div>Powered by QED42</div>
					</div>
				</div>
				<div className={styles.lastSection}>
					<div className={styles.lastSectionText}>
						Answer fun questions about Drupal, win cool prizes and show off your
						knowledge!
					</div>
					<Button src="/arrowRight.svg" text="Get Started" href="/questions" />
				</div>

				<div className={styles.imgCnt}>
					<img className={styles.mainImg} src="/mainImage.svg" alt="icon" />
				</div>
			</div>
			<div className={styles.spaceSection}>
				<div className={styles.spacebg}>
					<img src="/space-logo.svg" />
					<div className={styles.spaceText}>
						Accelerate your digital impact with composable web!
					</div>
					<div className={styles.spaceDescription}>
						SPACE makes it easy to collaborate with teams, track your progress,
						and adapt to emerging technologies.
					</div>
					<div className={styles.spaceLink}>
						Ready to try out SPACE beta version?{' '}
						<a className={styles.aTag} href="/" target="_blank">
							Click here
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
