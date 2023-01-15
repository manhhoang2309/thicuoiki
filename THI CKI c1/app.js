// for in va for of:
let list = [4,5,6];
for (let i in list){
    console.log(i);
}
// 0,1,2
for (let i of list){
    console.log(i);
}
// chuc nang indexof
let text ="Quoc Khanh, Hai Dang, Dang Hoang, Tram";
let result = text.indexOf ("Dang Hoang");
console.log(result);
let menu = [];
let n = prompt ("Nguoi dung nhap mon an:");
n = Number (n);
let i = 1;
do {
    let x = prompt (`Moi nguoi dung nhap mon an thu ${i}`); 
    menu.push(x);
    i = i + 1;
}
while (i <= n);
console.log("Menu mon an hien tai la:",menu);
let input;
do {
    input = prompt("Moi nguoi dung nhap C,R,U,D");
        if(input == 'c')
        { // kiem tra input co = c hay khong?
    menu.push(prompt("Moi nguoi dung nhap mon an can them"));
        console.log("Menu mon an sau khi them la:",menu);
        }
        else if (input == 'r'){
            
            // tim duoc vi tri cua phan tu minh muon cap nhap(update)
            let vitriUpdate = menu.indexOf(prompt)("Nguoi dung nhap mon an can nhap")
            menu[vitriUpdate] = promt("Nguoi dung can nhap mon an moi thay the cho mon 
            //hey 
            console.log("Menu mon an sau khi cap nhap la:",menu);

        }
        else if (input =='d'){
            let vitriDelete = menu.indexOf(promt("Nguoi dau nhap mon an can xoa:"));
            menu.splice(vitriDelete)= menu.indexOf(prompt("Nguoi dung nhap mon an muon xoa:",menu));
        }
        else{
            arlert("Khong ton tai lua cho nao --> bye bye yeu")
        }
}
while (input == 'c')
