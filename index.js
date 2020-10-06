const cssstyler = ( options ) => {
    // we have to use class
    const blocks = document.querySelectorAll( '.cssstyler' );
    if ( options.blur === true ) {
        options.blur = '15px';
    }
    else {
        options.blur = '0px';
    }
    blocks.forEach( ( item ) => {
        item.style.boxShadow = `10px 10px ${options.blur} 1px rgba(0, 0, 0, 0.25)`;
        if ( options.padding === true ) {
            item.style.padding = "1.3em";
        }
    } );
};

module.exports.cssstyler = cssstyler;

//cssstyler({blur:true, padding:true})

