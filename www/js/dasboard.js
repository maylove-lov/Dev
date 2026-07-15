async function loadDashboard(){

const token=localStorage.getItem("app_token");

const data=await api("dashboard.php",{

method:"POST",

headers:{

"X-MPORT-TOKEN":token

}

});

if(data.success){

document.getElementById("serverStatus").innerHTML="🟢 Online";

document.getElementById("serverTime").innerHTML=data.data.server_time;

}else{

document.getElementById("serverStatus").innerHTML="🔴 Offline";

}

}

loadDashboard();
