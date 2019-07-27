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
    content]])


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
                     :title "What are data requirements that bus companies need to provide?"
                     :content [:p "Our systems require minimal amount of data to setup. The type of data we need usually can fit on one sheet of exel file. In order for our services to be operational we need list of all bus stops for each bus line that's in use."]}]
          [question {:index 1
                     :title "Are there any hardware requirements for bus companies?"
                     :content [:p "Yes and they are also minimal. Bus Routes assumes buses have Android or iOS device inside that will host Producer App. To access Admin Panel you would need internet connection and internet browser (Chrome, Mozila, Opera...) Users of transportaion services that you offer need to have Android or iOS device in order to use our Client App."]}]

          [question {:index 2
                     :title "Do you offer free trial?"
                     :content [:p "Yes! The way it works is by following "
                               [:a {:href "#how"
                                    :style {:color :black}}
                                "the steps."] " Once everything is setup you can use our services for 60 days free of charge, during which we would like to get feedback every 14 days. For maximum result we would advise you to inform users of your transportation services about client app. "]}]
          [question {:index 3
                     :title "What happens if we like the services?"
                     :content [:p "If you would like to use all Bus Routes has to "
                               [:a {:href "#what"
                                    :style {:color :black}}
                                "offer"] " contact us and we will come up with unique monthly subscription plan tailored just for your company. If you were on trial and decide to switch to paid plan before trial ends we will give you special discount. For major discount specify if you would like to be billed annually."]}]]]]])))
