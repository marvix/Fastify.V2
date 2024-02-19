

import Fastify from  "fastify"
const app = Fastify( {})


const start = async () => {
	try {
		await app.listen( {
							  port: process.env.PORT,
							  host: '0.0.0.0'
						  } )
	}
	catch ( err ) {
		app.log.error( err )
		process.exit( 1 )
	}
}
start().then( () => {
	app.log.info( 'Server is up.' );
	app.log.info( `environment: ${ process.env.NODE_ENV }` )
} );

app.ready( () => {
	console.log( '\x1b[35m%s\x1b[0m', 'INFO//-----/SERVER iS READY//-----------------------------------------------------------------------' );  //cyan
	console.log( app.printRoutes() )
	console.log( '\x1b[35m%s\x1b[0m', 'INFO//-----/SERVER iS READY//-----------------------------------------------------------------------' );  //cyan

} );



