var PortletDraggable = function () {

    return {
        //main function to initiate the module
        init: function () {

            if (!jQuery().sortable) {
                return;
            }

            /*$("#sortable_portlets").sortable({
                connectWith: ".portlet",
                items: ".portlet", 
                opacity: 0.8,
                handle : '.portlet-title',
                coneHelperSize: true,
                placeholder: 'portlet-sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                cancel: ".portlet-sortable-empty, .portlet-fullscreen", // cancel dragging if portlet is in fullscreen mode
                revert: 250, // animation in milliseconds
                update: function(b, c) {
                    if (c.item.prev().hasClass("portlet-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }                    
                }
            });*/

             $("#sortable_portlets").sortable({
               connectWith: ".portlet",
                items: ".portlet", 
                opacity: 0.8,
                handle : '.portlet-title',
                placeholder: 'portlet-sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                revert: 250,
                cancel: ".portlet-sortable-empty, .portlet-fullscreen",
                scrollSensitivity: 60,
                appendTo: '#sortable_portlets',
                revert: 250, // animation in milliseconds
                update: function(b, c) {
                    if (c.item.prev().hasClass("portlet-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }                    
                }
                 
                 

                
                /*start: function(event, ui){
                    $('html').bind('mousemove', function(e) {
                      var $helper, $parent, $placeholder, top;
                      $placeholder = $('.ui-sortable-placeholder');
                      $parent = $placeholder.parent();
                      $parent.stop();
                      $helper = $('.ui-sortable-helper');
                      top = $helper.offset().top - $parent.position().top;
                      console.log($helper.offset().top - $parent.position().top);
                      console.log($parent.height());
                      if (top + 80 > $parent.height()) {
                        return $parent.animate({
                          scrollTop: $parent.scrollTop() + 360
                        }, 1000, 'linear');
                      } else if (top < 40) {
                        return $parent.animate({
                          scrollTop: $parent.scrollTop() - 360
                        }, 1000, 'linear');
                      }
                    });
                },
                stop : function(event, ui){
                    $('html').unbind();
                }*/
            });


            /*$("#sortable_portlets").sortable({
                connectWith: ".portlet",
                items: ".portlet", 
                opacity: 0.8,
                handle : '.portlet-title',
                coneHelperSize: true,
                placeholder: 'portlet-sortable-placeholder',
                forcePlaceholderSize: true,
                tolerance: "pointer",
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                helper: "clone",
                cancel: ".portlet-sortable-empty, .portlet-fullscreen", // cancel dragging if portlet is in fullscreen mode
                revert: 250, // animation in milliseconds
                update: function(b, c) {
                    if (c.item.prev().hasClass("portlet-sortable-empty")) {
                        c.item.prev().before(c.item);
                    }                    
                }
            });*/

            
            $(".sortableTopICon").sortable({ axis: 'x', scroll: false ,
                connectWith: ".sortableTopICon",
                items: ".sortChildren1", 
                opacity: 0.8,
                placeholder: 'ui-sortable-placeholder'
            });

            $(".SortableInfo").sortable({ axis: 'y', scroll: false ,
                connectWith: ".SortableInfo",
                items: ".SortableInfoItem", 
                opacity: 0.8,
                placeholder: 'ui-sortable-placeholder'
            });

            $(".RightsideBarIcon").sortable({ axis: 'y', scroll: false ,
                connectWith: ".RightsideBarIcon",
                items: ".RightsideBarIconItem", 
                opacity: 0.8,
                placeholder: 'ui-sortable-placeholder'
            });

            $("#sideInfoSetting").draggable({
                handle: ".modal-header",
               /* coneHelperSize: true,
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                helper: "clone",*/
                scrollSensitivity: 60

            });

            $("#AddNewWidgetModal").draggable({
                handle: ".modal-header",
                /*coneHelperSize: true,
                helper: "clone",
                tolerance: "pointer",
                forcePlaceholderSize: !0,
                helper: "clone",*/
                scrollSensitivity: 60
            });

            $("#responsive1").draggable({
                handle: ".modal-header",
                /*helper: "clone",
                tolerance: "pointer",*/
                /*forcePlaceholderSize: !0,
                helper: "clone",*/
                scrollSensitivity: 60
            });

            

        }
    };
}();

jQuery(document).ready(function() {
    PortletDraggable.init();
});