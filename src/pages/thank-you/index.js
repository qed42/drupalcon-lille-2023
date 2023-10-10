import styles from '../thank-you/index.module.css';
import { useState } from 'react';
import Button from '../../components/Button';
import { TwitterShareButton, LinkedinShareButton } from 'react-share';
import { LinkedinIcon, TwitterIcon } from 'react-share';
import Modal from 'react-modal';

const ThankYou = (props) => {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className={styles.bg}>
			<div className={styles.buttonCnt}>
				{/* <div onClick={handleHomeClick}> */}
				<Button text="" href="/" src="/home.svg" />

				{/* </div> */}
			</div>
			<div className={styles.imgCnt}>
				<img className={styles.img} src="/thank-you.svg" alt="icon" />
			</div>
			<div>
				<div className={styles.heading}>Thank you for your participation!</div>
				<div className={styles.description}>
					Post a picture on social media wearing our T-shirts and get a chance
					to win an exciting prize!
				</div>
			</div>

			<div className={styles.lastSection}>
				<div className={styles.qedLogo}>
					<div>Powered by</div>
					<img src="/QED42.svg" alt="qed42" />
				</div>
				<div>
					<Button onClick={openModal} text="Share" imageFirst={true} />
				</div>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					className={styles.modal}
				>
					<div className={styles.icons}>
						<TwitterShareButton
							title={
								'Received this fantastic #Drupal Hindi T-shirt from @qed42 at #DrupalConLille'
							}
							url={' '}
						>
							<TwitterIcon round />
						</TwitterShareButton>
						<LinkedinShareButton
							title="Received this fantastic #Drupal Hindi T-shirt from @qed42 at #DrupalConLille"
							url={'https://www.qed42.com/'}
						>
							<LinkedinIcon round />
						</LinkedinShareButton>
						<a href="https://www.instagram.com/" target="_blank">
							<img className={styles.insta} src="/instagram.svg" />
						</a>
					</div>
					<button className={styles.close} onClick={closeModal}>
						Close
					</button>
				</Modal>
			</div>
		</div>
	);
};

export default ThankYou;
