(ns routes.components.faq
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))


(def  active? (r/atom 0))

(defn question [{:keys [index title content]}]
  [:div
   [:> ui/Accordion.Title {:class-name "title gray-text"
                           :active (= index @active?)
                           :on-click #(reset! active? (if (= index @active?)
                                                        -1
                                                        index))}
    [:> ui/Header {:as :h3}
     [:> ui/Icon {:name (if (= index @active?)
                          "minus circle"
                          "plus circle")}]
     title]]
   [:> ui/Accordion.Content {:active (= index @active?)}
    [:p content]]])


(defn faq []
  (let []
    (fn []
      [:> ui/Grid.Row
       [:> ui/Grid.Column
        [:div.anchor-offset {:id "faq"}]
        [:> ui/Container {:text true
                          :class-name "light-blue gray-text padded-bottom"
                          :text-align :left}
         [:> ui/Header {:as :h2} "FREQUENTLY ASKED QUESTIONS"]
         [:> ui/Accordion {:exclusive true
                           :fluid true}
          [question {:index 0
                     :title "Sedeiusmod tempor inccsetetur aliquatraiy?"
                     :content "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."}]
          [question {:index 1
                     :title "Tempor inccsetetur aliquatraiy?"
                     :content "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."}]
          [question {:index 2
                     :title "Lorem ipsum dolor amet, consectetur adipisicing ?"
                     :content "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."}]
          [question {:index 3
                     :title "Lorem  dolor amet,  adipisicing ?"
                     :content "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."}]

          ]]]])))
