/* ------------------------------------------------------------------------------
@name: Features
@description: Features
--------------------------------------------------------------------------------- */

// --- Features
const Features = (() => {

  // --- handleSet
  const handleSet = () => {
    handleCheckHeight();
  }

  // --- handleCheckHeight
  const handleCheckHeight = () => {
    let _height = 0;
    handleResetHeight();
    $('.js-features-card').each((i, e) => {
      if (_height < $(e).find('.features__txt__box').height()) {
        _height = $(e).find('.features__txt__box').height();
      }
    });
    $('.features__txt__box').height(_height);
  }

  // --- handleResetHeight
  const handleResetHeight = () => {
    let _attr = $('.features__txt__box').attr('style');
    // For some browsers, `attr` is undefined; for others,
    // `attr` is false.  Check for both.
    if (typeof _attr !== 'undefined' && _attr !== false) {
      $('.features__txt__box').removeAttr('style');
    }
  }

  // --- init
  const init = () => {
    handleSet();

  }

  // --- return
  return {
    init,
    checkHeight: handleSet
  }

})();

export default Features;
