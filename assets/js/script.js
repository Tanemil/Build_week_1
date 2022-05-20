let counter = 0

let last_index = 0

function scroll_gallery(){

    // mi segno il padding grazie a screen.width siccome nel css cambia in base al media screen 

    let var_padding 
    let var_immagini_galleria

    if (screen.width >= 768 && screen.width < 992 ){
        if (counter == 1 || counter == 3){
            if (counter%2 !== 0){
                color_dots(Math.ceil((counter-1)/2) , Math.ceil(counter/2))

            }
        } else if (last_index == 0){
            color_dots(last_index , counter)

        }
        var_padding = 4.8
        var_immagini_galleria = 5
    } else if(screen.width < 768){
        if (last_index !== 0){
            if (counter%2 !== 0){
                color_dots(Math.ceil((counter-1)/2) , Math.ceil(counter/2))

            }
        } else if (last_index == 0){
            color_dots(last_index , counter)

        }
        var_padding = 0
        var_immagini_galleria = 6
    }else if(screen.width >= 992){
        if (counter == 3){
            color_dots(Math.ceil((counter-1)/2)-1 , Math.ceil(counter/2)-1)


        } else if (last_index == 0){
            color_dots(last_index , counter)

        }
        var_padding = 5.6
        var_immagini_galleria = 4
    }

    /* trovo la dimensione dello scroll prendendo il width della prima immagine
    in galleria, siccome sono tutte uguali e il counter mi serve per sapere a che
    foto sto in galleria ed in base a quello vado avanti o torno indietro */

    let dimensione_scroll = document.getElementsByClassName('child-img')[0].width 

    if (counter < var_immagini_galleria){
        counter++
        document.getElementsByClassName('scroll-images')[0].scroll({
            top : 0,
            left : (dimensione_scroll + var_padding*2)*counter,
            behavior : "smooth"
        })
    }else{
        document.getElementsByClassName('scroll-images')[0].scroll({
            top : 0,
            left : 0,
            behavior : "smooth"
        })
        counter = 0
        last_index = 0

        if (var_immagini_galleria == 6){
            color_dots(3,0)
        }else if(var_immagini_galleria == 5){
            color_dots(2,0)
        }else if(var_immagini_galleria == 4){
            color_dots(1,0)
        }
    }



}

function scroll_gallery_dots(num_dot){

    let dimensione_scroll = document.getElementsByClassName('child-img')[0].width 
    let var_padding 

    console.log(last_index , num_dot-1)
    color_dots(last_index , num_dot-1)
/*     document.getElementsByClassName('fa-circle')[last_index].style.color = '#DADADA'
    document.getElementsByClassName('fa-circle')[num_dot-1].style.color = '#FF530A' */

    if (screen.width >= 768 && screen.width < 992 ){
        var_padding = 4.8
        if (num_dot == 1){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : 0,
                behavior : "smooth"
            })
            counter = 0
        } else if(num_dot == 2){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : (dimensione_scroll + var_padding*2)*3,
                behavior : "smooth"
            })
            counter = 3
        } else if(num_dot == 3){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : (dimensione_scroll + var_padding*2)*5,
                behavior : "smooth"
            })
            counter = 5           
        }


    } else if(screen.width < 768){
        var_padding = 0
        if (num_dot == 1){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : 0,
                behavior : "smooth"
            })
            counter = 0
        } else if(num_dot == 2){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : (dimensione_scroll + var_padding*2)*2,
                behavior : "smooth"
            })
            counter = 2
        } else if(num_dot == 3){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : (dimensione_scroll + var_padding*2)*4,
                behavior : "smooth"
            })
            counter = 4          
        } else if(num_dot == 4){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : (dimensione_scroll + var_padding*2)*6,
                behavior : "smooth"
            })
            counter = 6 
        }
    }else if(screen.width >= 992){
        var_padding = 5.6
        if (num_dot == 1){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : 0,
                behavior : "smooth"
            })
            counter = 0
        } else if(num_dot == 2){
            document.getElementsByClassName('scroll-images')[0].scroll({
                top : 0,
                left : (dimensione_scroll + var_padding*2)*4,
                behavior : "smooth"
            })
            counter = 3
        }
    }

    last_index = num_dot-1
}

function color_dots(input1 , input2){
    document.getElementsByClassName('fa-circle')[input1].style.color = '#DADADA'
    document.getElementsByClassName('fa-circle')[input2].style.color = '#FF530A'
}



scroll_gallery_dots(1) 


