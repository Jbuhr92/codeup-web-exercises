jQuery("h3").click((event)=> {
    $(event.currentTarget).next().slideToggle(500);
})