console.log('hello from script.js');

function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    }

    function proverka(el) {
        var matrix = "+7(123)456-78-90",
            i = 0,
            val = el.value.replace(/\D/g, '');
            !val && (val = "7")
        matrix = matrix.replace(/\d/g, function (a) {
            return val.charAt(i++) || "_"
        })
        el.value = matrix;
        i = matrix.lastIndexOf(val.substr(-1));
        i < matrix.length && i > 2 ? i++ : (i = 3)
        setCursorPosition(i, el)
    };
   document.querySelector('input').focus();




// timer

var remain_bv   = 14640;
function parseTime_bv(timestamp){
    if (timestamp < 0) timestamp = 0;
 
    var day = Math.floor( (timestamp/60/60) / 24);
    var hour = Math.floor(timestamp/60/60);
    var mins = Math.floor((timestamp - hour*60*60)/60);
    var secs = Math.floor(timestamp - hour*60*60 - mins*60); 
    var left_hour = Math.floor( (timestamp - day*24*60*60) / 60 / 60 );
 
    $('span.afss_day_bv').text(day);
    $('span.afss_hours_bv').text(left_hour);
 
    if(String(mins).length > 1)
        $('span.afss_mins_bv').text(mins);
    else
        $('span.afss_mins_bv').text("0" + mins);
    if(String(secs).length > 1)
        $('span.afss_secs_bv').text(secs);
    else
        $('span.afss_secs_bv').text("0" + secs);
     
}
 
$(document).ready(function(){
    setInterval(function(){
        remain_bv = remain_bv - 1;
        parseTime_bv(remain_bv);
        if(remain_bv <= 0){
            alert('Hello');
        }
    }, 1000);
});