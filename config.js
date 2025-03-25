// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: '',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: '',
	greetingAfternoon: '',
	greetingEvening: '',
	greetingNight: '',

	// Layout
	bentoLayout: 'lists', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '', // Write here your API Key
	weatherIcons: '', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: '', // 'F', 'C'
	language: '', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '',
	defaultLongitude: '',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/',
		},
		{
			id: '2',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.protonmail.com/',
		},
		{
			id: '3',
			name: 'Todoist',
			icon: 'trello',
			link: 'https://todoist.com',
		},
		{
			id: '4',
			name: 'Calendar',
			icon: 'calendar',
			link: 'https://calendar.google.com/calendar/r',
		},
		{
			id: '5',
			name: 'Reddit',
			icon: 'glasses',
			link: 'https://reddit.com',
		},
		{
			id: '6',
			name: 'Odysee',
			icon: 'youtube',
			link: 'https://odysee.com/',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Music',
			icon: 'headphones',
			link: 'https://open.spotify.com',
		},
		{
			id: '2',
			name: 'twitter',
			icon: 'twitter',
			link: 'https://twitter.com/',
		},
		{
			id: '3',
			name: 'bot',
			icon: 'bot',
			link: 'https://discord.com/app',
		},
		{
			id: '4',
			name: 'Amazon',
			icon: 'shopping-bag',
			link: 'https://amazon.com/',
		},
		{
			id: '5',
			name: 'Hashnode',
			icon: 'pen-tool',
			link: 'https://hashnode.com/',
		},
		{
			id: '6',
			name: 'Figma',
			icon: 'figma',
			link: 'https://figma.com/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'globe',
			id: '1',
			links: [
				{
					name: 'Asana',
					link: 'https://app.asana.com/',
				},
				{
					name: 'Passbolt',
					link: 'https://passbolt.afew-store.org/',
				},
				{
					name: 'Shyftplan',
					link: 'https://shyftplan.com/',
				},
				{
					name: 'Wiki',
					link: 'http://wiki.afew-store.org/',
				},
				
			],
		},
		{
			icon: 'globe',
			id: '2',
			links: [
				{
					name: 'Shopify',
					link: 'https://www.linkedin.com',
				},
				{
					name: 'Pimcore',
					link: 'https://www.dribbble.com',
				},
				{
					name: 'Personio',
					link: 'https://www.trello.com',
				},
				{
					name: ' ',
					link: 'https://www.slack.com',
				},
			],
		},
	],
// Second Links Container
	secondListsContainer: [
		{
			icon: 'globe',
			id: '1',
			links: [
				{
					name: 'Reservierungen Doc',
					link: 'https://docs.google.com/spreadsheets/d/1AMGM1mzVMTgeYZAf2MWOwgCYkPxRrZBlRqhUbzDyLT4/edit?gid=1135714417#gid=1135714417',
				},
				{
					name: 'Buchhaltung Doc',
					link: 'https://docs.google.com/spreadsheets/d/1x2XZhxCM_Eu9k8U9thG1gwrtcpFME3e3ErwbsdX-tfw/edit?gid=2005595482#gid=2005595482',
				},
				{
					name: '',
					link: 'https://www.hashnode.com',
				},
				{
					name: '',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'binary',
			id: '2',
			links: [
				{
					name: 'IT Tickets',
					link: 'https://app.asana.com/0/217232717323313/1204991569192678',
				},
				{
					name: '',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: '',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: '',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
	
};
