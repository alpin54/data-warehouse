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

    // init carousel more extra small
    if ($(window).width() > 576) {

      // --- check if itemLength > itemRun
      if (_itemLength > _itemRun) {
        // --- init carousel
        _selector.addClass('owl-carousel').owlCarousel({
          items: 1,
          autoWidth: true,
          dots: true,
          nav: true,
          navText: ["<i class='fi-arrow-right'></i>", "<i class='fi-arrow-right'></i>"],
          touchDrag: true,
          mouseDrag: false,
          dotsSpeed: 1000,
          dragEndSpeed: 800
        });
      } else {
        if (_selector.hasClass('owl-carousel')) {
          _selector.removeClass('owl-carousel');
        }
        _selector.addClass('hero-banner--single');
      }
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
