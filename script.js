var div=document.getElementById('timer')

setTimeout(()=>{
     div.innerHTML=10
       setTimeout(()=>{
           div.innerHTML=9
           setTimeout(()=>{
              div.innerHTML=8
               setTimeout(()=>{
                   div.innerHTML=7
                   setTimeout(()=>{
                      div.innerHTML=6
                       setTimeout(()=>{
                          div.innerHTML=5
                           setTimeout(()=>{
                             div.innerHTML=4
                               setTimeout(()=>{
                                  div.innerHTML=3
                                   setTimeout(()=>{
                                      div.innerHTML=2
                                       setTimeout(()=>{
                                          div.innerHTML=1
                                           setTimeout(()=>{
                                               div.innerHTML=0
                                               setTimeout(()=>{
                                                   div.innerHTML='<img src=https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1henYj.img?w=768&h=432&m=6>';
                                                   div.setAttribute("id","img")
                                               },1000)
                                           },1000)
                                       },1000)
                                   },1000)

                               },1000)
                           },1000)
                       },1000)
                   },1000)
               },1000)
           },1000)
       },1000)
   },1000)