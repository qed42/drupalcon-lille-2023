import styles from './index.module.css';
export default function Header({ handleClick = () => {} }) {
	return (
		<div className={styles.spaceSection}>
			<div className={styles.spacebg}>
				<div>
					<img src="/space-logo-white.svg" alt="logo" />
					<div className={styles.spaceText}>
						Supercharge your Drupal projects with SPACE and save upto 40% time
					</div>
					<div className={styles.spaceLink}>
						Sign up for Exclusive beta{' '}
						<a
							className={styles.aTag}
							href="https://space-drupalconlille/#contact"
							target="_blank"
						>
							access here
						</a>
					</div>
				</div>
				<div onClick={handleClick}>
					<img src="/cross.svg" alt="cross" />
				</div>
			</div>
		</div>
	);
}
