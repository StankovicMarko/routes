(ns routes.components.faq
  (:require [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))



(defn faq []
  (let [active? (r/atom nil)]
    (fn []
      [:> ui/Grid.Row
       [:> ui/Grid.Column
        [:div.anchor-offset {:id "faq"}]
        [:> ui/Container {:text true
                          :class-name "light-blue gray-text"
                          :text-align :left}
         [:> ui/Header {:as :h2} "FREQUENTLY ASKED QUESTIONS"]
         [:> ui/Accordion {:exclusive true
                           :fluid true}
          [:> ui/Accordion.Title {:class-name "title gray-text"
                                  :active (= 0 @active?)
                                  :on-click #(reset! active? (if (= 0 @active?)
                                                               -1
                                                               0))}
           [:> ui/Header {:as :h3}
            [:> ui/Icon {:name (if (= 0 @active?)
                                 "minus circle"
                                 "plus circle")}]
            "Sedeiusmod tempor inccsetetur aliquatraiy?"]]
          [:> ui/Accordion.Content {:active (= 0 @active?)}
           [:p
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."]]

          [:> ui/Accordion.Title {:class-name "title gray-text"
                                  :active (= 1 @active?)
                                  :on-click #(reset! active? (if (= 1 @active?)
                                                               -1
                                                               1))}
           [:> ui/Header {:as :h3}
            [:> ui/Icon {:name (if (= 1 @active?)
                                 "minus circle"
                                 "plus circle")}]
            "Tempor inccsetetur aliquatraiy?"]]
          [:> ui/Accordion.Content {:active (= 1 @active?)}
           [:p
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."]]

          [:> ui/Accordion.Title {:class-name "title gray-text"
                                  :active (= 2 @active?)
                                  :on-click #(reset! active? (if (= 2 @active?)
                                                               -1
                                                               2))}
           [:> ui/Header {:as :h3}
            [:> ui/Icon {:name (if (= 2 @active?)
                                 "minus circle"
                                 "plus circle")}]
            "Lorem ipsum dolor amet, consectetur adipisicing ?"]]
          [:> ui/Accordion.Content {:active (= 2 @active?)}
           [:p
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."]]]]]])))
