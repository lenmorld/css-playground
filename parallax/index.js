
const parallax = document.getElementById("parallax")

window.addEventListener("scroll", () => {
    // how far the user scrolled from the top
    // 0 is fully at the top (no scroll)
    const scrollYoffset = window.scrollY;
    // console.log({
    //     pageYOffset,
    //     scrollY, 
    //     offset,
    //     offsetSlower: offset * 0.7
    // })

    // if set to 1
    // set the background of this div to the current scroll
    // e.g. if not scrolled, background is at top
    // scroll by 5, background is at 5
    // i.e. it's fixed to the scroll
    // background follows scroll exactly
    // similar to background-attachment: fixed;

    // if set to < 1, e.g. 0.7 of scrollYoffset
    // background moves a little slower than scroll
    // if scroll is 5, image is (5*0.7) 3.5 

    // if more than 1, e.g. 1.5
    // background moves faster than scroll
    // if scroll is 5, image is already 10
    // which means there is 5px on the top unused
    // image moves the opposite direction

    // backgroundPositionY is null, not used when not set
    // they just go naturally with scroll

    // console.log({
    //     scrollYoffset,
    //     backgroundPositionY: parallax.style.backgroundPositionY
    // })
    parallax.style.backgroundPositionY = `${scrollYoffset * 0.7}px`
})