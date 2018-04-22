const DIAGNOSTICS_QUESTIONS = {
	"1": {
		question: "Do you do your best to hold a strong intention of sustaining the attention on the breathe during meditation?",
		responses: [
			"Yes",
			"Somewhat",
			"No",
		],
		suggestions: [
			{
				score: 5, 
				message: "That's perfect - Continue to be mindful and harbour the right intentions."
			},
			{
				score: 3,
				message: "Continue to remind yourself to hold a conscious intention of sustaining the attention on the breathe."
			},
			{
				score: 1,
				message: "Gently remind yourself to hold a conscious intention of sustaining the attention on the breathe next time.",
			},
		],
		priority: 10,
	},
	"2": {
		question: "What best describes the state of your mind during meditation?",
		responses: [
			"Agitated",
			"Clear",
			"Dull",
		],
		suggestions: [
			{
				score: 1,
				message: "Find and focus on the joyful sensation. Remember that only bad meditation session is one not done.",
			},
			{
				score: 5,
				message: "That's perfect - Continue to develop your attention and awareness for increased clarity.",
			},
			{
				score: 1,
				message: "Try to expand your peripheral awareness to notice the dullness and gently tighten up your focus on the breathe.",
			},
		],
		priority: 5,
	},
	"3": {
		question: "Do you make a consistent effort to apply mindfulness to everyday life?",
		responses: [
			"Yes",
			"Somewhat",
			"No",
		],
		suggestions: [
			{
				score: 5, 
				message: "That's perfect - Continue to be keep up the effort to apply your mindfulness."
			},
			{
				score: 3,
				message: "Increase your efforts to be mindful in everyday setting."
			},
			{
				score: 1,
				message: "Remember that application of mindfulness in real life is very important. Start off by having the intention to be mindful twice per day.",
			},
		],
		priority: 7,
	},
};

export {
	DIAGNOSTICS_QUESTIONS
};