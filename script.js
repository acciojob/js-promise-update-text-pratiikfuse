//your JS code here. If required.
setTimeOut(()=>new Promise((res,rej)=>{
	res("Hello, World!");
}),1000).then((res)=>{
	document.getElementById("output").innerText = res;
})
