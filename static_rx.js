// Static receiver list for dyatlov map maker
// Copyright 2017 Pierre Ynard
// Licensed under GPLv3+

var static_rx = [
	{
		name: '0-29 MHz WebSDR, University of Twente, Enschede, Netherlands',
		url: 'http://websdr.ewi.utwente.nl:8901/',
		gps: '(52.2381,6.8577)',
		bands: '0-29160000',
		users_max: '800',
		antenna: 'Mini-Whip',
	},
	{
		name: '2-8 MHz WebSDR, Silec, Poland',
		url: 'http://websdr.printf.cc:8901/',
		gps: '(54.1605231, 21.5543704)',
		bands: '2000000-8000000',
		users_max: '20',
		antenna: '30m random wire',
	},
	{
		name: '0-7.6 MHz OpenWebRX SDR, OH2EAT, Finland (with 4-minute history buffer)',
		url: 'http://sdr.dy.fi/',
		gps: '(60.940055, 25.990486)',
		bands: '0-7600000',
		users_max: '20',
		antenna: 'Inverted L',
	},
];
