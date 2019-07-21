(ns routes.components.product
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))



(def items [{:title "Admin Panel"
             :desc "You have full control over the flow of information in the system."
             :img "img/admin.jpg"
             :icon "desktop"}
            {:title "Client Application"
             :desc "Your clients can enjoy perks of your servies more fully."
             :img "img/client.jpg"
             :icon "mobile alternate"}
            {:title "Future feat"
             :desc "Future Feat"
             :img "img/placeholder.png"
             :icon "question circle outline"}
            {:title "Future Feat"
             :desc "Future Feat"
             :img "img/placeholder.png"
             :icon "question circle outline"}])


(defn product-item [{:keys [title desc img icon]}]
  [:> ui/Segment {:placeholder true
                  :class-name "transparent-bg no-border"}

   [:> ui/Grid {:text-align :center
                :stackable true
                :columns 2}

    [:> ui/Grid.Row {:vertical-align :middle}
     [:> ui/Grid.Column
      [:> ui/Header {:as :h1
                     :icon :icon
                     :inverted true}
       [:> ui/Icon {:name icon}] title]

      [:h4 desc]]

     [:> ui/Grid.Column
      [:> ui/Image {:src img
                    :rounded true
                    :class-name :img-shadow}]]]]])

(defn products []
  (let [state (r/atom :admin)
        index (r/atom 0)]
    (fn []
      [:> ui/Grid.Row
       [:> ui/Grid.Column

        [:div
         [:div.anchor-offset {:id "what"}]
         [:> ui/Segment {:class-name "no-border segment-bg"
                         :padded true}

          [:> ui/Container {:text-align :center}

           ;; DESCRIBE EACH product feature it's this used for this and this
           [product-item (get items @index)]]


          [:> ui/Menu {:inverted true
                       :pointing true
                       :secondary true
                       :fluid true
                       :widths 4
                       :size :massive}

           [:> ui/Menu.Item {:name :admin
                             :active (= @state :admin)
                             :on-click #(do
                                          (reset! state :admin)
                                          (reset! index 0)

                                          )} "Admin panel"]

           [:> ui/Menu.Item {:active (= @state :client)
                             :on-click #(do
                                          (reset! state :client)
                                          (reset! index 1)
                                          )} "Client app"]

           [:> ui/Menu.Item {:active (= @state :f1)
                             :on-click #(do
                                          (reset! state :f1)
                                          (reset! index 2))} "Future feature"]

           [:> ui/Menu.Item {:active (= @state :f2)
                             :on-click #(do
                                          (reset! state :f2)
                                          (reset! index 3))} "Future feature"]


           ]]
         ]]])))
