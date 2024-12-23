module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST'),
			port: env.int('DATABASE_PORT'),
			database: env('DATABASE_NAME'),
			user: env('DATABASE_USERNAME'),
			password: env('DATABASE_PASSWORD'),
			ssl: env.bool('DATABASE_SSL')
		}
	}
});
// module.exports = ({ env }) => ({
// 	connection: {
// 	  client: 'sqlite',
// 	  connection: {
// 		filename: env('DATABASE_FILENAME', '.tmp/data.db')
// 	  },
// 	  useNullAsDefault: true
// 	}
//   });