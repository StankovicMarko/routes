(ns routes.components.navigation
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))



(def active-item (r/atom :home))


(defn handle-nav-scroll [{:keys [percentage direction]}]
  (if (= direction "down")
    (cond
      (and (> percentage 0.16) (< percentage 0.34)) (reset! active-item :how)
      (and (> percentage 0.34) (< percentage 0.52)) (reset! active-item :what)
      (and (> percentage 0.52) (< percentage 0.68)) (reset! active-item :faq)
      (and (> percentage 0.68)) (reset! active-item :contact)
      :else nil)
    (cond
      (< percentage 0.04) (reset! active-item :home)
      (and (> percentage 0.14) (< percentage 0.24)) (reset! active-item :how)
      (and (> percentage 0.24) (< percentage 0.40)) (reset! active-item :what)
      (and (> percentage 0.40) (< percentage 0.57)) (reset! active-item :faq)
      (and (> percentage 0.68)) (reset! active-item :contact)
      :else nil)))


(defn nav-menu [base-component options]
  [:> base-component options
   [:> ui/Menu.Item {:as "a"
                     :href "#home"
                     :active (= @active-item :home)}
    [:> ui/Icon {:name "home"}] "Home"]
   [:> ui/Menu.Item {:as "a"
                     :href "#how"
                     :active (= @active-item :how)}
    [:> ui/Icon {:name "clone "}] "How it works"]
   [:> ui/Menu.Item {:as "a"
                     :href "#what"
                     :active (= @active-item :what)}
    [:> ui/Icon {:name "industry"}] "What we offer"]
   [:> ui/Menu.Item {:as "a"
                     :href "#faq"
                     :active (= @active-item :faq)}
    [:> ui/Icon {:name "question"}] "FAQ"]
   [:> ui/Menu.Item {:as "a"
                     :href "#contact"
                     :active (= @active-item :contact)}
    [:> ui/Icon {:name "envelope"}] "Contact Us"]])


(defn wide-menu [ref]
  (fn []
    [:> ui/Grid.Row {:id :nav-bar
                     :class-name "no-padding"
                     :only "computer tablet"}
     [:> ui/Grid.Column
      [:div.anchor-offset {:id "home"}]
      [:> ui/Sticky {:context @ref
                     :class-name "transparent-bg"}
       [:> ui/Segment {:inverted true
                       :class-name "menu-color"}
        [:> ui/Menu {:inverted true
                     :pointing true
                     :secondary true
                     :stackable true
                     :size :massive}
         [:> ui/Menu.Menu {:position :left}

          [:> ui/Menu.Item [:h1 "Bus Routes"]]]

         [nav-menu ui/Menu.Menu {:position :right}]]]]]]))
