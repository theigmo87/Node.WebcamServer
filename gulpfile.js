var gulp = require('gulp');
var sftp = require('gulp-sftp');

var PATH = {
	src: {
		dev:{
			all: "/",
			app: "app"
		}
	}
}

//deploying over sftp
gulp.task('deploy.webcamClient', function(){
	return gulp.src(PATH.src.dev.all + "/*")
		.pipe(sftp({
			host: 'retropie.local',
			user: 'pi',
			pass: 'raspberry',
            remotePath: '/home/pi/Development/Node.WebcamServer'
		}));
});
