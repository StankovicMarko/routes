// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__12870){
var map__12871 = p__12870;
var map__12871__$1 = (((((!((map__12871 == null))))?(((((map__12871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__12871):map__12871);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12871__$1,cljs.core.cst$kw$operation);
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12871__$1,cljs.core.cst$kw$op_DASH_type);
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12871__$1,cljs.core.cst$kw$tags);
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12871__$1,cljs.core.cst$kw$child_DASH_of);
return new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,re_frame.trace.next_id(),cljs.core.cst$kw$operation,operation,cljs.core.cst$kw$op_DASH_type,op_type,cljs.core.cst$kw$tags,tags,cljs.core.cst$kw$child_DASH_of,(function (){var or__4131__auto__ = child_of;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),cljs.core.cst$kw$start,re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__12873_12897 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__12874_12898 = null;
var count__12875_12899 = (0);
var i__12876_12900 = (0);
while(true){
if((i__12876_12900 < count__12875_12899)){
var vec__12887_12901 = chunk__12874_12898.cljs$core$IIndexed$_nth$arity$2(null,i__12876_12900);
var k_12902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12887_12901,(0),null);
var cb_12903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12887_12901,(1),null);
try{var G__12891_12904 = cljs.core.deref(re_frame.trace.traces);
(cb_12903.cljs$core$IFn$_invoke$arity$1 ? cb_12903.cljs$core$IFn$_invoke$arity$1(G__12891_12904) : cb_12903.call(null,G__12891_12904));
}catch (e12890){var e_12905 = e12890;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12902,"while storing",cljs.core.deref(re_frame.trace.traces),e_12905], 0));
}

var G__12906 = seq__12873_12897;
var G__12907 = chunk__12874_12898;
var G__12908 = count__12875_12899;
var G__12909 = (i__12876_12900 + (1));
seq__12873_12897 = G__12906;
chunk__12874_12898 = G__12907;
count__12875_12899 = G__12908;
i__12876_12900 = G__12909;
continue;
} else {
var temp__5735__auto___12910 = cljs.core.seq(seq__12873_12897);
if(temp__5735__auto___12910){
var seq__12873_12911__$1 = temp__5735__auto___12910;
if(cljs.core.chunked_seq_QMARK_(seq__12873_12911__$1)){
var c__4550__auto___12912 = cljs.core.chunk_first(seq__12873_12911__$1);
var G__12913 = cljs.core.chunk_rest(seq__12873_12911__$1);
var G__12914 = c__4550__auto___12912;
var G__12915 = cljs.core.count(c__4550__auto___12912);
var G__12916 = (0);
seq__12873_12897 = G__12913;
chunk__12874_12898 = G__12914;
count__12875_12899 = G__12915;
i__12876_12900 = G__12916;
continue;
} else {
var vec__12892_12917 = cljs.core.first(seq__12873_12911__$1);
var k_12918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892_12917,(0),null);
var cb_12919 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12892_12917,(1),null);
try{var G__12896_12920 = cljs.core.deref(re_frame.trace.traces);
(cb_12919.cljs$core$IFn$_invoke$arity$1 ? cb_12919.cljs$core$IFn$_invoke$arity$1(G__12896_12920) : cb_12919.call(null,G__12896_12920));
}catch (e12895){var e_12921 = e12895;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_12918,"while storing",cljs.core.deref(re_frame.trace.traces),e_12921], 0));
}

var G__12922 = cljs.core.next(seq__12873_12911__$1);
var G__12923 = null;
var G__12924 = (0);
var G__12925 = (0);
seq__12873_12897 = G__12922;
chunk__12874_12898 = G__12923;
count__12875_12899 = G__12924;
i__12876_12900 = G__12925;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});
