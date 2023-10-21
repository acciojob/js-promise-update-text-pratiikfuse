//your JS code here. If required.
async function fun(){
	return setTimeOut(()=>"Hello, World!",1000);
}
fun().then((res)=>{
	document.getElementById("output").innerText  = res;
})