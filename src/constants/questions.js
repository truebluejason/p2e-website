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
				message: "Great! Continue to be mindful and harbour the right intentions."
			},
			{
				score: 3,
				message: "Continue to remind yourself to hold a conscious intention of sustaining the attention on the breathe."
			},
			{
				score: 1,
				message: "Gently remind yourself to hold a conscious intention of sustaining the attention on the breathe next time.",
			}
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
			"Find and focus on the joyful sensation. Remember that only bad meditation session is one not done.",
			"GOOD",
			"Try to expand your peripheral awareness to notice the dullness and gently tighten up your focus on the breathe."
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
			"GOOD",
			"Increase your efforts to be mindful in everyday setting.",
			"Remember that application of mindfulness in real life is very important. Start off by having the intention to be mindful twice per day."
		],
		priority: 5,
	},
};

export {
	DIAGNOSTICS_QUESTIONS
};