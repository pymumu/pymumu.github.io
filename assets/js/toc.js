  $(function(){    
    var toc = getTOC($('.post-display .left'));
    if (toc != null) {
      $('.bs-sidebar').append(toc);
      
      //sidebar affix, this offset is for sidebar position recognition
      setTimeout(function () {
          var $sideBar = $('.bs-sidebar')
          $sideBar.affix({
              offset: {                
                  top: function () {                    
                      var offsetTop      = $sideBar.offset().top;
                      var sideBarMargin  = parseInt($sideBar.children(0).css('margin-top'), 10);
                      sideBarMargin     += parseInt($('#page-content').css('margin-top'), 10);
                      return 0;//(this.top = offsetTop - sideBarMargin);
                  },
                  bottom: function(){
                    var sideBarMargin  = parseInt($sideBar.children(0).css('margin-bottom'), 10);
                    return (this.bottom = footHeight + sideBarMargin);
                  }
              }
          });
      },100);
      
      //sidebar scroll spy
      $('body').scrollspy({
        target: '.sidebar',
        offset: 10  //make sure to spy the element when scrolled to
      }); 
    }
    else{
      $('.post-display .left').removeClass('col-md-9');
      $('.post-display').removeClass('row-fluid');
      $('.post-display .right').remove();
    }
  });
  
  //生成目录
  function getTOC($content) {    
    var $toc = $('<ul class="nav level-0" >').addClass("nav bs-sidenav");

    var base_level = 1;
    while ($content.find('h' + base_level).length < 1 && base_level < 7) base_level += 1;
    if (base_level == 7) return null;
    
    $content.find(':header').each(function (i) {
      var $this = $(this);
      $this.attr('id', i);
      
      var level = parseInt(this.nodeName.substr(1));
      var offset = level - base_level;
      
      var li = new $('<li/>')
          .append('<a href="#' + i + '" class="animate">' + $this.text() + '</a>')
          .append($('<ul class="nav level-'+(offset+1)+'"/>'));
      
      $('<div>').append($toc).find('ul.level-'+offset+':last').append(li);
    });
    // remove empty ul
    $toc.find('ul').not(':parent').remove();
    return $toc;
  }
