(ns ^:figwheel-hooks routes.core
  (:require
   [goog.dom :as goog-dom]
   [goog.object :as goog-obj]
   [reagent.core :as r]

   [cljsjs.semantic-ui-react :as ui]
   [re-frame.core :as rf]
   [routes.events]
   [routes.components.contact :as contact]
   [routes.components.faq :as faq]
   [routes.components.footer :as footer]
   [routes.components.product :as product]
   [routes.components.steps :as steps]
   ))


;; (set! *warn-on-infer* true)

(def pc? (r/atom nil))

(defn nav-bar [ref]
  (let [active-item (r/atom :home)]
    (fn []
      [:> ui/Sticky {:context @ref}
       [:> ui/Segment {:inverted true
                       :color :blue}
        [:> ui/Menu {:inverted true
                     :pointing true
                     :secondary true
                     :stackable true
                     :size :massive}
         [:> ui/Menu.Menu {:position :left}

          [:> ui/Menu.Item [:h1 "Bus Routes"]]]

         [:> ui/Menu.Menu {:position :right}

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
           [:> ui/Icon {:name "envelope"}] "Contact Us"]]]]])))




(defn parallax []
  [:div
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
                   :font-weight 1000}} "We help bus companies"]
     [:p "Your clients don't know where the bus is and when it's coming?"]
     [:p "Your clients can't buy ticket onine?"]
     [:p "Your company wants to lower expenses and fuel consumption?"]
     [:p "You've come to the right place."]
     [:p "EXPLAIN WHY the mission share vision passion"
      ]]]
   [:div.img-over]])






(defn grid [ref]
  (let [;;ref (r/atom nil)
        ]
    (fn []
      [:> ui/Grid {:stackable true
                   :class-name :light-blue}


       (when @pc?
         [:> ui/Grid.Row {:id :nav-bar
                          :class-name "no-padding"
                          :only "computer tablet"}

          [:> ui/Grid.Column
           [:div.anchor-offset {:id "home"}]
           [nav-bar ref]]])

       (when (not @pc?)
         [:> ui/Grid.Row {:columns 2
                          ;;:id :nav-bar
                          :class-name "segment-bg"
                          :only "mobile"
                          }

          ;; mobile home
          [:> ui/Grid.Column
           [:div.anchor-offset {:id "home"}]
           [:> ui/Segment {:class-name "no-border transparent-bg"}
            [:> ui/Container {:text true
                              :text-align :center}

             [:> ui/Header {:as :h1
                            :class-name "main-header"
                            :inverted true} "We help bus companies"]
             [:p "Your clients don't know where the bus is and when it's coming?"]
             [:p "Your clients can't buy ticket onine?"]
             [:p "Your company wants to lower expenses and fuel consumption?"]
             [:p "You've come to the right place."]
             [:p "EXPLAIN WHY the mission share vision passion"
              ]
             ]]]

          [:> ui/Grid.Column

           [:> ui/Image {:src "img/hand.png"
                         :fluid true}
            ]

           ]])


       (when @pc?
         [:> ui/Grid.Row {:only "tablet computer"}
          [:> ui/Grid.Column
           [parallax]
           [:div.anchor-offset {:id "how"}]]])





       [steps/steps]
       [product/products]
       [faq/faq]
       [contact/contact-form]
       [footer/footer]


       ])))


(defn mobile [ref]
  (let [show? (r/atom nil)
        active-item (r/atom nil)]
    (fn []
      [:div
       [:> ui/Sticky {:context @ref}
        [:> ui/Segment {:inverted true
                        :color :blue
                        :clearing true}
         (if @show?
           [:> ui/Button {:inverted true
                          :floated :left
                          :on-click #(reset! show? false)}
            [:> ui/Icon {:name "x"}]]
           [:> ui/Button {:inverted true
                          :floated :left
                          :on-click #(reset! show? true)}
            [:> ui/Icon {:name "content"}]])
         [:> ui/Header {:as :h1
                        :floated :right} "Bus Routes"]]]


       [:> ui/Sidebar.Pushable {:as ui/Segment}
        [:> ui/Sidebar {:width "thin",
                        :visible @show?,
                        :vertical true,
                        :on-hide #(reset! show? false),
                        :inverted true
                        :color :blue
                        :icon "labeled"
                        :animation "slide along"
                        :as ui/Menu}

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
          [:> ui/Icon {:name "envelope"}] "Contact Us"]

         ]

        [:> ui/Sidebar.Pusher {:dimmed @show?
                               }
         [grid ref]


         ]]])))




(defn layout []
  (let [ref (r/atom nil)]
    (fn []
      [:> ui/Responsive {:fire-on-mount true
                         :on-update (fn [event view-obj]
                                      (reset! pc?
                                              (>= (goog-obj/getValueByKeys view-obj #js ["width"])
                                                  (goog-obj/getValueByKeys ui/Responsive #js ["onlyMobile"
                                                                                              "maxWidth"]))))}
       (if @pc?
         [:> ui/Ref {:inner-ref #(reset! ref %)}
          [grid ref]]
         [:> ui/Ref {:inner-ref #(reset! ref %)}
          [mobile ref]]
         )



       ])))



(defn main []
  [layout])





(def debug? ^boolean goog.DEBUG)

(defn dev-setup []
  (when debug?
    (enable-console-print!)
    (println "dev mode")))


(defn mount-app-element []
  (when-let [el (goog-dom/getElement "app")]
    (rf/clear-subscription-cache!)
    (r/render [main] el)))


;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
;; (mount-app-element)


;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element))


(defn ^:export init []
  (rf/dispatch-sync [:initialize-db])
  (dev-setup)
  (mount-app-element))



;; plan
;; 1. rekreiraj sajt koristice semantic ui
;;(done) mobilna verzija ima samo ruku i sliku aplikacije
;; (done) mobilna da bude float i da se skroluje menu
;; (done) grid ima blur slike ljudi i ruku ispred toga
;; (done) figure out how contact us will work
;; (done) 2. try to recreate the site to be as lean as possible but to retain the look and feel i already trimmed it

;; (done) 1. make prod build/advanced compilation and deploy to github
;; (done) use for popup https://www.opensourcery.co.za/2018/04/22/passing-around-components-with-reagent-and-semantic-ui/

;; (done) 1. add re-frame
;; refactor (each component is a type row it has to be able to be plugged into grid layout)


;; possibly update cider and lein

;; fix bugs (
;; - add titles for each section/row
;; - glitchy menu,
;; - disappearing sidebar on mozila,
;; - visible padding of home screen (then menu glitches)
;; - row size
;; add effects when what menu is changing in what we offer
