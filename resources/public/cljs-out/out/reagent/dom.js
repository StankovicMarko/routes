// Compiled by ClojureScript 1.10.339 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
reagent.dom.global$module$react_dom = goog.global["ReactDOM"];
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.imported !== 'undefined')){
} else {
reagent.dom.imported = null;
}
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return reagent.dom.global$module$react_dom.unmountComponentAtNode.call(null,container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_11423 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return reagent.dom.global$module$react_dom.render.call(null,comp.call(null),container,((function (_STAR_always_update_STAR_11423){
return (function (){
var _STAR_always_update_STAR_11424 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_11424;
}});})(_STAR_always_update_STAR_11423))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_11423;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__11426 = arguments.length;
switch (G__11426) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return reagent.dom.global$module$react_dom.findDOMNode.call(null,this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__11428_11432 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__11429_11433 = null;
var count__11430_11434 = (0);
var i__11431_11435 = (0);
while(true){
if((i__11431_11435 < count__11430_11434)){
var v_11436 = cljs.core._nth.call(null,chunk__11429_11433,i__11431_11435);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_11436);


var G__11437 = seq__11428_11432;
var G__11438 = chunk__11429_11433;
var G__11439 = count__11430_11434;
var G__11440 = (i__11431_11435 + (1));
seq__11428_11432 = G__11437;
chunk__11429_11433 = G__11438;
count__11430_11434 = G__11439;
i__11431_11435 = G__11440;
continue;
} else {
var temp__5457__auto___11441 = cljs.core.seq.call(null,seq__11428_11432);
if(temp__5457__auto___11441){
var seq__11428_11442__$1 = temp__5457__auto___11441;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11428_11442__$1)){
var c__4351__auto___11443 = cljs.core.chunk_first.call(null,seq__11428_11442__$1);
var G__11444 = cljs.core.chunk_rest.call(null,seq__11428_11442__$1);
var G__11445 = c__4351__auto___11443;
var G__11446 = cljs.core.count.call(null,c__4351__auto___11443);
var G__11447 = (0);
seq__11428_11432 = G__11444;
chunk__11429_11433 = G__11445;
count__11430_11434 = G__11446;
i__11431_11435 = G__11447;
continue;
} else {
var v_11448 = cljs.core.first.call(null,seq__11428_11442__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_11448);


var G__11449 = cljs.core.next.call(null,seq__11428_11442__$1);
var G__11450 = null;
var G__11451 = (0);
var G__11452 = (0);
seq__11428_11432 = G__11449;
chunk__11429_11433 = G__11450;
count__11430_11434 = G__11451;
i__11431_11435 = G__11452;
continue;
}
} else {
}
}
break;
}

return "Updated";
});
