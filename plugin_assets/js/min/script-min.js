jQuery.noConflict(),jQuery(document).ready(function($){function a(){var s=".casasync-gallery-thumbnails",n=$(s).find("a"),e=$(s).width(),o=window.casasyncOptionParams.thumbnails_ideal_width;if(e){var t=Math.min(Math.round(e/o),8)||1,i=e/t;$(n).each(function(a){$(this).attr("data-col",t)})}if("undefined"==typeof ticker){var c=$(window).width(),r=$(window).height();ticker=setInterval(function(){(e!=$(window).width()||height!=$(window).height())&&(c=$(window).width(),r=$(window).height(),a())},300)}}if(window.casasyncParams&&$.jStorage.set("casasyncParams",window.casasyncParams),$("#casasyncContactAnchor").click(function(a){return a.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).parent().offset().top-100},500),$(".casasync-contactform-form").parent().addClass("casasync-highlight"),$(".casasync-contactform-form").delay(500).find(' input[name="firstname"]').focus(),!1}),window.casasyncOptionParams&&1==window.casasyncOptionParams.featherlight&&$(".property-image-gallery").length&&$(".property-image-gallery").featherlightGallery(),window.casasyncOptionParams&&1==window.casasyncOptionParams.chosen){var s={".chosen-select":{width:"100%"}};for(var n in s)$(n).chosen(s[n])}if($(".casasync-basic-box:visible").length&&window.casasyncOptionParams&&"bootstrapv3"==window.casasyncOptionParams.load_css){var n=".casasync-basic-box";$(n).equalHeightColumns({speed:500})}var e=$.jStorage.get("casasyncParams",!1);e&&$(".casasync-single-pagination").length&&($(".casasync-single-archivelink").prop("href",e.archive_link),$.ajax({type:"GET",url:"",data:{ajax:"prevnext",p:e.p,query:e,post_type:"casasync_property"},success:function(a){"no"!==jQuery.parseJSON(a).nextlink?$(".casasync-single-next").prop("href",jQuery.parseJSON(a).nextlink):$(".casasync-single-next").addClass("disabled"),"no"!==jQuery.parseJSON(a).prevlink?$(".casasync-single-prev").prop("href",jQuery.parseJSON(a).prevlink):$(".casasync-single-prev").addClass("disabled"),$(".casasync-single-pagination").css("display","none").removeClass("hidden").show("fast"),$(".casasync-single").trigger("casasync-pagination-update")}})),window.casasyncOptionParams&&1==window.casasyncOptionParams.google_maps&&$(".casasync-map").length&&google&&$(".casasync-map").each(function(){var a=$(this);a.data("address")&&(geocoder=new google.maps.Geocoder,geocoder.geocode({address:a.data("address")},function(s,n){function e(){if(s[0])var n=s[0].geometry.location,e=s[0].geometry.bounds;else var n=null,e=null;var t={zoom:parseInt(window.casasyncOptionParams.google_maps_zoomlevel),mapTypeId:google.maps.MapTypeId.ROADMAP,center:n};a.show(),o=new google.maps.Map(document.getElementById("map-canvas"),t),e&&o.fitBounds(e);var i=new google.maps.Marker({map:o,position:n})}if(n==google.maps.GeocoderStatus.OK){var o;google.maps.event.addDomListener(window,"load",e)}}))}),$(".casasync-gallery-thumbnails").length&&window.casasyncOptionParams&&a(),window.casasyncOptionParams&&"bootstrapv2"==window.casasyncOptionParams.load_css&&window.casasyncOptionParams&&1==window.casasyncOptionParams.load_bootstrap_js&&$("#casasyncCarousel").carousel({interval:!1});var o=window.navigator.userAgent;(o.match(/iPad/i)||o.match(/iPhone/i))&&(n=".casasync_multiselect",$(n).removeAttr("multiple"),$(n).each(function(a){var s=$(this).find(":selected");if(0==s.length){var n=$(this).attr("data-placeholder");$(this).append('<option value="" selected disabled style="display:none;">'+n+"</option>")}}))});