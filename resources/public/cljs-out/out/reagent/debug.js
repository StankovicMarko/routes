// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__11790__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11790 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11791__i = 0, G__11791__a = new Array(arguments.length -  0);
while (G__11791__i < G__11791__a.length) {G__11791__a[G__11791__i] = arguments[G__11791__i + 0]; ++G__11791__i;}
  args = new cljs.core.IndexedSeq(G__11791__a,0,null);
} 
return G__11790__delegate.call(this,args);};
G__11790.cljs$lang$maxFixedArity = 0;
G__11790.cljs$lang$applyTo = (function (arglist__11792){
var args = cljs.core.seq(arglist__11792);
return G__11790__delegate(args);
});
G__11790.cljs$core$IFn$_invoke$arity$variadic = G__11790__delegate;
return G__11790;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__11793__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__11793 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11794__i = 0, G__11794__a = new Array(arguments.length -  0);
while (G__11794__i < G__11794__a.length) {G__11794__a[G__11794__i] = arguments[G__11794__i + 0]; ++G__11794__i;}
  args = new cljs.core.IndexedSeq(G__11794__a,0,null);
} 
return G__11793__delegate.call(this,args);};
G__11793.cljs$lang$maxFixedArity = 0;
G__11793.cljs$lang$applyTo = (function (arglist__11795){
var args = cljs.core.seq(arglist__11795);
return G__11793__delegate(args);
});
G__11793.cljs$core$IFn$_invoke$arity$variadic = G__11793__delegate;
return G__11793;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
