// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.dom');
goog.require('goog.object');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('routes.events');
goog.require('routes.components.contact');
goog.require('routes.components.faq');
goog.require('routes.components.footer');
goog.require('routes.components.product');
goog.require('routes.components.steps');
goog.require('routes.components.navigation');
goog.require('routes.components.home');
routes.core.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.core.pc_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
routes.core.layout = (function routes$core$layout(ref){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Grid,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$stackable,true,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$light_DASH_blue], null),(cljs.core.truth_(cljs.core.deref(routes.core.pc_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.navigation.wide_menu,ref], null):null),((cljs.core.not(cljs.core.deref(routes.core.pc_QMARK_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.home.mobile_home], null):null),(cljs.core.truth_(cljs.core.deref(routes.core.pc_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.home.home], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.steps.steps], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.product.products,cljs.core.deref(routes.core.pc_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.faq.faq,cljs.core.deref(routes.core.pc_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.contact.contact_form,cljs.core.deref(routes.core.pc_QMARK_)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.footer.footer], null)], null)], null);
});
});
routes.core.mobile_layout = (function routes$core$mobile_layout(ref){
var show_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (show_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Sticky,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$context,cljs.core.deref(ref)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$class_DASH_name,"menu-color",cljs.core.cst$kw$clearing,true], null),(cljs.core.truth_(cljs.core.deref(show_QMARK_))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$floated,cljs.core.cst$kw$left,cljs.core.cst$kw$on_DASH_click,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
});})(show_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"x"], null)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Button,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$floated,cljs.core.cst$kw$left,cljs.core.cst$kw$on_DASH_click,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,true);
});})(show_QMARK_))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"content"], null)], null)], null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Header,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$as,cljs.core.cst$kw$h1,cljs.core.cst$kw$floated,cljs.core.cst$kw$right], null),"Bus Routes"], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Sidebar.Pushable,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,routes.core.global$module$cljsjs$semantic_ui_react.Segment], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.navigation.nav_menu,routes.core.global$module$cljsjs$semantic_ui_react.Sidebar,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$animation,cljs.core.cst$kw$as,cljs.core.cst$kw$width,cljs.core.cst$kw$vertical,cljs.core.cst$kw$on_DASH_hide,cljs.core.cst$kw$icon,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$visible,cljs.core.cst$kw$inverted],["slide along",routes.core.global$module$cljsjs$semantic_ui_react.Menu,"thin",true,((function (show_QMARK_){
return (function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
});})(show_QMARK_))
,"labeled","menu-color",cljs.core.deref(show_QMARK_),true])], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Sidebar.Pusher,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dimmed,cljs.core.deref(show_QMARK_)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.core.layout,ref], null)], null)], null)], null);
});
;})(show_QMARK_))
});
routes.core.main = (function routes$core$main(){
var ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (ref){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Ref,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$inner_DASH_ref,((function (ref){
return (function (p1__10060_SHARP_){
return cljs.core.reset_BANG_(ref,p1__10060_SHARP_);
});})(ref))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Responsive,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$fire_DASH_on_DASH_mount,true,cljs.core.cst$kw$on_DASH_update,((function (ref){
return (function (event,view_obj){
return cljs.core.reset_BANG_(routes.core.pc_QMARK_,((function (){var G__10061 = view_obj;
var G__10062 = ["width"];
return goog.object.getValueByKeys(G__10061,G__10062);
})() >= (function (){var G__10063 = routes.core.global$module$cljsjs$semantic_ui_react.Responsive;
var G__10064 = ["onlyMobile","maxWidth"];
return goog.object.getValueByKeys(G__10063,G__10064);
})()));
});})(ref))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.core.global$module$cljsjs$semantic_ui_react.Visibility,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_update,((function (ref){
return (function (e,calc){
return routes.components.navigation.handle_nav_scroll(clojure.set.rename_keys(cljs.core.select_keys(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic((function (){var G__10065 = calc;
var G__10066 = ["calculations"];
return goog.object.getValueByKeys(G__10065,G__10066);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,true], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$percentagePassed,cljs.core.cst$kw$direction], null)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$percentagePassed,cljs.core.cst$kw$percentage], null)),cljs.core.deref(routes.core.pc_QMARK_));
});})(ref))
], null),(cljs.core.truth_(cljs.core.deref(routes.core.pc_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.core.layout,ref], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.core.mobile_layout,ref], null))], null)], null)], null);
});
;})(ref))
});
routes.core.debug_QMARK_ = goog.DEBUG;
routes.core.dev_setup = (function routes$core$dev_setup(){
if(routes.core.debug_QMARK_){
cljs.core.enable_console_print_BANG_();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
routes.core.mount_app_element = (function routes$core$mount_app_element(){
var temp__5735__auto__ = goog.dom.getElement("app");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.core.main], null),el);
} else {
return null;
}
});
routes.core.on_reload = (function routes$core$on_reload(){
return routes.core.mount_app_element();
});
routes.core.init = (function routes$core$init(){
var G__10067_10068 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize_DASH_db], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__10067_10068) : re_frame.core.dispatch_sync.call(null,G__10067_10068));

routes.core.dev_setup();

return routes.core.mount_app_element();
});
goog.exportSymbol('routes.core.init', routes.core.init);
