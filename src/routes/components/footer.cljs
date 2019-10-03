(ns routes.components.footer
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))


(defn footer []
  [:> ui/Grid.Row {:id "footer"}
   [:> ui/Grid.Column
    [:> ui/Container {:text true
                      :class-name "light-blue gray-text"
                      :text-align :center}
     [:> ui/Grid {:stackable true
                  :class-name :light-blue}
      [:> ui/Grid.Row {:columns 2}
       [:> ui/Grid.Column
        [:p "We can't wait for you to enage with us on social networks"]]
       [:> ui/Grid.Column
        [:a {:href "https://www.facebook.com/busroutes.io"
             :target "_blank"}
         [:> ui/Popup {:content "Facebook"
                       :inverted true
                       :position "top center"
                       :trigger (r/as-component
                                 [:> ui/Icon {:name "facebook official"
                                              :class-name "no-border"
                                              :circular true
                                              :size :big}])}]]
        [:a {:href "https://www.linkedin.com/company/bus-routes"
             :target "_blank"}
         [:> ui/Popup {:content "Linkedin"
                       :inverted true
                       :position "top center"
                       :trigger (r/as-component
                                 [:> ui/Icon {:name "linkedin alternate"
                                              :class-name "no-border"
                                              :circular true
                                              :size :big
                                              }])}]]]]]]]])
