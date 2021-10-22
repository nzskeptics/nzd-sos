import {createApp, nextTick} from 'https://unpkg.com/petite-vue?module';
import names from './names.js';
const name = names[location.hash.substr(1)] ? location.hash.substr(1) : 'Sarah';
createApp({
	name,
	names,
	get width() {
		if (this.name) {
			nextTick(() => {
				if (this.$refs && this.$refs.name) return this.$refs.name.clientWidth + 20;
				else return 170;
			});
		} else {
			return 170;
		}
	},
}).mount();
