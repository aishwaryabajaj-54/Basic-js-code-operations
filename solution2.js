console.log('Question 2:')
function nameFileSystem(files){
	if(!files || !files.length) return;
	const uniqueFileNames = [];
 	files.map((file, index)=>{
		if(uniqueFileNames && uniqueFileNames.length && uniqueFileNames.includes(file)){
			file = file + '(' + index + ')';
		}
		uniqueFileNames.push(file);
		return file;
	});
	return uniqueFileNames;
}

nameFileSystem(["naruto","naruto(1)","naruto(2)","naruto(3)", "naruto"])