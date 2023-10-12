import styles from '../Qed42/index.module.css';

export default function Qed42({ imageFirst = false }) {
	return (
		<a className={styles.bg} href="https://www.qed42.com/" target="_blank">
			View our work
			<img
				alt="qed"
				src="/QED42.svg"
				className={`${imageFirst ? styles.imgFirst : ''}`}
			/>
		</a>
	);
}
