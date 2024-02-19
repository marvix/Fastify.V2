import { defineConfig } from 'vite'
import vue              from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig(
	{
		mode   : 'development', // production //development
		plugins: [
			vue(),
		],
		define : {
			'process.env': process.env
		},
		build  : {
			// minify: false,
			outDir: 'site',
			// sourcemap: true,
		},
		server : {
			// host : '172.16.9.5',
			port: '3001'
		}
	} )
// export default {
// 	mode   : 'development', // production //development
// 		plugins: [
// 			vue(),
// 		],
// 		define : {
// 			'process.env': process.env
// 		},
// 		build  : {
// 			// minify: false,
// 			outDir: 'site',
// 			// sourcemap: true,
// 		},
// 		server : {
// 			// host : '172.16.9.5',
// 			port: '3001'
// 		}
// }