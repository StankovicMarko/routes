// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.contact');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.object');
goog.require('reagent.core');
routes.components.contact.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.contact.contact_form = (function routes$components$contact$contact_form(){
var form_data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$gdpr,false], null));
var company_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return ((function (form_data,company_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"contact"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class_DASH_name,"no-border segment-bg"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Container,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$center], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Segment,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$placeholder,true,cljs.core.cst$kw$class_DASH_name,"transparent-bg no-border padded-row"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"CONTACT US"], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,"padded-row",cljs.core.cst$kw$action,"https://formspree.io/stefan_kurcubic@yahoo.com",cljs.core.cst$kw$method,"post"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$widths,"equal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"Your name",cljs.core.cst$kw$fluid,true,cljs.core.cst$kw$name,"name",cljs.core.cst$kw$required,true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"E-mail address",cljs.core.cst$kw$fluid,true,cljs.core.cst$kw$name,"email",cljs.core.cst$kw$required,true], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Group,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inline,true,cljs.core.cst$kw$widths,"equal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Field,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Checkbox,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$label,"Are you representative of a company?",cljs.core.cst$kw$on_DASH_change,((function (form_data,company_QMARK_){
return (function (e,this$){
return cljs.core.reset_BANG_(company_QMARK_,(function (){var G__13511 = this$;
var G__13512 = ["checked"];
return goog.object.get(G__13511,G__13512);
})());
});})(form_data,company_QMARK_))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$widths,"equal"], null),(cljs.core.truth_(cljs.core.deref(company_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"Company website",cljs.core.cst$kw$fluid,true,cljs.core.cst$kw$name,"website",cljs.core.cst$kw$required,true], null)], null):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Group,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$widths,"equal"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$placeholder,"Message topic",cljs.core.cst$kw$fluid,true,cljs.core.cst$kw$name,"topic",cljs.core.cst$kw$required,true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.TextArea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$placeholder,"Your message",cljs.core.cst$kw$name,"message",cljs.core.cst$kw$required,true], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Checkbox,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$label,"I want to be informed about new features and information",cljs.core.cst$kw$on_DASH_change,((function (form_data,company_QMARK_){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form_data,cljs.core.assoc,cljs.core.cst$kw$gdpr,cljs.core.not(cljs.core.cst$kw$gdpr.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_data))));
});})(form_data,company_QMARK_))
,cljs.core.cst$kw$name,"gdpr",cljs.core.cst$kw$value,cljs.core.cst$kw$gdpr.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form_data))], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.contact.global$module$cljsjs$semantic_ui_react.Form.Button,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$inverted,true,cljs.core.cst$kw$type,"submit"], null),"Submit"], null)], null)], null)], null)], null)], null)], null)], null);
});
;})(form_data,company_QMARK_))
});