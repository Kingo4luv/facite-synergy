import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const reviews = [
	{
		name: 'Olumide Adeyemi',
		date: 'June 2025',
		rating: 5,
		comment: 'Facite Synergy delivered beyond expectations. The team was professional, attentive to our needs, and ensured every detail was perfect. Highly recommended for anyone seeking quality and reliability!',
	},
	{
		name: 'Chiamaka Okeke',
		date: 'May 2025',
		rating: 4,
		comment: 'We purchased land through Facite Synergy and the process was seamless. Their team handled all documentation and survey with transparency. I felt confident every step of the way.',
	},
	{
		name: 'Aisha Bello',
		date: 'April 2025',
		rating: 5,
		comment: 'Great communication and project delivery! The staff was friendly and always available to answer our questions. The final outcome exceeded our expectations.',
	},
	{
		name: 'Emeka Okafor',
		date: 'March 2025',
		rating: 4,
		comment: 'I needed roofing and survey services for my new home. Facite Synergy provided expert advice and quality workmanship. The survey was accurate and the roofing was completed on time.',
	},
	{
		name: 'Fatima Yusuf',
		date: 'February 2025',
		rating: 5,
		comment: 'Highly professional team! They paid attention to every detail and made sure we were happy with the results. I would recommend them to anyone.',
	},
	{
		name: 'David Brown',
		date: 'January 2025',
		rating: 5,
		comment: 'I bought roofing sheets from Facite Synergy and was impressed by the quality of materials. The sales process was straightforward and delivery was prompt. Will buy again!',
	},
	{
		name: 'Chinedu Nwosu',
		date: 'December 2024',
		rating: 4,
		comment: 'Would recommend to others. The team was knowledgeable and provided valuable insights throughout the process. Great experience overall.',
	},
	{
		name: 'Grace Williams',
		date: 'November 2024',
		rating: 5,
		comment: 'Fantastic experience! From start to finish, everything was handled professionally and efficiently. The results speak for themselves.',
	},
	{
		name: 'Samuel Johnson',
		date: 'October 2024',
		rating: 5,
		comment: 'Very reliable and efficient. The team went above and beyond to ensure our satisfaction. I would not hesitate to use their services again.',
	},
	{
		name: 'Ngozi Uche',
		date: 'September 2024',
		rating: 4,
		comment: 'Good value for money. The service was excellent and the team was very responsive to our needs. Highly recommended for anyone looking for quality work.',
	},
];

// Custom Arrow Components
const Arrow = ({ style, onClick, direction }: { style?: React.CSSProperties; onClick?: () => void; direction: 'left' | 'right' }) => (
  <button
    className={`slick-arrow !flex items-center justify-center !bg-white !border !border-gray-300 !rounded-full !p-2 !shadow-lg !transition hover:!bg-gray-100 !w-10 !h-10 !z-20 ${direction === 'left' ? '!left-[-8px]' : '!right-[-8px]'} !top-1/2 !-translate-y-1/2`}
    style={{ ...style, boxShadow: '0 2px 8px rgba(0,0,0,0.08)', position: 'absolute' }}
    onClick={onClick}
    aria-label={direction === 'left' ? 'Previous reviews' : 'Next reviews'}
  >
    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      {direction === 'left' ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      )}
    </svg>
  </button>
);

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
			},
		},
	],
	arrows: true,
	nextArrow: <Arrow direction="right" />, // Custom right arrow
	prevArrow: <Arrow direction="left" />,  // Custom left arrow
};

const getInitials = (name: string) => {
	const names = name.split(' ');
	return names.map(n => n[0]).join('').toUpperCase();
};

const ReviewSection = () => (
	<section id="reviews" className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100">
		<div className="max-w-4xl mx-auto px-4">
			<h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center tracking-tight">Client Reviews</h2>
			<Slider {...settings}>
				{reviews.map((review, idx) => (
					<div key={idx} className="px-2">
						<div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 h-[280px] min-h-[280px] max-h-[300px] flex flex-col justify-between transition-transform duration-200 hover:scale-105 hover:shadow-xl relative overflow-hidden">
							<div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 opacity-20 rounded-t-2xl" />
							<div className="flex items-center mb-4">
								<div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-pink-400 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow mr-4">
									{getInitials(review.name)}
								</div>
								<div>
									<span className="font-semibold text-gray-800 text-base block">{review.name}</span>
									<span className="text-xs text-gray-500 block">{review.date}</span>
								</div>
								<span className="ml-auto flex gap-1">
									{Array.from({ length: review.rating }).map((_, i) => (
										<svg
											key={i}
											className="w-5 h-5 text-yellow-400 animate-pulse"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.784.57-1.838-.197-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.174 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
										</svg>
									))}
								</span>
							</div>
							<p className="text-gray-700 text-lg italic leading-relaxed mb-2 flex-1 overflow-auto">“{review.comment}”</p>
						</div>
					</div>
				))}
			</Slider>
		</div>
	</section>
);

export default ReviewSection;
