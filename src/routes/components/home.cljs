(ns routes.components.home
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))


(def headline "We help bus companies")

(defn home-text []
  [:div
   [:p "Your clients don't know where the bus is and when it's coming?"]
   [:p "Your clients can't buy ticket onine?"]
   [:p "Your company wants to lower expenses and fuel consumption?"]
   [:p "You've come to the right place."]
   [:p "EXPLAIN WHY the mission share vision passion"]])


(defn home []
  [:> ui/Grid.Row {:only "tablet computer"}
   [:> ui/Grid.Column
    [:div.home-background
     [:div {:style {:position :absolute
                    :width :40%
                    :height :30vw
                    :color :white
                    :top :10%
                    :right :50%
                    :font-size :1.4vw
                    :padding :20px}}
      [:h1 {:style {:font-size :4vw
                    :font-weight 1000}} headline]
      [home-text]]]
    [:div.img-over]
    [:div.anchor-offset {:id "how"}]]])


(defn mobile-home []
  [:> ui/Grid.Row {:columns 2
                   :class-name "segment-bg"
                   :only "mobile"}
   [:> ui/Grid.Column
    [:div.anchor-offset {:id "home"}]
    [:> ui/Segment {:class-name "no-border transparent-bg"}
     [:> ui/Container {:text true
                       :text-align :center}

      [:> ui/Header {:as :h1
                     :class-name "main-header"
                     :inverted true} headline]
      [home-text]]]]

   [:> ui/Grid.Column
    [:> ui/Image {:src "img/hand.png"
                  :fluid true}]]])
