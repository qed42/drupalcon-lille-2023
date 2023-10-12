import styles from '../thank-you/index.module.css';
import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import { LinkedinShareButton } from 'react-share';
import { LinkedinIcon, TwitterIcon } from 'react-share';
import Modal from 'react-modal';
import Qed42 from '../../components/Qed42';
import Header from '../../components/Header';

const ThankYou = (props) => {
	const [modalIsOpen, setIsOpen] = useState(false);
	const [showSpace, setShowSpace] = useState(false);
	const crossClick = (e) => {
		e.preventDefault();
		setShowSpace(false);
	};

	useEffect(() => {
		const queryParams = new URLSearchParams(window.location.search);
		if (queryParams.get('space')) {
			setShowSpace(JSON.parse(queryParams.get('space')));
		}
	}, []);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}
	let text =
		'Received%20this%20fantastic%20%23Drupal%20Hindi%20T-shirt%20from%20@qed42%20at%20%23DrupalConLille';

	return (
		<>
			{showSpace && <Header handleClick={crossClick} />}
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
					<div className={styles.heading}>
						Thank you for your participation!
					</div>
					<div className={styles.description}>
						Post your photo wearing our #DrupalHindiTee and tag us on social
						media to stand a chance to win an Airpod!
					</div>
				</div>

				<div className={styles.lastSection}>
					<div>
						<Button onClick={openModal} text="Share" imageFirst={true} />
					</div>
					<hr className={styles.line} />
					<div className={styles.qedLogo}>
						<Qed42 />
						<Button
							className={styles.spaceLogo}
							href="/"
							text="Get Started"
							src="space-logo.svg"
							imgClass={styles.spaceImg}
							target="_blank"
						/>
					</div>
					<hr className={styles.line} />
					<div className={styles.followUs}>
						<div>Follow us on</div>
						<div className={styles.logos}>
							<Button
								className={styles.spaceLogo}
								href="https://twitter.com/qed42"
								src="/twitter.svg"
								target="_blank"
							/>
							<Button
								className={styles.spaceLogo}
								href="https://www.instagram.com/qed42/"
								src="/instaBW.svg"
								target="_blank"
							/>
							<Button
								className={styles.spaceLogo}
								href="https://www.linkedin.com/company/qed42/"
								src="/linkedinBW.svg"
								target="_blank"
							/>
						</div>
					</div>
				</div>
				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					className={styles.modal}
				>
					<div className={styles.icons}>
						<a
							className="twitter-share-button"
							href={`https://twitter.com/intent/tweet?text=${text}&url= `}
							data-size="large"
							target="_blank"
						>
							<TwitterIcon round />
						</a>
						<LinkedinShareButton
							title="Received this fantastic #Drupal Hindi T-shirt from @qed42 at #DrupalConLille"
							url={'https://www.qed42.com/'}
						>
							<LinkedinIcon round />
						</LinkedinShareButton>
						<a href="https://www.instagram.com/" target="_blank">
							<img className={styles.insta} alt="insta" src="/instagram.svg" />
						</a>
					</div>
					<button className={styles.close} onClick={closeModal}>
						Close
					</button>
				</Modal>
			</div>
		</>
	);
};

export default ThankYou;
