!function(a,t,e,n){var r=function(){a("a.page-numbers").on("click",(function(t){if(a(this).parents(".aux-widget-recent-products").length){t.preventDefault();var n=a(this).parents(".elementor-widget-container"),r=n.find(".aux-recent-products-wrapper").data("widget-data"),o=a(this).data("paged");n.find(".aux-widget-recent-products").addClass("loading"),n.find(".aux-isotope-animated .aux-items-loading").removeClass("aux-loading-hide"),a.ajax({url:auxin.ajax_url,type:"GET",data:{action:"aux_the_recent_products",data:r,paged:o,auxinNonce:auxin.nonce}}).done((function(t){t&&(n.empty(),n.append(t),a(e).trigger("auxin_the_recent_products_widget_updated"))}))}}))};a(e).ready((function(){a(e).on("click",".aux-remove-cart-content",(function(t){t.preventDefault();var n=a(this),r=a(this).data("product_id"),o=a(this).data("cart_item_key"),i=a(this).data("verify_nonce"),d=a(this).closest(".aux-cart-wrapper").addClass("aux-cart-remove-in-progress");"undefined"==typeof auxin_cart_options&&(auxin_cart_options=""),a.ajax({type:"POST",dataType:"json",url:auxin.ajax_url,data:{action:"auxels_remove_from_cart",product_id:r,cart_item_key:o,verify_nonce:i,args:auxin_cart_options},success:function(t){a(".woocommerce-message, .woocommerce-error").remove(),t.success?(a(".aux-hidden-blocks").append(t.data.notif),0===parseInt(t.data.total)?(a(".aux-card-dropdown").html(t.data.empty),a(".aux-cart-contents").find("span").remove()):(a(".aux-card-item").filter((function(){return a(this).data("cart_item_key")==o})).remove(),a(".aux-cart-contents").find("span").text(t.data.count)),a(".aux-cart-subtotal").each((function(){a(this).find(".woocommerce-Price-amount").html(t.data.total)})),d.removeClass("aux-cart-remove-in-progress"),a(e.body).trigger("removed_from_cart",[t.data.fragments,t.data.cart_hash,n,t.data.items])):a(".aux-hidden-blocks").append(t.data),a("#offcart .aux-cart-wrapper .aux-card-dropdown").removeClass("aux-phone-off")}})})),a(e).on("click",".aux-ajax-add-to-cart",(function(t){var n=a(this);if("simple"===a(this).data("product-type")){n.removeClass("added"),n.addClass("loading"),"undefined"==typeof auxin_cart_options&&(auxin_cart_options=""),t.preventDefault();var r=a(this).data("product_id"),o=a(this).data("quantity"),i=a(this).data("verify_nonce"),d=a(".aux-cart-wrapper"),s=!!d.hasClass("aux-basket-animation");d.trigger("AuxCartInProgress"),a(this).parents(".aux-shop-quicklook-modal")&&(o=a(this).parents(".aux-shop-quicklook-modal").find(".quantity input").val());var c={};a.each(n.data(),(function(a,t){c[a]=t})),a.each(n[0].dataset,(function(a,t){c[a]=t})),a(e.body).trigger("adding_to_cart",[n,c]),a.ajax({type:"POST",dataType:"json",url:auxin.ajax_url,data:{action:"auxels_add_to_cart",args:auxin_cart_options,product_id:r,quantity:o,verify_nonce:i},success:function(t){a(".woocommerce-message, .woocommerce-error").remove(),t.success?(a(".aux-hidden-blocks").append(t.data.notif),setTimeout((function(){s?(d.find(".aux-card-dropdown").html(t.data.items),d.find(".aux-shopping-basket").html(t.data.total),d.trigger("AuxCartUpdated"),a(e.body).trigger("added_to_cart",[t.data.fragments,t.data.cart_hash,n])):(d.find(".aux-card-dropdown").html(t.data.items),d.find(".aux-shopping-basket").html(t.data.total),d.trigger("AuxCartUpdated"),a(e.body).trigger("added_to_cart",[t.data.fragments,t.data.cart_hash,n,t.data.items])),a("#offcart .aux-cart-wrapper .aux-card-dropdown").removeClass("aux-phone-off")}),150)):a(".aux-hidden-blocks").append(t.data)}})}})),a(e.body).on("wc_fragments_refreshed",(function(){var t=a(".aux-cart-wrapper");t.hasClass("aux-basket-animation"),"undefined"==typeof auxin_cart_options&&(auxin_cart_options=""),a.ajax({type:"POST",dataType:"json",url:auxin.ajax_url,data:{action:"auxels_get_refreshed_fragments",args:auxin_cart_options},success:function(e){a(".woocommerce-message, .woocommerce-error").remove(),e.success?setTimeout((function(){t.find(".aux-card-dropdown").html(e.data.items),t.find(".aux-shopping-basket").html(e.data.total),t.trigger("AuxCartUpdated")}),150):a(".aux-hidden-blocks").append(e.data)}})})),r(),a(e).on("auxin_the_recent_products_widget_updated",(function(){r()})),a(".aux-select-element").each((function(){var t=a(this);"click"==t.data("action")?t.find(".current").on("click",(function(){a(this).siblings(".list").toggleClass("show")})):t.hover((function(){t.find(".list").addClass("show")}),(function(){t.find(".list").removeClass("show")})),t.find(".option").on("click",(function(){var e=a(this).html();t.find(".current .selected").html(e),t.find(".list").toggleClass("show")})),a(e).on("click",(function(e){a(e.target).parents(".aux-select-element").length||t.find(".list").removeClass("show")}))}))})),a.fn.AuxinCartAnimationHandler=function(){$headerCartWrapper=a(this).find(".aux-cart-wrapper"),$headerCartWrapper.trigger("AuxCartProgressAnimationDone"),$headerCartWrapper.hasClass("aux-basket-animation")&&($headerCartWrapper.on("AuxCartInProgress",(function(a){$headerCartWrapper.addClass("aux-cart-in-progress")})),$headerCartWrapper.on("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",(function(a){"FillBasket"===a.originalEvent.animationName&&($headerCartWrapper.removeClass("aux-cart-in-progress"),$headerCartWrapper.trigger("AuxCartProgressAnimationDone"))})),$headerCartWrapper.on("AuxCartUpdated",(function(a){$headerCartWrapper.addClass("aux-cart-updated-animation")})))},a("body").AuxinCartAnimationHandler(),a(e.body).on("wc_cart_emptied",(function(){a(".aux-shopping-basket .aux-cart-contents span").html("0")}))}(jQuery,window,document);