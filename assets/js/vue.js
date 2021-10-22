import {createApp, nextTick} from 'https://unpkg.com/petite-vue?module';
import names from './names.js';
const name = names[location.hash.substr(1)] ? location.hash.substr(1) : 'Sarah';
createApp({
	name,
	names,
	width: 135,
	async change() {
		location = '#' + name;
		this.width = this.$refs.name.clientWidth + 20;
	},
}).mount();
