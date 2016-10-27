/**
 * Created by rzd on 2016/10/14.
 */
window.onload = function () {
    var input = $('text');
    var add = $('add');
    var selectAll = $('selectAll');
    var removeAll = $('removeAll');
    var remove = $('remove');
    var list = $('list');
    var divv=$('to-do');
    function process() {
        switch (event.target.id)
        {
            case 'selectAll':
                selec();break;
            case 'removeAll':
                remall();break;
            case 'remove':
                remov();break;
            case 'add':
                ad();break;
        }

    }
    divv.addEventListener('click',process,false
        )
    function ad() {
        var inputValue = input.value;
        var li;
        if (inputValue) {

            li = document.createElement('li');
            var content=document.createTextNode(inputValue);
            var check=document.createElement('input');
            check.type='checkbox';
            li.appendChild(check);
            li.appendChild(content);
            list.appendChild(li);
        }
    };
    function selec() {
        var cks = list.getElementsByTagName('input');
        var i;
        var length = cks.length;
        var ck;
        for (i = 0; i < length; i++) {
            ck = cks[i];
            if(!ck.checked) {
                ck.checked = true;
            }
        }
    };
    function remov() {
        var cks = list.getElementsByTagName('input');
        var i;
        var ck;
        var li;
        for (i = cks.length - 1; i >= 0; i--) {
            ck = cks[i];
            if(ck.checked) {
                li = ck.parentNode;
                li.parentNode.removeChild(li);
            }
        }
    };
    function remall() {
// list.parentNode.removeChild(list);
        list.innerHTML = '';
    };
}