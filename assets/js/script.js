let counter = 0

function scroll_gallery(){

    // mi segno il padding grazie a screen.width siccome nel css cambia in base al media screen 

    let var_padding 

    if (screen.width >= 768 && screen.width < 992 ){
        console.log(1)
        var_padding = 16
    } else if(screen.width < 768){
        var_padding = 0
    }else if(screen.width >= 992){
        var_padding = 5.6
    }

    /* trovo la dimensione dello scroll prendendo il width della prima immagine
    in galleria, siccome sono tutte uguali e il counter mi serve per sapere a che
    foto sto in galleria ed in base a quello vado avanti o torno indietro */

    let dimensione_scroll = document.getElementsByClassName('child-img')[0].width 

    if (counter < 5){
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
    }


}