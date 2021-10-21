import {createApp} from 'https://unpkg.com/petite-vue?module';
import names from './names.js';
console.log(location.hash.substr(1));
const name = names[location.hash.substr(1)] ? location.hash.substr(1) : 'Sarah';
createApp({
	name,
	names,
}).mount();
