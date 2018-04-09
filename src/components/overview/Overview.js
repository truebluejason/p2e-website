import React from 'react';
import withAuthorization from '../higherorder/withAuthorization';

const RESOURCES = {
	"Book: Altered Traits": "https://www.goodreads.com/book/show/34272471-altered-traits",
	"Book: Get Out of Your Mind and Into Your Life": "https://www.goodreads.com/book/show/25348.Get_Out_of_Your_Mind_and_Into_Your_Life",
	"Book: The Mind Illuminated": "https://www.goodreads.com/book/show/25942786-the-mind-illuminated",
	"Book: Waking Up": "https://www.goodreads.com/book/show/18774981-waking-up",
	"Book: Zen Mind, Beginner's Mind": "https://www.goodreads.com/book/show/402843.Zen_Mind_Beginner_s_Mind",
	"YouTube Channel: Mingyur Rinpoche": "https://www.youtube.com/user/MingyurRinpoche",
	"YouTube Video: Alan Watts Explains What Awakening Means": "https://www.youtube.com/watch?v=7SfZZlpfaN0",
	"YouTube Video: TED Talk on the Habits of Happiness": "https://www.youtube.com/watch?v=vbLEf4HR74E",
};
const populateResources = () => {
	const resourceKeys = Object.keys(RESOURCES);
	const resourceLists = resourceKeys.map((key, i) => {
		return (
			<li key={i}>
				<a href={RESOURCES[key]} target="_blank">{key}</a>
			</li>
		)
	});
	return (
		<ul style={{margin: 0}}>{resourceLists}</ul>
	)
};
const EVIDENCES = {
	"Study: Compassion meditation increases social connectedness": "http://psycnet.apa.org/buy/2008-13989-015",
	"Study: Mindfulness training improves working memory capacity" : "https://www.ncbi.nlm.nih.gov/pubmed/23538911",
	"Wikipedia: Brain activity during meditation": "https://en.wikipedia.org/wiki/Brain_activity_and_meditation",
	"Wikipedia: Meditation research": "https://en.wikipedia.org/wiki/Research_on_meditation",
};
const populateEvidences = () => {
	const evidenceKeys = Object.keys(EVIDENCES);
	const evidenceLists = evidenceKeys.map((key, i) => {
		return (
			<li key={i}>
				<a href={EVIDENCES[key]} target="_blank">{key}</a>
			</li>
		)
	});
	return (
		<ul style={{margin: 0}}>{evidenceLists}</ul>
	)
};
const OverviewPage = () => {
	const divStyle = {
		backgroundColor: 'rgb(248,248,248)', 
		border: '3px solid rgb(225,225,225)', 
  		borderRadius: 4, 
		display: 'flex', 
		flexDirection: 'column', 
		justifyContent: 'center', 
		margin: 12,
		padding: 16,
	};
	const innerDivStyle = {
		backgroundColor: 'rgb(225,225,225)', 
		borderRadius: 4, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		margin: 12,
		padding: 16,
	};
	const innerInnerDivStyle = {
		backgroundColor: 'rgb(240,240,240)', 
		borderRadius: 4, 
		flexDirection: 'column', 
		justifyContent: 'center', 
		margin: 8,
		padding: 12,
	};
	const h3Style = { margin: '40 0 20 0', textAlign: 'center' };
	const pStyle = { textIndent: 12 };
	return (
		<div style={divStyle}>
			<h3 style={h3Style}>What is meditation?</h3>
			<p style={pStyle}>
				Meditation is a practice that helps one see every 
				moment of his/her life as clearly as possible. At first, the practice 
				stabilizes the attention by restricting its movement to 
				the object of meditation - in our case, the breath. Then, the practice 
				enhances the awareness through introspective and extrospective exercises.
			</p>

			<h3 style={h3Style}>Why should I meditate?</h3>
			<p style={pStyle}>
				Meditation has a reputation of being a relaxation activity. However, 
				when done consistently, meditation's impact is far more broad and significant
				than the temporary relaxation it may provide.
				Meditation's long term benefits can be classified into 2 categories: 
				subjective (changes in subjective experience) and objective (changes everyone can observe).
			</p>
			<div style={innerDivStyle}>
				<h5>Subjective</h5>
				<ul>
					<li>Clarity: View every moment clearly and without bias</li>
					<li>Equanimity: Savour each passing second and retain calmness during stressful moments</li>
					<li>Compassion: Be wholly connected with everyone, from your friends to your boss</li>
				</ul>
				<h5>Objective</h5>
				<ul>
					<li>Improved Performance: Stable attention and resistance to disappointment</li>
					<li>Improved Relationships: Less affected by emotions and narratives of your mind</li>
					<li>Moral Conducts: Ethical actions flow naturally without internal resistance</li>
				</ul>
			</div>
			<p style={pStyle}>
				Of course, the changes only come with persistant and skillful practice. You may
				be doubtful of the claims made in this page. That's quite understandable, since I
				also felt that way when I first considered meditating. Therefore, the site has a few  
				links containing scientific evidences at the bottom of this page.
			</p>

			<h3 style={h3Style}>Basic Theory</h3>
			<div style={innerDivStyle}>
				<h5>A Model of Consciousness</h5>
				<p style={pStyle}>
					According to Buddhism
					<a href="https://pdfs.semanticscholar.org/3624/1e1153553b5468b8cd7f61493276f3e23e33.pdf" target="_blank">
						&nbsp;(and some scientists)
					</a>
					, our subjective conscious experience can be classfied into two categories: 
					Attention and Peripheral Awareness.
				</p>
				<div style={innerInnerDivStyle}>
					<h5>Attention</h5>
					<ul style={{margin: 0}}>
						<li>
							Definition: The selective focusing on specific information in the field of consciousness
						</li>
						<li>
							Example: You are walking outside thinking about food when a beautiful butterfly 
							appears in front of your eyes. Your attention just shifted from the thought about 
							food to the butterfly.
						</li>
					</ul>
					<h5>Peripheral Awareness</h5>
					<ul style={{margin: 0}}>
						<li>
							Definition: Conscious information that aren't in the center stage of your perception and appear faded
						</li>
						<li>
							Example: You are walking outside thinking about food when a beautiful butterfly 
							appears in front of your eyes. Though your attention is focused on the butterfly, 
							the visual information of the road you are walking on is present in your peripheral awareness.
						</li>
					</ul>
				</div>
				<br />
				<h5>Intention: The Essence of Meditation</h5>
				<p style={pStyle}>
					Intention is what gives meditation the power to enhance attention and peripheral 
					awareness. Regardless of how distracted a practitioner may be during meditation, 
					harbouring the right intention throughout the course of the practice will guarantee 
					spiritual progress. This is because intention, when held for long, inevitably results 
					in mental action which soon becomes a habit.
				</p>
				<div style={innerInnerDivStyle}>
					<h5 style={{ color: 'teal', textAlign: 'center' }}>Intention => Mental Action => Habit</h5>
				</div>
				<p style={pStyle}>
					Therefore, no matter how bad your mind may seem at concentrating, simply doing your 
					best to hold the right intention during meditation eventually leads to progress.
				</p>
				<br />
				<h5>Positive Reinforcement vs Self Criticism</h5>
				<p style={pStyle}>
					One of the most significant hindrances to meditation progress is our habitual tendency 
					to scold ourselves when our expectations are not met. Almost all beginners get frustrated 
					at how terrible they are at maintaining attention to their breaths. This reaction is both 
					counterproductive to progress and illogical - as mentioned by 
					<a href="https://en.wikipedia.org/wiki/Attentional_shift#Voluntary_vs._automatic_shifts_in_attention" target="_blank">
						&nbsp;this article 
					</a>
					, sustaining attention is entirely involuntary. However, the good news is the fact that 
					directing attention can be done voluntarily.
				</p>
				<p style={pStyle}>
					This fact combined with the previous paragraph on intention leads to 
					the conclusion that meditation should be motivated based on positive reinforcement rather 
					than self criticism. Fully appreciating the fact that you've remembered your intention upon 
					realizing that you've been daydreaming is the best path to stabilizing your attention. Only 
					by finding meditation enjoyable, you will dedicate yourself to the practice long term. The 
					improvements in attention and awareness will naturally follow.
				</p>
				<br />
				<h5>Intellectual Understanding vs Experiential Understanding</h5>
				<p style={pStyle}>
					This is a classic pitfall that many practitioners fall into once they learn about meditation's 
					potentials. The positive changes come only with practice. Expecting equanimity while only 
					talking about meditation theory is akin to expecting yourself to have a fantastic 
					body while only talking about different exercises.
				</p>
				<br />
				<h5>Integration of Mindfulness to Everyday Life</h5>
				<p style={pStyle}>
					Lastly, though developing stable attention and mindfulness during meditation is important, 
					it is equally important to try your best to make stable attention and mindfulness a part 
					of your life. Throughout your day, remember to be as focused as you can on whatever you are 
					doing. Try to always be in the present and be aware of your thoughts. Please feel free to 
					visit this page whenever you need to. Otherwise, you are ready to head over to Instructions 
					Page!
				</p>
			</div>

			<h3 style={h3Style}>Additional Resources</h3>
			<div style={innerDivStyle}>
				{populateResources()}
			</div>

			<h3 style={h3Style}>Evidences</h3>
			<div style={innerDivStyle}>
				{populateEvidences()}
			</div>
		</div>
	);
};
/*
If you're still unsatisfied, feel free to do a quick Google search on trait changes of long term meditation.
<h3 style={h3Style}>Site Rational</h3>
<p style={pStyle}>
	Path to Enlightenment was created to faciliate meditation progress. The stage system and its 
	contents were heavily influenced by 
	<a href="https://www.goodreads.com/book/show/25942786-the-mind-illuminated" target="_blank">
		&nbsp;this book,&nbsp;
	</a>
	along with many others. From these resources, I've tried my best to succinctly compile 
	an empirical interpretation of meditation and its theory. Path to Enlightenment's contents 
	do not reflect the views of all meditation traditions.
</p>
*/


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(OverviewPage);