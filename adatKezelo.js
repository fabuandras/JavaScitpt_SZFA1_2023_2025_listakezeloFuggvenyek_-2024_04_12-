export function rendez(lista, kulcs, rIrany) {
    /*  rendez(lista) -> rlista - megrendezi a listát az adott paraméter szerint (név (kulcs) szerint rendezünk), 
    a megrendezett listát visszaadja    */

    const rlist = lista.sort(function(e1, e2) {
        // a returnbe negatív vagy pozitív érték kell,
        // a nev szöveges változó, ezért < > értelmezhető
        // ezért kell egy elágazás
        return e1[kulcs]<e2[kulcs]?-1*rIrany:1*rIrany
    })

    return rlist

    /* szorgalmi:
    
    legyen egy függvény, az ékezetes karaktereket cseréljük ki nem ékezetesre és utána rendezzük.
    replaceAll()    (5 líra)    */
}

export function szures(lista, keresoSzoveg) {
    /*  szures(lista, keresoSzoveg) -> szurtLista - akkor fog lefutni,
    ha a szűrőmezőben változás történik (keyup) - a listában a név mezőben keres egyezéseket,
    és szűri a listát ez alapján - filter   */

    const szLISTA = lista.filter(function(ember) {
        return ember.nev.includes(keresoSzoveg);
    });
    return szLISTA
}