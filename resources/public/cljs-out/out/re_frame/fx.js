// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = cljs.core.cst$kw$fx;
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$id,cljs.core.cst$kw$do_DASH_fx,cljs.core.cst$kw$after,(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__13042 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13043 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13043;

try{try{var seq__13044 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13045 = null;
var count__13046 = (0);
var i__13047 = (0);
while(true){
if((i__13047 < count__13046)){
var vec__13054 = chunk__13045.cljs$core$IIndexed$_nth$arity$2(null,i__13047);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(1),null);
var temp__5733__auto___13076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13076)){
var effect_fn_13077 = temp__5733__auto___13076;
(effect_fn_13077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13077.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13078 = seq__13044;
var G__13079 = chunk__13045;
var G__13080 = count__13046;
var G__13081 = (i__13047 + (1));
seq__13044 = G__13078;
chunk__13045 = G__13079;
count__13046 = G__13080;
i__13047 = G__13081;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13044);
if(temp__5735__auto__){
var seq__13044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13044__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13044__$1);
var G__13082 = cljs.core.chunk_rest(seq__13044__$1);
var G__13083 = c__4550__auto__;
var G__13084 = cljs.core.count(c__4550__auto__);
var G__13085 = (0);
seq__13044 = G__13082;
chunk__13045 = G__13083;
count__13046 = G__13084;
i__13047 = G__13085;
continue;
} else {
var vec__13057 = cljs.core.first(seq__13044__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13057,(1),null);
var temp__5733__auto___13086 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13086)){
var effect_fn_13087 = temp__5733__auto___13086;
(effect_fn_13087.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13087.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13087.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13088 = cljs.core.next(seq__13044__$1);
var G__13089 = null;
var G__13090 = (0);
var G__13091 = (0);
seq__13044 = G__13088;
chunk__13045 = G__13089;
count__13046 = G__13090;
i__13047 = G__13091;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12848__auto___13092 = re_frame.interop.now();
var duration__12849__auto___13093 = (end__12848__auto___13092 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__12849__auto___13093,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12848__auto___13092);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13042;
}} else {
var seq__13060 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13061 = null;
var count__13062 = (0);
var i__13063 = (0);
while(true){
if((i__13063 < count__13062)){
var vec__13070 = chunk__13061.cljs$core$IIndexed$_nth$arity$2(null,i__13063);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13070,(1),null);
var temp__5733__auto___13094 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13094)){
var effect_fn_13095 = temp__5733__auto___13094;
(effect_fn_13095.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13095.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13095.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13096 = seq__13060;
var G__13097 = chunk__13061;
var G__13098 = count__13062;
var G__13099 = (i__13063 + (1));
seq__13060 = G__13096;
chunk__13061 = G__13097;
count__13062 = G__13098;
i__13063 = G__13099;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13060);
if(temp__5735__auto__){
var seq__13060__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13060__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13060__$1);
var G__13100 = cljs.core.chunk_rest(seq__13060__$1);
var G__13101 = c__4550__auto__;
var G__13102 = cljs.core.count(c__4550__auto__);
var G__13103 = (0);
seq__13060 = G__13100;
chunk__13061 = G__13101;
count__13062 = G__13102;
i__13063 = G__13103;
continue;
} else {
var vec__13073 = cljs.core.first(seq__13060__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13073,(1),null);
var temp__5733__auto___13104 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13104)){
var effect_fn_13105 = temp__5733__auto___13104;
(effect_fn_13105.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13105.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13105.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13106 = cljs.core.next(seq__13060__$1);
var G__13107 = null;
var G__13108 = (0);
var G__13109 = (0);
seq__13060 = G__13106;
chunk__13061 = G__13107;
count__13062 = G__13108;
i__13063 = G__13109;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_later,(function (value){
var seq__13110 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13111 = null;
var count__13112 = (0);
var i__13113 = (0);
while(true){
if((i__13113 < count__13112)){
var map__13118 = chunk__13111.cljs$core$IIndexed$_nth$arity$2(null,i__13113);
var map__13118__$1 = (((((!((map__13118 == null))))?(((((map__13118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13118):map__13118);
var effect = map__13118__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13118__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13118__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13110,chunk__13111,count__13112,i__13113,map__13118,map__13118__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13110,chunk__13111,count__13112,i__13113,map__13118,map__13118__$1,effect,ms,dispatch))
,ms);
}


var G__13122 = seq__13110;
var G__13123 = chunk__13111;
var G__13124 = count__13112;
var G__13125 = (i__13113 + (1));
seq__13110 = G__13122;
chunk__13111 = G__13123;
count__13112 = G__13124;
i__13113 = G__13125;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13110);
if(temp__5735__auto__){
var seq__13110__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13110__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13110__$1);
var G__13126 = cljs.core.chunk_rest(seq__13110__$1);
var G__13127 = c__4550__auto__;
var G__13128 = cljs.core.count(c__4550__auto__);
var G__13129 = (0);
seq__13110 = G__13126;
chunk__13111 = G__13127;
count__13112 = G__13128;
i__13113 = G__13129;
continue;
} else {
var map__13120 = cljs.core.first(seq__13110__$1);
var map__13120__$1 = (((((!((map__13120 == null))))?(((((map__13120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13120):map__13120);
var effect = map__13120__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13120__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13120__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13110,chunk__13111,count__13112,i__13113,map__13120,map__13120__$1,effect,ms,dispatch,seq__13110__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13110,chunk__13111,count__13112,i__13113,map__13120,map__13120__$1,effect,ms,dispatch,seq__13110__$1,temp__5735__auto__))
,ms);
}


var G__13130 = cljs.core.next(seq__13110__$1);
var G__13131 = null;
var G__13132 = (0);
var G__13133 = (0);
seq__13110 = G__13130;
chunk__13111 = G__13131;
count__13112 = G__13132;
i__13113 = G__13133;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch,(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$dispatch_DASH_n,(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__13134 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13135 = null;
var count__13136 = (0);
var i__13137 = (0);
while(true){
if((i__13137 < count__13136)){
var event = chunk__13135.cljs$core$IIndexed$_nth$arity$2(null,i__13137);
re_frame.router.dispatch(event);


var G__13138 = seq__13134;
var G__13139 = chunk__13135;
var G__13140 = count__13136;
var G__13141 = (i__13137 + (1));
seq__13134 = G__13138;
chunk__13135 = G__13139;
count__13136 = G__13140;
i__13137 = G__13141;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13134);
if(temp__5735__auto__){
var seq__13134__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13134__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13134__$1);
var G__13142 = cljs.core.chunk_rest(seq__13134__$1);
var G__13143 = c__4550__auto__;
var G__13144 = cljs.core.count(c__4550__auto__);
var G__13145 = (0);
seq__13134 = G__13142;
chunk__13135 = G__13143;
count__13136 = G__13144;
i__13137 = G__13145;
continue;
} else {
var event = cljs.core.first(seq__13134__$1);
re_frame.router.dispatch(event);


var G__13146 = cljs.core.next(seq__13134__$1);
var G__13147 = null;
var G__13148 = (0);
var G__13149 = (0);
seq__13134 = G__13146;
chunk__13135 = G__13147;
count__13136 = G__13148;
i__13137 = G__13149;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$deregister_DASH_event_DASH_handler,(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__13150 = cljs.core.seq(value);
var chunk__13151 = null;
var count__13152 = (0);
var i__13153 = (0);
while(true){
if((i__13153 < count__13152)){
var event = chunk__13151.cljs$core$IIndexed$_nth$arity$2(null,i__13153);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13154 = seq__13150;
var G__13155 = chunk__13151;
var G__13156 = count__13152;
var G__13157 = (i__13153 + (1));
seq__13150 = G__13154;
chunk__13151 = G__13155;
count__13152 = G__13156;
i__13153 = G__13157;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13150);
if(temp__5735__auto__){
var seq__13150__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13150__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13150__$1);
var G__13158 = cljs.core.chunk_rest(seq__13150__$1);
var G__13159 = c__4550__auto__;
var G__13160 = cljs.core.count(c__4550__auto__);
var G__13161 = (0);
seq__13150 = G__13158;
chunk__13151 = G__13159;
count__13152 = G__13160;
i__13153 = G__13161;
continue;
} else {
var event = cljs.core.first(seq__13150__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13162 = cljs.core.next(seq__13150__$1);
var G__13163 = null;
var G__13164 = (0);
var G__13165 = (0);
seq__13150 = G__13162;
chunk__13151 = G__13163;
count__13152 = G__13164;
i__13153 = G__13165;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
re_frame.fx.reg_fx(cljs.core.cst$kw$db,(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));
