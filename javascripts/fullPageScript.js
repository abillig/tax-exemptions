$(document).ready(function() {
      $('#fullpage').fullpage({
          //Navigation
          menu: '#menu',
          lockAnchors: false,
          anchors:['one', 'two', 'three', 'four', 'secondSection', 'idas', 'fourthSection', 'fifthSection'],
          navigation: false,
          navigationPosition: 'right',
          // navigationTooltips: ['firstSlide', 'secondSlide'],
          showActiveTooltip: false,
          slidesNavigation: true,
          slidesNavPosition: 'bottom',
          responsive: true,

          //Scrolling
          css3: true,
          scrollingSpeed: 700,
          autoScrolling: true,
          fitToSection: true,
          fitToSectionDelay: 1000,
          // scrollBar: false,
          easing: 'easeInOutCubic',
          easingcss3: 'ease',
          loopBottom: false,
          loopTop: false,
          loopHorizontal: true,
          continuousVertical: false,
          continuousHorizontal: false,
          scrollHorizontally: true,
          interlockedSlides: false,
          resetSliders: false,
          fadingEffect: false,
          // normalScrollElements: '#element1, .element2',
          scrollOverflow: false,
          scrollOverflowOptions: null,
          touchSensitivity: 15,
          normalScrollElementTouchThreshold: 5,
          bigSectionsDestination: null,

          //Accessibility
          keyboardScrolling: true,
          animateAnchor: true,
          recordHistory: true,

          //Design
          controlArrows: true,
          verticalCentered: true,
          sectionsColor : ['#000', '#000', '#000', '#000', '#2a2a2a', '#000', '#fff', '#000'],
          // paddingTop: '3em',
          // paddingBottom: '10px',
          // fixedElements: '#header, .footer',
          // responsiveWidth: 0,
          // responsiveHeight: 0,
          // responsiveSlides: false,

          //Custom selectors
          sectionSelector: '.section',
          slideSelector: '.slide',

          //events
          onLeave: function(index, nextIndex, direction){},
          afterLoad: function(anchorLink, index){},
          afterRender: function(){},
          afterResize: function(){},
          afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){
            console.log(anchorLinke)
            if(anchorLink == "idas" && index == 6 && slideIndex == 3){
              debugger;
              // $('.fp-controlArrow.fp-prev').css("zoom", "50%")
              // $('.fp-controlArrow.fp-next').css("zoom", "50%")
              idas_chart()
            }
          },
          onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
            debugger;
            //this ensures that odomoters start movement when slide is loaded, not when
            //document is loaded.
            // exemption_pie();
            // if(anchorLink == "idas" && index == 6 && slideIndex == 3){
              // $('.fp-controlArrow.fp-prev').css("zoom", "100%")
              // $('.fp-controlArrow.fp-next').css("zoom", "100%")
            //   idas_chart()
            // }

            if (slideIndex === 3){
            var el = document.querySelector('#first_dollar_figure');
              od = new Odometer({
                el: el,
                value: 10000,
              });
              od.update(83000)
              // or
              el.innerHTML = 83000
              }
            if (slideIndex === 5){
            var el = document.querySelector('#second_dollar_figure');
              od = new Odometer({
                el: el,
                value: 99000,
              });
              od.update(43000)
              // or
              el.innerHTML = 43000
              }
          }
      });
      $(function(){exemption_pie()})
});

$.fn.fullpage.setAllowScrolling(false);
