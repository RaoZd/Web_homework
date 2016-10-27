/**
 * Created by rzd on 2016/10/1.
 */
function quickSort(array, start, end) {
    if(end<start)return;
    pivot=array[start];
    l=start;
    h=end;
    while(l<h)
    {
        while(array[h]>=pivot&&l<h)h--;
        array[l]=array[h];
        while(array[l]<pivot&&l<h)l++;
        array[h]=array[l];
    }
    array[l]=pivot;
    quickSort(array, start, l-1);
    quickSort(array, l+1, end);
}
function work1() {
    str=prompt("输入整数，以','作为分隔符（英文输入法）","12,8,6,7,15,19,4,13,2,1");
    nstr=str.split(",");
    var nn=new Array();
    for(var i=0;i<nstr.length;i++)
        nn[i]=parseInt(nstr[i]);

    document.write("输入的整型数组："+"<br/>");
    for(var i=0;i<nn.length;i++)
        document.write(nn[i].toString()+" ");
    document.write("<br/>");
    quickSort(nn,0,(nn.length-1));
    document.write("输出的整型数组："+"<br/>");
    for(var i=0;i<nn.length;i++)
        document.write(nn[i].toString()+" ");
}

var cur=0;
var element=document.getElementsByClassName("native");
var length=element.length;
function work2(element) {
    if(cur==length){
        element[cur-1].style.color="black";
        cur=0;
    }
    element[cur].style.color="red";
    if(cur>0)element[cur-1].style.color="black";

    cur++;
}
setInterval("work2(element)",1000);



Event.observe("btn1","click",function () {
var names=new String();
    for(var i=0;i<length;i++)
    {
        names+=element[i].textContent+"\n";
    }
    names=names.split("").reverse().join("");
    alert(names);
});