// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.steps');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
routes.components.steps.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.steps.step = (function routes$components$steps$step(p__10058){
var map__10059 = p__10058;
var map__10059__$1 = (((((!((map__10059 == null))))?(((((map__10059.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10059.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10059):map__10059);
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10059__$1,cljs.core.cst$kw$header);
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10059__$1,cljs.core.cst$kw$src);
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10059__$1,cljs.core.cst$kw$desc);
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$centered,true,cljs.core.cst$kw$class_DASH_name,"card-def light-blue",cljs.core.cst$kw$fluid,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card.Content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$no_DASH_top_DASH_border], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,cljs.core.cst$kw$70_PERCENT_,cljs.core.cst$kw$margin,"0 auto"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Image,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$src,src,cljs.core.cst$kw$class_DASH_name,"gray-img",cljs.core.cst$kw$centered,true,cljs.core.cst$kw$fluid,true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card.Content,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,header,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$no_DASH_top_DASH_border], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Card.Content,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,desc,cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center,cljs.core.cst$kw$class_DASH_name,cljs.core.cst$kw$no_DASH_top_DASH_border], null)], null)], null);
});
routes.components.steps.steps = (function routes$components$steps$steps(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,"light-blue padded-row"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"how"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"HOW IT WORKS"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$stackable,true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$columns,(3),cljs.core.cst$kw$class_DASH_name,"light-blue"], null),(function (){var iter__4523__auto__ = (function routes$components$steps$steps_$_iter__10061(s__10062){
return (new cljs.core.LazySeq(null,(function (){
var s__10062__$1 = s__10062;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__10062__$1);
if(temp__5735__auto__){
var s__10062__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10062__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__10062__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__10064 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__10063 = (0);
while(true){
if((i__10063 < size__4522__auto__)){
var item = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4521__auto__,i__10063);
cljs.core.chunk_append(b__10064,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.steps.step,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(item)], null)));

var G__10065 = (i__10063 + (1));
i__10063 = G__10065;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10064),routes$components$steps$steps_$_iter__10061(cljs.core.chunk_rest(s__10062__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10064),null);
}
} else {
var item = cljs.core.first(s__10062__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.steps.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.steps.step,item], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$header.cljs$core$IFn$_invoke$arity$1(item)], null)),routes$components$steps$steps_$_iter__10061(cljs.core.rest(s__10062__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Step 1",cljs.core.cst$kw$src,"img/how1.png",cljs.core.cst$kw$desc,"Get in touch with us and learn about data and hardware requirements in order to use our services"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Step 2",cljs.core.cst$kw$src,"img/how2.png",cljs.core.cst$kw$desc,"We setup online services and apps for your company and your clients with data you provided"], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$header,"Step 3",cljs.core.cst$kw$src,"img/how3.png",cljs.core.cst$kw$desc,"Your company and your customers enjoy the full experience of our services"], null)], null));
})()], null)], null)], null)], null);
});
