    var Links ={
        LinksSetColor: function(color){
            var alist =document.querySelectorAll('a');
            // var i=0;
            // while (i <alist.length){
            //     console.log(alist[i]);
            //     alist[i].style.color=color;
            // i= i+1;
            // }
            $('a').css('color',color);
        }
    }
    var Body ={
    
        setColor: function (color){
            document.querySelector('body').style.color = color;     
        },
        setBackgroundColor : function(color){
            document.querySelector('body').style.backgroundColor = color;
        } 
    }

    //함수 사용 
    function LinksSetColor(color){
        var alist =document.querySelectorAll('a');
        var i=0;
            while (i <alist.length){
                console.log(alist[i]);
                alist[i].style.color=color;
            i= i+1;
            }
        }
    function BodySetColor(color){
        document.querySelector('body').style.color = color;
    }
    function BodySetBackgroundColor(color){
        document.querySelector('body').style.backgroundColor = color;
     }
    function nightDayHandler(self){
        var target= document.querySelector('body');
        if(self.value ==='night'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value='day';
        Links.LinksSetColor('yellow');
        }

        else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value='night';
        Links.LinksSetColor('blue');
        }
    }