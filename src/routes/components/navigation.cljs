(ns routes.components.navigation
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))



(def active-item (r/atom :home))


(defn nav-menu [base-component options]
  [:> base-component options
   [:> ui/Menu.Item {:as "a"
                     :href "#home"
                     :active (= @active-item :home)
                     :on-click #(reset! active-item :home)}
    [:> ui/Icon {:name "home"}] "Home"]
   [:> ui/Menu.Item {:as "a"
                     :href "#how"
                     :active (= @active-item :how)
                     :on-click #(reset! active-item :how)}
    [:> ui/Icon {:name "clone "}] "How it works"]
   [:> ui/Menu.Item {:as "a"
                     :href "#what"
                     :active (= @active-item :what)
                     :on-click #(reset! active-item :what)}
    [:> ui/Icon {:name "industry"}] "What we offer"]
   [:> ui/Menu.Item {:as "a"
                     :href "#faq"
                     :active (= @active-item :faq)
                     :on-click #(reset! active-item :faq)}
    [:> ui/Icon {:name "question"}] "FAQ"]
   [:> ui/Menu.Item {:as "a"
                     :href "#contact"
                     :active (= @active-item :contact)
                     :on-click #(reset! active-item :contact)}
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
