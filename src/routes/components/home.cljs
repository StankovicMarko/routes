(ns routes.components.home
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))


(def headline "We help bus companies")

(defn home-text []
  [:div
   [:p "We see a world where we do most with our time."]
   [:p "With that vision in mind we crafted specific set of apps so that you and your customers can do the same."]
   [:p "If you wish your customers:"]
   [:> ui/List {:animated true
                :vertical-align "middle"
                :bulleted true
                :size :large}

    [:> ui/List.Item {:as :p} "knew where the bus is and when it will arrive"]
    [:> ui/List.Item {:as :p} "were able to buy tickets online"]
    [:> ui/List.Item {:as :p} "could rely on your services in times of need"]]
   [:p "You've come to the right place."]])

;; reklama "Imagine coming from work, waiting for bus, you can't wait to play with your kids, suddenly rain starts pouring, wind is getting stronger, you can barely hold your hat. Minutes pass you ask yourself 'Where is the bus?!', few moments later you catch a cab and as you sit you glance at the stop and bus is there. You spent more, came late and missed the bus. Only if you knew where the bus is!"

;; bus routes was born out of will to be productive



(defn home []
  [:> ui/Grid.Row {:only "tablet computer"}
   [:> ui/Grid.Column
    [:div.home-background
     [:div {:style {:position :absolute
                    :width :50%
                    :height :30vw
                    :color :white
                    :top :10%
                    :right :45%
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
