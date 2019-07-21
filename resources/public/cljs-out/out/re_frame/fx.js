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
var _STAR_current_trace_STAR__orig_val__13039 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__13040 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$op_DASH_type,cljs.core.cst$kw$event_SLASH_do_DASH_fx], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__13040;

try{try{var seq__13041 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13042 = null;
var count__13043 = (0);
var i__13044 = (0);
while(true){
if((i__13044 < count__13043)){
var vec__13051 = chunk__13042.cljs$core$IIndexed$_nth$arity$2(null,i__13044);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13051,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13051,(1),null);
var temp__5733__auto___13073 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13073)){
var effect_fn_13074 = temp__5733__auto___13073;
(effect_fn_13074.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13074.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13074.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13075 = seq__13041;
var G__13076 = chunk__13042;
var G__13077 = count__13043;
var G__13078 = (i__13044 + (1));
seq__13041 = G__13075;
chunk__13042 = G__13076;
count__13043 = G__13077;
i__13044 = G__13078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13041);
if(temp__5735__auto__){
var seq__13041__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13041__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13041__$1);
var G__13079 = cljs.core.chunk_rest(seq__13041__$1);
var G__13080 = c__4550__auto__;
var G__13081 = cljs.core.count(c__4550__auto__);
var G__13082 = (0);
seq__13041 = G__13079;
chunk__13042 = G__13080;
count__13043 = G__13081;
i__13044 = G__13082;
continue;
} else {
var vec__13054 = cljs.core.first(seq__13041__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13054,(1),null);
var temp__5733__auto___13083 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13083)){
var effect_fn_13084 = temp__5733__auto___13083;
(effect_fn_13084.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13084.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13084.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13085 = cljs.core.next(seq__13041__$1);
var G__13086 = null;
var G__13087 = (0);
var G__13088 = (0);
seq__13041 = G__13085;
chunk__13042 = G__13086;
count__13043 = G__13087;
i__13044 = G__13088;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__12848__auto___13089 = re_frame.interop.now();
var duration__12849__auto___13090 = (end__12848__auto___13089 - cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,cljs.core.cst$kw$duration,duration__12849__auto___13090,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$end,re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__12848__auto___13089);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__13039;
}} else {
var seq__13057 = cljs.core.seq(cljs.core.cst$kw$effects.cljs$core$IFn$_invoke$arity$1(context));
var chunk__13058 = null;
var count__13059 = (0);
var i__13060 = (0);
while(true){
if((i__13060 < count__13059)){
var vec__13067 = chunk__13058.cljs$core$IIndexed$_nth$arity$2(null,i__13060);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(1),null);
var temp__5733__auto___13091 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13091)){
var effect_fn_13092 = temp__5733__auto___13091;
(effect_fn_13092.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13092.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13092.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13093 = seq__13057;
var G__13094 = chunk__13058;
var G__13095 = count__13059;
var G__13096 = (i__13060 + (1));
seq__13057 = G__13093;
chunk__13058 = G__13094;
count__13059 = G__13095;
i__13060 = G__13096;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13057);
if(temp__5735__auto__){
var seq__13057__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13057__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13057__$1);
var G__13097 = cljs.core.chunk_rest(seq__13057__$1);
var G__13098 = c__4550__auto__;
var G__13099 = cljs.core.count(c__4550__auto__);
var G__13100 = (0);
seq__13057 = G__13097;
chunk__13058 = G__13098;
count__13059 = G__13099;
i__13060 = G__13100;
continue;
} else {
var vec__13070 = cljs.core.first(seq__13057__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13070,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13070,(1),null);
var temp__5733__auto___13101 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___13101)){
var effect_fn_13102 = temp__5733__auto___13101;
(effect_fn_13102.cljs$core$IFn$_invoke$arity$1 ? effect_fn_13102.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_13102.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__13103 = cljs.core.next(seq__13057__$1);
var G__13104 = null;
var G__13105 = (0);
var G__13106 = (0);
seq__13057 = G__13103;
chunk__13058 = G__13104;
count__13059 = G__13105;
i__13060 = G__13106;
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
var seq__13107 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13108 = null;
var count__13109 = (0);
var i__13110 = (0);
while(true){
if((i__13110 < count__13109)){
var map__13115 = chunk__13108.cljs$core$IIndexed$_nth$arity$2(null,i__13110);
var map__13115__$1 = (((((!((map__13115 == null))))?(((((map__13115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13115):map__13115);
var effect = map__13115__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13115__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13115__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13107,chunk__13108,count__13109,i__13110,map__13115,map__13115__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13107,chunk__13108,count__13109,i__13110,map__13115,map__13115__$1,effect,ms,dispatch))
,ms);
}


var G__13119 = seq__13107;
var G__13120 = chunk__13108;
var G__13121 = count__13109;
var G__13122 = (i__13110 + (1));
seq__13107 = G__13119;
chunk__13108 = G__13120;
count__13109 = G__13121;
i__13110 = G__13122;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13107);
if(temp__5735__auto__){
var seq__13107__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13107__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13107__$1);
var G__13123 = cljs.core.chunk_rest(seq__13107__$1);
var G__13124 = c__4550__auto__;
var G__13125 = cljs.core.count(c__4550__auto__);
var G__13126 = (0);
seq__13107 = G__13123;
chunk__13108 = G__13124;
count__13109 = G__13125;
i__13110 = G__13126;
continue;
} else {
var map__13117 = cljs.core.first(seq__13107__$1);
var map__13117__$1 = (((((!((map__13117 == null))))?(((((map__13117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13117):map__13117);
var effect = map__13117__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$ms);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$dispatch);
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__13107,chunk__13108,count__13109,i__13110,map__13117,map__13117__$1,effect,ms,dispatch,seq__13107__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__13107,chunk__13108,count__13109,i__13110,map__13117,map__13117__$1,effect,ms,dispatch,seq__13107__$1,temp__5735__auto__))
,ms);
}


var G__13127 = cljs.core.next(seq__13107__$1);
var G__13128 = null;
var G__13129 = (0);
var G__13130 = (0);
seq__13107 = G__13127;
chunk__13108 = G__13128;
count__13109 = G__13129;
i__13110 = G__13130;
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
var seq__13131 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__13132 = null;
var count__13133 = (0);
var i__13134 = (0);
while(true){
if((i__13134 < count__13133)){
var event = chunk__13132.cljs$core$IIndexed$_nth$arity$2(null,i__13134);
re_frame.router.dispatch(event);


var G__13135 = seq__13131;
var G__13136 = chunk__13132;
var G__13137 = count__13133;
var G__13138 = (i__13134 + (1));
seq__13131 = G__13135;
chunk__13132 = G__13136;
count__13133 = G__13137;
i__13134 = G__13138;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13131);
if(temp__5735__auto__){
var seq__13131__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13131__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13131__$1);
var G__13139 = cljs.core.chunk_rest(seq__13131__$1);
var G__13140 = c__4550__auto__;
var G__13141 = cljs.core.count(c__4550__auto__);
var G__13142 = (0);
seq__13131 = G__13139;
chunk__13132 = G__13140;
count__13133 = G__13141;
i__13134 = G__13142;
continue;
} else {
var event = cljs.core.first(seq__13131__$1);
re_frame.router.dispatch(event);


var G__13143 = cljs.core.next(seq__13131__$1);
var G__13144 = null;
var G__13145 = (0);
var G__13146 = (0);
seq__13131 = G__13143;
chunk__13132 = G__13144;
count__13133 = G__13145;
i__13134 = G__13146;
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
var seq__13147 = cljs.core.seq(value);
var chunk__13148 = null;
var count__13149 = (0);
var i__13150 = (0);
while(true){
if((i__13150 < count__13149)){
var event = chunk__13148.cljs$core$IIndexed$_nth$arity$2(null,i__13150);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13151 = seq__13147;
var G__13152 = chunk__13148;
var G__13153 = count__13149;
var G__13154 = (i__13150 + (1));
seq__13147 = G__13151;
chunk__13148 = G__13152;
count__13149 = G__13153;
i__13150 = G__13154;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__13147);
if(temp__5735__auto__){
var seq__13147__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__13147__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__13147__$1);
var G__13155 = cljs.core.chunk_rest(seq__13147__$1);
var G__13156 = c__4550__auto__;
var G__13157 = cljs.core.count(c__4550__auto__);
var G__13158 = (0);
seq__13147 = G__13155;
chunk__13148 = G__13156;
count__13149 = G__13157;
i__13150 = G__13158;
continue;
} else {
var event = cljs.core.first(seq__13147__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__13159 = cljs.core.next(seq__13147__$1);
var G__13160 = null;
var G__13161 = (0);
var G__13162 = (0);
seq__13147 = G__13159;
chunk__13148 = G__13160;
count__13149 = G__13161;
i__13150 = G__13162;
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
