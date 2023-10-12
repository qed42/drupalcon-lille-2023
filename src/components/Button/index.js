import styles from '../Button/index.module.css';

export default function Button({
	text,
	disabled = false,
	src,
	bgColor,
	href = null,
	className,
	onClick = () => {},
	imageFirst = false,
	imgClass,
	target = '_self',
}) {
	return (
		<a
			onClick={onClick}
			href={disabled ? null : href}
			style={{ backgroundColor: bgColor || 'tranparent' }}
			className={`${styles.bg} ${className ? className : ''}`}
			disabled={disabled}
			target={target}
		>
			{text}
			{src && (
				<img
					alt="logo"
					src={src}
					className={`${imageFirst ? styles.imgFirst : ''} ${
						imgClass ? imgClass : ''
					}`}
				/>
			)}
		</a>
	);
}
