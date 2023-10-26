/*! 2.3.1
 *  All required plugins 
 *  http://averta.net/phlox/
 */
/*! 
 * 
 * ================== public/assets/js/src/init.general.js =================== 
 **/
(function($){var filterList=$(".aux-widget-recent-portfolios .aux-ajax-filters li[data-filter]");filterList.on("click",(function(e){e.preventDefault();var $this=$(this),$container=$this.parents(".aux-widget-recent-portfolios").find(".aux-ajax-view"),data={action:"aux_recent_portfolio_filter_content",term:$this.data("category-id"),taxonomy:$container.data("taxonomy"),num:$container.data("num"),order:$container.data("order"),orderby:$container.data("orderby"),n:$container.data("n"),args:eval($container.data("element-id")+"AjaxConfig")};$container.AuxIsotope("removeAll"),$container.AuxIsotope("showLoading"),$.post(auxpfo.ajax_url,data,(function(t){if(t){var a=$(t.data);setTimeout((function(){a.each((function(t,a){$item=$(a),$item.hasClass("aux-iso-item")&&($container.AuxIsotope("insert",$item),$item.AuxTwoWayHover(),$item.photoSwipe({target:".aux-lightbox-btn",bgOpacity:.97,shareEl:!0}))}))}),1e3)}}))}))})(jQuery);