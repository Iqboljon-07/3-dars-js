
alert("1:Breakfast" +"\n"+ "2:Lunch" +"\n"+"3:Dinner" +"\n"+"4:Snack"+"\n"+"5:Menu tanlash uchun OK tugnasini bosing");
let menu=parseFloat( prompt("Menu tanlang"))
switch(menu){

case 1:

alert("You chose Breakfast");break

case 2:{
alert("You chose Lunch");break;


}
case 3:{
alert("You chose Dinner");break;

}

case 4:
{

alert("You chose Snack");break;

}
default: alert("Please 4 gacha bo'lagan raqam kiriting")
}