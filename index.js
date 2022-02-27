let  a = "abcd";
let stack  = [];
let b = [];
let numberarray = a.length;
// console.log(numberarray)
// for(var i = numberarray - 1 ; i >= 0 ; i--){
//     console.log(a[i])
// }
// dynamic number 
let number =9;
for( var i = 1 ; i <= number ; i++){
    can(i);
    
}

function vuong(i){
    let tmp ='';
    for( var j = 0; j<i;j++){
        tmp = tmp + '*';
    }
    console.log(tmp);
}

function can(i){
    let tmp ='';
    if( i == 1)
    {
        // cộng 1 là do nguoi ta cong diem o giua la * nhung o day la + space
        let distance = distanceSpace(number,i)+1;
        for( var k = 0 ; k < distance;k++){
            tmp = tmp + " ";
        }
        tmp = diemogiuacuatamgiac(tmp);
        console.log(tmp);
    }
    else{
        // dòng cuối cùng không cần cách khoảng trắng
        if( i == number )
        {
            i = i*2
            for( var j = 0; j<i;j++){
                tmp = tmp + '*';
            }
        }
        else{
            let distance = distanceSpace(number,i);
            for( var k = 0 ; k < distance;k++){
                tmp = tmp + " ";
            }
            i = i*2
           
            for( var j = 0; j<i;j++){
                tmp = tmp + '*';
            }
        }
        tmp = diemogiuacuatamgiac(tmp);
        console.log(tmp);
    
    }
    
}
function distanceSpace(number , i )
{
    return number - i;
}
function diemogiuacuatamgiac(tmp)
{
    return tmp = tmp + '*';
}
