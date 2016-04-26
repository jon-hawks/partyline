Meteor.startup(() => {
	AccountsGuest.anonymous = true;
	Accounts.removeOldGuests(new Date);
	
	if(typeof process.env.PWD !== 'string') process.env.PWD = 'E:/arkivez/warez/GitPortable/a100-dev/partyline/';
	
	UploadServer.init({
		tmpDir: process.env.PWD + '/.uploads/tmp',	// temp upload dir
		uploadDir: process.env.PWD + '/.uploads/',	// upload dir
		checkCreateDirectories: true
	});
});