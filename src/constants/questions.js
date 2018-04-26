// The code supports 3 or less options for now.
/*
Labels (For Administrative Purposes)
1. Intention
2. Motivation
3. Application
4, Check
*/
const DIAGNOSTICS_QUESTIONS = {
	"1": {
		question: "Do you do your best to hold a strong intention of sustaining the attention on the breath during meditation?",
		responses: [
			"Yes",
			"Somewhat",
			"No",
		],
		suggestions: [
			"That's perfect - Continue to be mindful and harbour the right intentions.",
			"Firmly remind yourself to hold a conscious intention of sustaining the attention on the breath.",
			"Investigate the reason why your mind isn't making an effort to sustain a strong intention and remedy it.",
		],
		label: "Intention",
		priority: 10,
	},
	"2": {
		question: "What best describes the state of your mind during meditation?",
		responses: [
			"Clear",
			"Dull",
			"Agitated",
		],
		suggestions: [
			"That's perfect - Continue to develop your attention and awareness for increased clarity.",
			"Try to expand your peripheral awareness to notice the dullness and gently tighten up your focus on the breath.",
			"Find and focus on the joyful sensation. Remember that only bad meditation session is one not done.",
		],
		label: "Check",
		priority: 5,
	},
	"3": {
		question: "What best describes the way your attention returns to the breath?",
		responses: [
			"Soft and firm.",
			"Forceful and chastizing.",
			"In defeat and apathy.",
		],
		suggestions: [
			"That's perfect - Continue to refocus the attention gently and tactfully.",
			"Remember that the moment you return the attention is the most helpful part of meditation - moments of self criticism can increase agitation.",
			"Remember that the moment you return the attention is the most helpful part of meditation - lack of faith in yourself decreases motivation.",
		],
		label: "Intention",
		priority: 9,
	},
	"4": {
		question: "Do you experientially believe that your practice will lead to contentment?",
		responses: [
			"Yes",
			"Somewhat",
			"No",
		],
		suggestions: [
			"That's perfect - Continue to harbour your faith.",
			"Strong belief in yourself and method will lead to increased motivation and stronger intention.",
			"Strong belief in yourself and method will lead to increased motivation and stronger intention. Do what it takes to restore the faith.",
		],
		label: "Motivation",
		priority: 8,
	},
	"5": {
		question: "What is your mind's attitude toward meditation when it's time for you to practice?",
		responses: [
			"An opportunity for me to cultivate clarity of mind.",
			"A task I must get through to proceed with my day.",
			"I guess I will do this even though I don't really want to.",
		],
		suggestions: [
			"That's perfect - Continue to meditate with freshness and excitement.",
			"Always remember that meditation session is a chance for you to help yourself.",
			"Try to find your motivation to meditate once again. A mind demotivated will not stay on task for long.",
		],
		label: "Motivation",
		priority: 9,
	},
	"6": {
		question: "Do you make a consistent effort to apply mindfulness to everyday life?",
		responses: [
			"Yes",
			"Somewhat",
			"No",
		],
		suggestions: [
			"That's perfect - Continue to be keep up the effort to apply your mindfulness.",
			"Increase your efforts to be mindful in everyday setting.",
			"Remember that application of mindfulness in real life is very important. Start off by having the intention to be mindful twice per day.",
		],
		label: "Application",
		priority: 7,
	},
};

export {
	DIAGNOSTICS_QUESTIONS
};