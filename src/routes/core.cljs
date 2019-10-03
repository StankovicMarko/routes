(ns ^:figwheel-hooks routes.core
  (:require
   [goog.dom :as goog-dom]
   [goog.object :as goog-obj]
   [reagent.core :as r]
   [cljsjs.semantic-ui-react :as ui]
   [re-frame.core :as rf]
   [routes.events]
   [routes.components.contact :as contact]
   [routes.components.faq :as faq]
   [routes.components.footer :as footer]
   [routes.components.product :as product]
   [routes.components.steps :as steps]
   [routes.components.navigation :as nav]
   [routes.components.home :as home]))


;; (set! *warn-on-infer* true)

(def pc? (r/atom nil))


(defn layout [ref]
  (fn []
    [:div
     [:> ui/Grid {:stackable true
                  :class-name :light-blue}
      (when @pc?
        [nav/wide-menu ref])

      (when (not @pc?)
        [home/mobile-home])

      (when @pc?
        [home/home])

      [steps/steps]
      [product/products @pc?]
      [faq/faq @pc?]
      [contact/contact-form @pc?]
      [footer/footer]]]))




(defn mobile-layout [ref]
  (let [show? (r/atom nil)]
    (fn []
      [:div
       [:> ui/Sticky {:context @ref}
        [:> ui/Segment {:inverted true
                        :class-name "menu-color"
                        :clearing true}
         (if @show?
           [:> ui/Button {:inverted true
                          :floated :left
                          :on-click #(reset! show? false)}
            [:> ui/Icon {:name "x"}]]
           [:> ui/Button {:inverted true
                          :floated :left
                          :on-click #(reset! show? true)}
            [:> ui/Icon {:name "content"}]])
         [:> ui/Header {:as :h1
                        :floated :right} "Bus Routes"]]]


       [:> ui/Sidebar.Pushable {:as ui/Segment}
        [nav/nav-menu ui/Sidebar {:width "thin",
                                  :visible @show?,
                                  :vertical true,
                                  :on-hide #(reset! show? false),
                                  :inverted true
                                  :class-name "menu-color"
                                  :icon "labeled"
                                  :animation "slide along"
                                  :as ui/Menu}]


        [:> ui/Sidebar.Pusher {:dimmed @show?}
         [layout ref]]]])))





(defn main []
  (let [ref (r/atom nil)]
    (fn []

      [:> ui/Ref {:inner-ref #(reset! ref %)}
       [:> ui/Responsive {:fire-on-mount true
                          :on-update (fn [event view-obj]
                                       (reset! pc?
                                               (>= (goog-obj/getValueByKeys view-obj #js ["width"])
                                                   (goog-obj/getValueByKeys ui/Responsive #js ["onlyMobile"
                                                                                               "maxWidth"]))))}
        [:> ui/Visibility {:on-update (fn [e calc]
                                        (nav/handle-nav-scroll
                                         (-> calc
                                             (goog-obj/getValueByKeys #js ["calculations"])
                                             (js->clj :keywordize-keys true)
                                             (select-keys [:percentagePassed :direction])
                                             (clojure.set/rename-keys {:percentagePassed :percentage}))
                                         @pc?))}
         (if @pc?
           [layout ref]
           [mobile-layout ref])]]])))





(def debug? ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))


(defn mount-app-element []
  (when-let [el (goog-dom/getElement "app")]
    (rf/clear-subscription-cache!)
    (r/render [main] el)))


;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
;; (mount-app-element)


;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))


(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-app-element))



;; plan
;; - update pictures
;; - buy domain and apply it
;; - add video explaining what you do that is animated
;; - add titles for how it works and what we offer
;; - put text as justify in faq

;; possibly update cider and lein
