(ns routes.components.product
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))


(def active-screen (r/atom {:screen :producer}))

(def screen-index (r/atom 0))


(def items [{:title "Producer App"
             :desc "This application is made to assist the drivers and collect data."
             :img "img/producer.jpg"
             :icon "bus"
             :list ["Collects data for services (trial)" ;;(bus for invalids, space for pregant)
                    "Drivers can send notifications to traffic control (trial)"
                    "Shows speed limits warnings" ;;(future)
                    ;;"Notifies drivers about traffic" ;; (future)
                    "Displays route for drivers"]} ;; (future)

            {:title "Admin Panel"
             :desc "You have full control over the flow of information in the system."
             :img "img/admin.jpg"
             :icon "desktop"
             :list ["Monitoring of buses in real-time (trial)"
                    "Easily access information using advanced search" ;;(future)
                    "Shows live stats of active buses" ;;(future, km driven, fuel consumption)
                    "Shows details about the drivers"]} ;;(future, driver behavior, speed limit warnings)

            {:title "Client App"
             :desc "Your clients can enjoy perks of your servies more fully."
             :img "img/client.jpg"
             :icon "mobile alternate"
             :list ["Info for desired bus in real-time (trial)";;(position, arrival time...)
                    "Shows routes for buses with info about future stops (trial)" ;; previous, next and
                    "Best route for desired destination" ;; (future)
                    "Buy tickets online"]} ;;(future)

            {:title "Data Overview"
             :desc "Have unique insight for your business based on data."
             :img "img/expense.png"
             :icon "chart area"
             :list ["Have track record for each bus driver" ;;(future)
                    "Display information for each bus over period of time" ;; (future ,km, need of service?)
                    "Show estimated fuel consumption" ;;and suggestions how to reduce it (future)
                    "Show customer usage patterns "]}]) ;;(when they use bus the most, when to send more buses based on time of the day,month, year, holidays...)

(def screens [{:screen :producer}
              {:screen :admin}
              {:screen :client}
              {:screen :overview}])


(defonce interval nil)


(defn cancel-timer []
  (js/clearInterval interval))


(defn handle-index []
  (let [val @screen-index]
    (if (< val 3)
      (reset! screen-index (inc val))
      (reset! screen-index 0))))


(defn start-timer []
  (set! interval (js/setInterval (fn []
                                   (do (handle-index)
                                       (reset! active-screen (get screens @screen-index)))) 15000)))


(defn handle-click [{:keys [index]}]
  (cancel-timer)
  (reset! screen-index index)
  (reset! active-screen (get screens index))
  (start-timer))


(if (nil? interval)
  (start-timer)
  (do (cancel-timer)
      (start-timer)))


(defn product-item [{:keys [title desc img icon list]}]
  [:> ui/Segment {:class-name "transparent-bg no-border"}
   [:> ui/Grid {:text-align :center
                :stackable true
                :columns 2}
    [:> ui/Grid.Row {:vertical-align :middle}
     [:> ui/Grid.Column
      [:> ui/Header {:as :h1
                     :icon :icon
                     :inverted true
                     :class-name :product-header}
       [:> ui/Icon {:name icon}] title]

      [:h3 desc]
      [:> ui/Container {:text-align :left}
       [:> ui/List {:animated true
                    ;;:relaxed true
                    :vertical-align "middle"
                    :bulleted true
                    :size :large}
        (map (fn [text]
               ^{:key text}
               [:> ui/List.Item text]) list)]]]

     [:> ui/Grid.Column
      [:> ui/Image {:src img
                    :rounded true
                    :class-name :img-shadow}]]]]])

(defn products []
  [:> ui/Grid.Row {:class-name "no-border segment-bg"}
   [:> ui/Grid.Column
    [:div
     [:div.anchor-offset {:id "what"}]
     [:> ui/Container {:text-align :center}
      [:h2 {:style {:color :white}} "WHAT WE OFFER"]
      [product-item (get items @screen-index)]]

     [:> ui/Menu {:inverted true
                  :pointing true
                  :secondary true
                  :fluid true
                  :widths 4
                  :size :massive}

      [:> ui/Menu.Item {:name :admin
                        :active (= (:screen @active-screen) :producer)
                        :on-click #(handle-click {:index 0})} "Producer App"]

      [:> ui/Menu.Item {:active (= (:screen @active-screen) :admin)
                        :on-click #(handle-click {:index 1})} "Admin Panel"]

      [:> ui/Menu.Item {:active (= (:screen @active-screen) :client)
                        :on-click #(handle-click {:index 2})}  "Client App"]

      [:> ui/Menu.Item {:active (= (:screen @active-screen) :overview)
                        :on-click #(handle-click {:index 3})} "Data Overview"]]]]])
