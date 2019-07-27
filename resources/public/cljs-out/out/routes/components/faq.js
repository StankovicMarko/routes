// Compiled by ClojureScript 1.10.520 {:static-fns true, :optimize-constants true}
goog.provide('routes.components.faq');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
routes.components.faq.global$module$cljsjs$semantic_ui_react = goog.global["semanticUIReact"];
routes.components.faq.active_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
routes.components.faq.question = (function routes$components$faq$question(p__10057){
var map__10058 = p__10057;
var map__10058__$1 = (((((!((map__10058 == null))))?(((((map__10058.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10058.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10058):map__10058);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10058__$1,cljs.core.cst$kw$index);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10058__$1,cljs.core.cst$kw$title);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10058__$1,cljs.core.cst$kw$content);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Accordion.Title,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class_DASH_name,"title gray-text",cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.deref(routes.components.faq.active_QMARK_)),cljs.core.cst$kw$on_DASH_click,((function (map__10058,map__10058__$1,index,title,content){
return (function (){
return cljs.core.reset_BANG_(routes.components.faq.active_QMARK_,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.deref(routes.components.faq.active_QMARK_)))?(-1):index));
});})(map__10058,map__10058__$1,index,title,content))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,cljs.core.cst$kw$h3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Icon,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.deref(routes.components.faq.active_QMARK_)))?"minus circle":"plus circle")], null)], null),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Accordion.Content,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$active,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,cljs.core.deref(routes.components.faq.active_QMARK_))], null),content], null)], null);
});
routes.components.faq.faq = (function routes$components$faq$faq(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Grid.Row,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Grid.Column,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$anchor_DASH_offset,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"faq"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Container,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$text,true,cljs.core.cst$kw$class_DASH_name,"light-blue gray-text padded-bottom",cljs.core.cst$kw$text_DASH_align,cljs.core.cst$kw$left], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Header,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$as,cljs.core.cst$kw$h2], null),"FREQUENTLY ASKED QUESTIONS"], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$_GT_,routes.components.faq.global$module$cljsjs$semantic_ui_react.Accordion,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$exclusive,true,cljs.core.cst$kw$fluid,true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.faq.question,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,(0),cljs.core.cst$kw$title,"What are data requirements that bus companies need to provide?",cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Our systems require minimal amount of data to setup. The type of data we need usually can fit on one sheet of exel file. In order for our services to be operational we need list of all bus stops for each bus line that's in use."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.faq.question,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,(1),cljs.core.cst$kw$title,"Are there any hardware requirements for bus companies?",cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Yes and they are also minimal. Bus Routes assumes buses will have Android or iOS device inside that will host Producer App. To access Admin Panel you would need internet connection and internet browser (Chrome, Mozila, Opera...) Users of transportaion services that you offer need to have Android or iOS device in order to use our Client App."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.faq.question,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,(2),cljs.core.cst$kw$title,"Do you offer free trial?",cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Yes! The way it works is by following ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#how",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$black], null)], null),"the steps."], null)," Once everything is setup you can use our services for 60 days free of charge, during which we would like to get feedback every 14 days. Of course our technical support will assist you in case of any problems. For maximum result we would advise you to inform users of your transportation services about Client App."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes.components.faq.question,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$index,(3),cljs.core.cst$kw$title,"What happens if we like the services?",cljs.core.cst$kw$content,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"If you would like to use all Bus Routes has to ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"#what",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$color,cljs.core.cst$kw$black], null)], null),"offer"], null)," contact us and we will come up with unique monthly subscription plan tailored just for your company. If you were on trial and decide to switch to paid plan before trial ends we will give you special discount. For major discount specify if you would like to be billed annually."], null)], null)], null)], null)], null)], null)], null);
});
});
