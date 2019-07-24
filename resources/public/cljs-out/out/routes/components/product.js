// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.product');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
routes.components.product.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.product.items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Admin Panel",cljs.core.cst$kw$desc,"You have full control over the flow of information in the system.",cljs.core.cst$kw$img,"img/admin.jpg",cljs.core.cst$kw$icon,"desktop"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Client Application",cljs.core.cst$kw$desc,"Your clients can enjoy perks of your servies more fully.",cljs.core.cst$kw$img,"img/client.jpg",cljs.core.cst$kw$icon,"mobile alternate"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Future feat",cljs.core.cst$kw$desc,"Future Feat",cljs.core.cst$kw$img,"img/placeholder.png",cljs.core.cst$kw$icon,"question circle outline"], null),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$title,"Future Feat",cljs.core.cst$kw$desc,"Future Feat",cljs.core.cst$kw$img,"img/placeholder.png",cljs.core.cst$kw$icon,"question circle outline"], null)], null);
routes.components.product.product_item = (function routes$components$product$product_item(p__13515){
var map__13516 = p__13515;
var map__13516__$1 = (((((!((map__13516 == null))))?(((((map__13516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13516):map__13516);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13516__$1,cljs.core.cst$kw$title);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13516__$1,cljs.core.cst$kw$desc);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13516__$1,cljs.core.cst$kw$img);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13516__$1,cljs.core.cst$kw$icon);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,true,cljs.core.cst$kw$class_DASH_name,"transparent-bg no-border"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$stackable,true,cljs.core.cst$kw$columns,(2)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$middle], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Header,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,cljs.core.cst$kw$h1,cljs.core.cst$kw$icon,cljs.core.cst$kw$icon,cljs.core.cst$kw$inverted,true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,icon], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h4,desc], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,img,cljs.core.cst$kw$rounded,true,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$img_DASH_shadow], null)], null)], null)], null)], null)], null);
});
routes.components.product.products = (function routes$components$product$products(){
var state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$admin);
var index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
return ((function (state,index){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"what"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_name,"no-border segment-bg",cljs.core.cst$kw$padded,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.product.product_item,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes.components.product.items,cljs.core.deref(index))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$pointing,true,cljs.core.cst$kw$secondary,true,cljs.core.cst$kw$fluid,true,cljs.core.cst$kw$widths,(4),cljs.core.cst$kw$size,cljs.core.cst$kw$massive], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$admin,cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$admin),cljs.core.cst$kw$on_DASH_click,((function (state,index){
return (function (){
cljs.core.reset_BANG_(state,cljs.core.cst$kw$admin);

return cljs.core.reset_BANG_(index,(0));
});})(state,index))
], null),"Admin panel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$client),cljs.core.cst$kw$on_DASH_click,((function (state,index){
return (function (){
cljs.core.reset_BANG_(state,cljs.core.cst$kw$client);

return cljs.core.reset_BANG_(index,(1));
});})(state,index))
], null),"Client app"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$f1),cljs.core.cst$kw$on_DASH_click,((function (state,index){
return (function (){
cljs.core.reset_BANG_(state,cljs.core.cst$kw$f1);

return cljs.core.reset_BANG_(index,(2));
});})(state,index))
], null),"Future feature"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),cljs.core.cst$kw$f2),cljs.core.cst$kw$on_DASH_click,((function (state,index){
return (function (){
cljs.core.reset_BANG_(state,cljs.core.cst$kw$f2);

return cljs.core.reset_BANG_(index,(3));
});})(state,index))
], null),"Future feature"], null)], null)], null)], null)], null)], null);
});
;})(state,index))
});
