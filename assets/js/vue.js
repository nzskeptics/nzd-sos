import {createApp} from 'https://unpkg.com/petite-vue?module';
import names from './names.js';
const name = names[location.hash.substr(1)] ? location.hash.substr(1) : 'Sarah';
createApp({
	name,
	names,
}).mount();
