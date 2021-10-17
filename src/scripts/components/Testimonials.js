/* ------------------------------------------------------------------------------
@name: Testimonials
@description: Testimonials
--------------------------------------------------------------------------------- */

const Testimonials = (() => {

  // handleRunCarousel
  const handleRunCarousel = () => {
    const _selector =  $('.js-testimonials');
    const _itemLength = $('.js-testimonials .testimonials__item').length;
    const _itemRun = 1;

    // destroy carousel
    if (_selector.hasClass('owl-carousel')) {
      _selector.owlCarousel('destroy').removeClass('owl-carousel');
    }

    // --- check if itemLength > itemRun
    if (_itemLength > _itemRun) {
      // --- init carousel
      _selector.addClass('owl-carousel').owlCarousel({
        items: 1,
        margin: 24,
        autoHeight: true,
        autoWidth: true,
        dots: true,
        nav: true,
        touchDrag: true,
        mouseDrag: true,
        dotsSpeed: 1000,
        navSpeed: 1000,
        dragEndSpeed: 800
      });
    }
  }

  // init
  const init = () => {
    handleRunCarousel();
  }

  return {
    init
  }

})();

export default Testimonials;
