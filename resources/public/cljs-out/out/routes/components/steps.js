// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.steps');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
routes.components.steps.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.steps.step = (function routes$components$steps$step(p__13520){
var map__13521 = p__13520;
var map__13521__$1 = (((((!((map__13521 == null))))?(((((map__13521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13521):map__13521);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13521__$1,cljs.core.cst$kw$header);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13521__$1,cljs.core.cst$kw$src);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13521__$1,cljs.core.cst$kw$desc);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$centered,true,cljs.core.cst$kw$class_DASH_name,"card-def light-blue",cljs.core.cst$kw$fluid,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card.Content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$no_DASH_top_DASH_border], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$70_PERCENT_,cljs.core.cst$kw$margin,"0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Image,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$src,src,cljs.core.cst$kw$class_DASH_name,"gray-img",cljs.core.cst$kw$centered,true,cljs.core.cst$kw$fluid,true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card.Content,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,header,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$no_DASH_top_DASH_border], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card.Content,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,desc,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$no_DASH_top_DASH_border], null)], null)], null);
});
routes.components.steps.steps = (function routes$components$steps$steps(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$columns,(3),cljs.core.cst$kw$class_DASH_name,"light-blue padded-row padded-top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"how"], null)], null),(function (){var iter__4523__auto__ = (function routes$components$steps$steps_$_iter__13523(s__13524){
return (new cljs.core.LazySeq(null,(function (){
var s__13524__$1 = s__13524;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__13524__$1);
if(temp__5735__auto__){
var s__13524__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13524__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__13524__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__13526 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__13525 = (0);
while(true){
if((i__13525 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__13525);
cljs.core.chunk_append(b__13526,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.steps.step,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__13527 = (i__13525 + (1));
i__13525 = G__13527;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13526),routes$components$steps$steps_$_iter__13523(cljs.core.chunk_rest(s__13524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13526),null);
}
} else {
var item = cljs.core.first(s__13524__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.steps.step,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(item)], null)),routes$components$steps$steps_$_iter__13523(cljs.core.rest(s__13524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Step 1",cljs.core.cst$kw$src,"img/how1.png",cljs.core.cst$kw$desc,"Contact us and about pricing plans and information about data that's needed in order to make system operational"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Step 2",cljs.core.cst$kw$src,"img/how2.png",cljs.core.cst$kw$desc,"We setup online services and mobile apps with data you provided"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Step 3",cljs.core.cst$kw$src,"img/how3.png",cljs.core.cst$kw$desc,"You enjoy full control over the system while you customers have many perks one of which is knowing when bus is coming"], null)], null));
})()], null);
});
