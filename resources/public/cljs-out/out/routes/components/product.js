// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.product');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
routes.components.product.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.product.active_screen = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen,cljs.core.cst$kw$producer], null));
routes.components.product.screen_index = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
routes.components.product.items = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Producer App",cljs.core.cst$kw$desc,"This application is made to assist the drivers and collect data.",cljs.core.cst$kw$img,"img/producer.jpg",cljs.core.cst$kw$icon,"bus",cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Collects data for services","Shows speed limits warnings","Notifications about traffic","Displays route for drivers"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Admin Panel",cljs.core.cst$kw$desc,"You have full control over the flow of information in the system.",cljs.core.cst$kw$img,"img/admin.jpg",cljs.core.cst$kw$icon,"desktop",cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Monitoring of buses in real-time","Easily access information using advanced search","Shows live stats of active buses","Shows details about the drivers"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Client App",cljs.core.cst$kw$desc,"Your clients can enjoy perks of your servies more fully.",cljs.core.cst$kw$img,"img/client.jpg",cljs.core.cst$kw$icon,"mobile alternate",cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Info for desired bus in real-time","Shows routes for buses with info about previous, next and future stops","Best route for desired destination","Buy tickets online"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$title,"Data Overview",cljs.core.cst$kw$desc,"Have unique insight for your business based on data.",cljs.core.cst$kw$img,"img/expense.png",cljs.core.cst$kw$icon,"chart area",cljs.core.cst$kw$list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Have track record for each bus driver","Display information for each bus over period of time","Show estimated fuel consumption","Show customer usage patterns "], null)], null)], null);
routes.components.product.screens = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen,cljs.core.cst$kw$producer], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen,cljs.core.cst$kw$admin], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen,cljs.core.cst$kw$client], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$screen,cljs.core.cst$kw$overview], null)], null);
if((typeof routes !== 'undefined') && (typeof routes.components !== 'undefined') && (typeof routes.components.product !== 'undefined') && (typeof routes.components.product.interval !== 'undefined')){
} else {
routes.components.product.interval = null;
}
routes.components.product.cancel_timer = (function routes$components$product$cancel_timer(){
return clearInterval(routes.components.product.interval);
});
routes.components.product.handle_index = (function routes$components$product$handle_index(){
var val = cljs.core.deref(routes.components.product.screen_index);
if((val < (3))){
return cljs.core.reset_BANG_(routes.components.product.screen_index,(val + (1)));
} else {
return cljs.core.reset_BANG_(routes.components.product.screen_index,(0));
}
});
routes.components.product.start_timer = (function routes$components$product$start_timer(){
return routes.components.product.interval = setInterval((function (){
routes.components.product.handle_index();

return cljs.core.reset_BANG_(routes.components.product.active_screen,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes.components.product.screens,cljs.core.deref(routes.components.product.screen_index)));
}),(15000));
});
routes.components.product.handle_click = (function routes$components$product$handle_click(p__13515){
var map__13516 = p__13515;
var map__13516__$1 = (((((!((map__13516 == null))))?(((((map__13516.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13516.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13516):map__13516);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13516__$1,cljs.core.cst$kw$index);
routes.components.product.cancel_timer();

cljs.core.reset_BANG_(routes.components.product.screen_index,index);

cljs.core.reset_BANG_(routes.components.product.active_screen,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes.components.product.screens,index));

return routes.components.product.start_timer();
});
if((routes.components.product.interval == null)){
routes.components.product.start_timer();
} else {
routes.components.product.cancel_timer();

routes.components.product.start_timer();
}
routes.components.product.product_item = (function routes$components$product$product_item(p__13518){
var map__13519 = p__13518;
var map__13519__$1 = (((((!((map__13519 == null))))?(((((map__13519.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13519.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13519):map__13519);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$title);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$desc);
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$img);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$icon);
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13519__$1,cljs.core.cst$kw$list);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,true,cljs.core.cst$kw$class_DASH_name,"transparent-bg no-border"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$stackable,true,cljs.core.cst$kw$columns,(2)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$vertical_DASH_align,cljs.core.cst$kw$middle], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Header,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$as,cljs.core.cst$kw$h1,cljs.core.cst$kw$icon,cljs.core.cst$kw$icon,cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$product_DASH_header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,icon], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,desc], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$left], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.List,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$animated,true,cljs.core.cst$kw$vertical_DASH_align,"middle",cljs.core.cst$kw$bulleted,true,cljs.core.cst$kw$size,cljs.core.cst$kw$large], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__13519,map__13519__$1,title,desc,img,icon,list){
return (function (text){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.List.Item,text], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,text], null));
});})(map__13519,map__13519__$1,title,desc,img,icon,list))
,list)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Image,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,img,cljs.core.cst$kw$rounded,true,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$img_DASH_shadow], null)], null)], null)], null)], null)], null);
});
routes.components.product.products = (function routes$components$product$products(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"what"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class_DASH_name,"no-border segment-bg",cljs.core.cst$kw$padded,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.product.product_item,cljs.core.get.cljs$core$IFn$_invoke$arity$2(routes.components.product.items,cljs.core.deref(routes.components.product.screen_index))], null)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$pointing,true,cljs.core.cst$kw$secondary,true,cljs.core.cst$kw$fluid,true,cljs.core.cst$kw$widths,(4),cljs.core.cst$kw$size,cljs.core.cst$kw$massive], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,cljs.core.cst$kw$admin,cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(routes.components.product.active_screen)),cljs.core.cst$kw$producer),cljs.core.cst$kw$on_DASH_click,(function (){
return routes.components.product.handle_click(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$index,(0)], null));
})], null),"Producer App"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(routes.components.product.active_screen)),cljs.core.cst$kw$admin),cljs.core.cst$kw$on_DASH_click,(function (){
return routes.components.product.handle_click(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$index,(1)], null));
})], null),"Admin Panel"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(routes.components.product.active_screen)),cljs.core.cst$kw$client),cljs.core.cst$kw$on_DASH_click,(function (){
return routes.components.product.handle_click(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$index,(2)], null));
})], null),"Client App"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.product.global$module$cljsjs$semantic_ui_react.Menu.Item,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$screen.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(routes.components.product.active_screen)),cljs.core.cst$kw$overview),cljs.core.cst$kw$on_DASH_click,(function (){
return routes.components.product.handle_click(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$index,(3)], null));
})], null),"Data Overview"], null)], null)], null)], null)], null)], null);
});
});
