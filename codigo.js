const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;


    scrollbarThumb.addEventListener("mousedown", (e) => {
        const startX = e.clientX;
        const thumbPosition = scrollbarThumb.offsetLeft;

        const handleMouseMove = (e) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }

        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });




    slideButtons.forEach(button => {
        button.addEventListener("click", () =>  {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });

    });

    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    }

    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition =(scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
    
}

window.addEventListener("load", initSlider);








// SLIDER VIDEO


const initSliderVideo = () => {
    const imageListVideo = document.querySelector(".slider-wrapper-video .image-list-video");
    const slideButtonsVideo = document.querySelectorAll(".slider-wrapper-video .slide-button-video");
    const sliderScrollbarVideo = document.querySelector(".container-video .slider-scrollbar-video");
    const scrollbarThumbVideo = sliderScrollbarVideo.querySelector(".scrollbar-thumb-video");
    const maxScrollLeftVideo = imageListVideo.scrollWidth - imageListVideo.clientWidth;


    scrollbarThumbVideo.addEventListener("mousedown", (e) => {
        const startXVideo = e.clientX;
        const thumbPositionVideo = scrollbarThumbVideo.offsetLeft;

        const handleMouseMoveVideo = (e) => {
            const deltaXVideo = e.clientX - startXVideo;
            const newThumbPositionVideo = thumbPositionVideo + deltaXVideo;
            const maxThumbPositionVideo = sliderScrollbarVideo.getBoundingClientRect().width - scrollbarThumbVideo.offsetWidth;

            const boundedPositionVideo = Math.max(0, Math.min(maxThumbPositionVideo, newThumbPositionVideo));
            const scrollPositionVideo = (boundedPositionVideo / maxThumbPositionVideo) * maxScrollLeftVideo;

            scrollbarThumbVideo.style.left = `${boundedPositionVideo}px`;
            imageListVideo.scrollLeft = scrollPositionVideo;
        }

        const handleMouseUpVideo = () => {
            document.removeEventListener("mousemove", handleMouseMoveVideo);
            document.removeEventListener("mouseup", handleMouseUpVideo);
        }

        document.addEventListener("mousemove", handleMouseMoveVideo);
        document.addEventListener("mouseup", handleMouseUpVideo);
    });




    slideButtonsVideo.forEach(button => {
        button.addEventListener("click", () =>  {
            const directionVideo = button.id === "prev-slide-video" ? -1 : 1;
            const scrollAmountVideo = imageListVideo.clientWidth * directionVideo;
            imageListVideo.scrollBy({ left: scrollAmountVideo, behavior: "smooth" });
        });

    });

    const handleSlideButtonsVideo = () => {
        slideButtonsVideo[0].style.display = imageListVideo.scrollLeft <= 0 ? "none" : "block";
        slideButtonsVideo[1].style.display = imageListVideo.scrollLeft >= maxScrollLeftVideo ? "none" : "block";
    }

    const updateScrollThumbPositionVideo = () => {
        const scrollPositionVideo = imageListVideo.scrollLeft;
        const thumbPositionVideo =(scrollPositionVideo / maxScrollLeftVideo) * (sliderScrollbarVideo.clientWidth - scrollbarThumbVideo.offsetWidth);
        scrollbarThumbVideo.style.left = `${thumbPositionVideo}px`;
    }

    imageListVideo.addEventListener("scroll", () => {
        handleSlideButtonsVideo();
        updateScrollThumbPositionVideo();
    });
    
}



window.addEventListener("load", initSliderVideo);




































