// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.navigation');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
routes.components.navigation.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.navigation.active_item = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$home);
routes.components.navigation.handle_nav_scroll = (function routes$components$navigation$handle_nav_scroll(p__9807,pc_QMARK_){
var map__9808 = p__9807;
var map__9808__$1 = (((((!((map__9808 == null))))?(((((map__9808.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9808.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__9808):map__9808);
var percentage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9808__$1,cljs.core.cst$kw$percentage);
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9808__$1,cljs.core.cst$kw$direction);
if(cljs.core.truth_((function (){var and__4120__auto__ = pc_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"down");
} else {
return and__4120__auto__;
}
})())){
if((((percentage > 0.16)) && ((percentage < 0.34)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$how);
} else {
if((((percentage > 0.34)) && ((percentage < 0.52)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$what);
} else {
if((((percentage > 0.52)) && ((percentage < 0.68)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$faq);
} else {
if((percentage > 0.72)){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$contact);
} else {
return null;

}
}
}
}
} else {
if(cljs.core.truth_((function (){var and__4120__auto__ = pc_QMARK_;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"up");
} else {
return and__4120__auto__;
}
})())){
if((percentage < 0.04)){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$home);
} else {
if((((percentage > 0.14)) && ((percentage < 0.24)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$how);
} else {
if((((percentage > 0.24)) && ((percentage < 0.4)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$what);
} else {
if((((percentage > 0.4)) && ((percentage < 0.57)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$faq);
} else {
if((percentage > 0.68)){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$contact);
} else {
return null;

}
}
}
}
}
} else {
if(((cljs.core.not(pc_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"down")))){
if((((percentage > 0.16)) && ((percentage < 0.34)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$how);
} else {
if((((percentage > 0.34)) && ((percentage < 0.52)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$what);
} else {
if((((percentage > 0.52)) && ((percentage < 0.68)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$faq);
} else {
if((percentage > 0.72)){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$contact);
} else {
return null;

}
}
}
}
} else {
if(((cljs.core.not(pc_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"up")))){
if((percentage < 0.14)){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$home);
} else {
if((((percentage > 0.14)) && ((percentage < 0.4)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$how);
} else {
if((((percentage > 0.41)) && ((percentage < 0.54)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$what);
} else {
if((((percentage > 0.55)) && ((percentage < 0.69)))){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$faq);
} else {
if((percentage > 0.78)){
return cljs.core.reset_BANG_(routes.components.navigation.active_item,cljs.core.cst$kw$contact);
} else {
return null;

}
}
}
}
}
} else {
return null;
}
}
}
}
});
routes.components.navigation.nav_menu = (function routes$components$navigation$nav_menu(base_component,options){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,base_component,options,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,"a",cljs.core.cst$kw$href,"#home",cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(routes.components.navigation.active_item),cljs.core.cst$kw$home)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"home"], null)], null),"Home"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,"a",cljs.core.cst$kw$href,"#how",cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(routes.components.navigation.active_item),cljs.core.cst$kw$how)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"clone "], null)], null),"How it works"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,"a",cljs.core.cst$kw$href,"#what",cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(routes.components.navigation.active_item),cljs.core.cst$kw$what)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"industry"], null)], null),"What we offer"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,"a",cljs.core.cst$kw$href,"#faq",cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(routes.components.navigation.active_item),cljs.core.cst$kw$faq)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"question"], null)], null),"FAQ"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$as,"a",cljs.core.cst$kw$href,"#contact",cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(routes.components.navigation.active_item),cljs.core.cst$kw$contact)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"envelope"], null)], null),"Contact Us"], null)], null);
});
routes.components.navigation.wide_menu = (function routes$components$navigation$wide_menu(ref){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,cljs.core.cst$kw$nav_DASH_bar,cljs.core.cst$kw$class_DASH_name,"no-padding",cljs.core.cst$kw$only,"computer tablet"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"home"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Sticky,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$context,cljs.core.deref(ref),cljs.core.cst$kw$class_DASH_name,"transparent-bg"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$class_DASH_name,"menu-color"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$pointing,true,cljs.core.cst$kw$secondary,true,cljs.core.cst$kw$stackable,true,cljs.core.cst$kw$size,cljs.core.cst$kw$massive], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$left], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Bus Routes"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.navigation.nav_menu,routes.components.navigation.global$module$cljsjs$semantic_ui_react.Menu.Menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$position,cljs.core.cst$kw$right], null)], null)], null)], null)], null)], null)], null);
});
});
