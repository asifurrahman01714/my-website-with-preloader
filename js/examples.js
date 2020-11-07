/* Examples */
(function($) {
  /*
   * Example 1:
   *
   * - no animation
   * - custom gradient
   *
   * By the way - you may specify more than 2 colors for the gradient
   */
  // $('.first.circle').circleProgress({
  //   value: .9,
  // }).on('circle-animation-progress', function(event, progress) {
  //   $(this).find('strong').html(Math.round(95 * progress) + '<i>%</i>');
  // });

  var c1 = $('.first.circle');

  c1.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.9,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(86 * progress) + '<i>%</i>');
  });


  setTimeout(function() { c1.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c1.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c1.circleProgress('value', 0.7); }, 2100);
  
  /*
   * Example 2:
   *
   * - default gradient
   * - listening to `circle-animation-progress` event and display the animation progress: from 0 to 100%
   */
  // $('.second.circle').circleProgress({
  //   value: .8,
  // }).on('circle-animation-progress', function(event, progress) {
  //   $(this).find('strong').html(Math.round(88 * progress) + '<i>%</i>');
  // });


  var c2 = $('.second.circle');

  c2.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.8,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  });

  setTimeout(function() { c2.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c2.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c2.circleProgress('value', 0.63); }, 2100);

  /*
   * Example 3:
   *
   * - very custom gradient
   * - listening to `circle-animation-progress` event and display the dynamic change of the value: from 0 to 0.8
   */
  // $('.third.circle').circleProgress({
  //   value: .7,
  // }).on('circle-animation-progress', function(event, progress) {
  //   $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  // });

  var c3 = $('.third.circle');

  c3.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.7,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
  });

  setTimeout(function() { c3.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c3.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c3.circleProgress('value', 0.5); }, 2100);
  /*
   * Example 4:
   *
   * - solid color fill
   * - custom start angle
   * - custom line cap
   * - dynamic value set
   */
  var c4 = $('.forth.circle');

  c4.circleProgress({
    startAngle: -Math.PI / 4 * 3,
    value: 0.5,
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
  });

  // Let's emulate dynamic value update
  setTimeout(function() { c4.circleProgress('value', 0.7); }, 1000);
  setTimeout(function() { c4.circleProgress('value', 1.0); }, 1100);
  setTimeout(function() { c4.circleProgress('value', 0.4); }, 2100);

  /*
   * Example 5:
   *
   * - image fill; image should be squared; it will be stretched to SxS size, where S - size of the widget
   * - fallback color fill (when image is not loaded)
   * - custom widget size (default is 100px)
   * - custom circle thickness (default is 1/14 of the size)
   * - reverse drawing mode
   * - custom animation start value
   * - usage of "data-" attributes
   */
  $('.fifth.circle').circleProgress({
    value: 0.7
    // all other config options were taken from "data-" attributes
    // options passed in config object have higher priority than "data-" attributes
    // "data-" attributes are taken into account only on init (not on update/redraw)
    // "data-fill" (and other object options) should be in valid JSON format
  });
})(jQuery);
