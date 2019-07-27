(ns routes.components.steps
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))



(defn step [{:keys [header src desc]}]
  [:> ui/Card {:centered true
               :class-name "card-def light-blue"
               :fluid true}
   [:> ui/Card.Content {:class-name :no-top-border}
    [:div {:style {:width :70%
                   :margin "0 auto"}}
     [:> ui/Image {:src src
                   :class-name "gray-img"
                   :centered true
                   :fluid true}]]]
   [:> ui/Card.Content {:header header
                        :text-align :center
                        :class-name :no-top-border}]
   [:> ui/Card.Content {:description desc
                        :text-align :center
                        :class-name :no-top-border}]])

(defn steps []
  [:> ui/Grid.Row {:columns 3
                   :class-name "light-blue padded-row padded-top"}
   [:div.anchor-offset {:id "how"}]
   (for [item [{:header "Step 1"
                :src "img/how1.png"
                :desc "Get in touch with us and learn about data and hardware requirements in order to use our services"}
               {:header "Step 2"
                :src "img/how2.png"
                :desc "We setup online services and apps for your company and your clients with data you provided"}
               {:header "Step 3"
                :src "img/how3.png"
                :desc "Your company and your customers enjoy the full experience of our services"}]]
     ^{:key (:header item)}
     [:> ui/Grid.Column
      [step item]])])
