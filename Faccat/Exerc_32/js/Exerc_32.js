let time = new Array(), 
gols_time = new Array();

time[1] = prompt("Digite o nome do time 1:");
time[2] = prompt("Digite o nome do time 2:");

gols_time[1] = parseInt(prompt("Digite a quantidade de gols feitas pelo time 1:"));
gols_time[2] = parseInt(prompt("Digite a quantidade de gols feitas pelo time 2:"));

if(gols_time[1] == gols_time[2]){
    alert("EMPATE");
}else{
    if(gols_time[1] > gols_time[2]){
        alert(time[1]);
    }else{
        alert(time[2]);
    }
}