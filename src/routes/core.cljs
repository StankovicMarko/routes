(ns ^:figwheel-hooks routes.core
  (:require
   [goog.dom :as gdom]
   [goog.object :as goog-obj]
   [reagent.core :as r]
   [routes.abc :as abc]
   [cljsjs.semantic-ui-react :as ui]))




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
   ;; [:> ui/Image {:src "img/stop.jpg"
   ;;               :class-name "main-img"
   ;;               }]
   ;; [:h2 {:style {:position :absolute
   ;;               :z-index 100
   ;;               :background-color :red
   ;;               :top 20
   ;;               }} "hahah"]
   ]





  )


(defn how [{:keys [header src desc]}]
  [:> ui/Card {:centered true
               :className "card-def light-blue"
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







(defn what-menu-item [{:keys [title desc img icon]}]
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


(defn what []
  (let [state (r/atom :admin)
        index (r/atom 0)
        items [{:title "Admin Panel"
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
                :icon "question circle outline"}
                 ]]
    (fn []
      [:div
       [:> ui/Segment {:class-name "no-border segment-bg"
                       :padded true}

        [:> ui/Container {:text-align :center}
         [what-menu-item (get items @index)]]


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
       ])))


(defn faq []
  (let [active? (r/atom nil)]
    (fn []
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
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodas temporo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrd exercitation ullamco laboris nisi ut aliquip ex comodo consequat. Duis aute dolor in reprehenderit."]]


        ]
       ])))



(defn contact []
  (let [form-data (r/atom {})
        company? (r/atom nil)]
    (fn []
      [:div
       [:> ui/Segment {:class-name "no-border segment-bg"
                       :padded true}
        [:> ui/Container {:text-align :center}
         [:> ui/Segment {:placeholder true
                         :class-name "transparent-bg no-border padded-row"}
          [:h2 "CONTACT US"]

          [:> ui/Form {:on-submit #(println @form-data)
                       :class-name "padded-row"}
           [:> ui/Form.Group {:widths "equal"}
            [:> ui/Form.Input {:placeholder "Your name"
                               :fluid true
                               :on-change (fn [e this]
                                            (swap! form-data assoc :name (goog-obj/get this #js ["value"])))}]
            [:> ui/Form.Input {:placeholder "E-mail address",
                               :fluid true
                               :on-change (fn [e this]
                                            (swap! form-data assoc :email (goog-obj/get this #js ["value"])))}]]
           [:> ui/Form.Group {:inline true
                              :widths "equal"}
            [:> ui/Form.Field
             [:> ui/Checkbox {:label "Are you representative of a company?"
                              :on-change (fn [e this] (do
                                                        (reset! company? (goog-obj/get this #js ["checked"]))
                                                        (swap! form-data dissoc :website)))}]]]
           [:> ui/Form.Group {:widths "equal"}
            (when @company?
              [:> ui/Form.Input {:placeholder "Company website"
                                 :fluid true
                                 :on-change (fn [e this]
                                              (swap! form-data assoc :website (goog-obj/get this #js ["value"])))}])]
           [:> ui/Form.Group {:widths "equal"}
            [:> ui/Form.Input {:placeholder "Message topic"
                               :fluid true
                               :on-change (fn [e this]
                                            (swap! form-data assoc :topic (goog-obj/get this #js ["value"])))}]]
           [:> ui/Form.TextArea {:placeholder "Your message"
                                 :on-change (fn [e this]
                                              (swap! form-data assoc :message (goog-obj/get this #js ["value"])))}]
           [:> ui/Form.Checkbox {:label "I want to be informed about new features and information"
                                 :on-change (fn [e this] (swap! form-data assoc :gdpr (goog-obj/get this #js ["checked"])))}]
           [:> ui/Form.Button "Submit"]]]]]])))



(defn footer []
  [:> ui/Container {:text true
                    :class-name "light-blue gray-text"
                    :text-align :center}
   [:> ui/Grid {:stackable true
                :class-name :light-blue}

    ;; use POPUP instead of title

    [:> ui/Grid.Row {:columns 2}
     [:> ui/Grid.Column
      [:p "We can't wait for you to enage with us on social networks"]]
     [:> ui/Grid.Column
      [:> ui/Icon {:name "facebook official"
                   :title "Facebook"
                   ;;:color :blue
                   :class-name "no-border"
                   :circular true
                   :size :big

                   }]
      [:> ui/Icon {:name "linkedin alternate"
                   :title "Linkedin"
                   ;;:color :blue
                   :class-name "no-border"
                   :circular true
                   :size :big
                   }]]]]]

  )

(defn grid []
  (let [ref (r/atom nil)]
    (fn []
      [:> ui/Ref {:inner-ref #(reset! ref %)}
       [:> ui/Grid {:stackable true
                    :class-name :light-blue}


        ;; [:> ui/Grid.Row {:id :nav-bar
        ;;                  :class-name "no-padding"
        ;;                  :only "computer tablet"}
        ;;  [:> ui/Grid.Column
        ;;   [:div.anchor-offset {:id "home"}]
        ;;   [nav-bar ref]]]

        [:> ui/Grid.Row {:columns 2
                         ;;:id :nav-bar
                         :class-name "segment-bg"
                         ;;:only "mobile"
                         }
         [:> ui/Grid.Column
          ;; [:div.anchor-offset {:id "home"}]
          ;;[mobile-nav-bar ref]
          [:> ui/Segment {:class-name "no-border transparent-bg"}
           [:> ui/Container {:text true
                             :text-align :center}
            [:> ui/Header {:as :h1
                           :inverted true} "We service bus companies"]
            [:p "Your clients don't know where the bus is and when it's coming?"]
            [:p "Your clients can't buy ticket onine?"]
            [:p "Your company wants to lower expenses and fuel consumption?"]
            [:p "You've come to the right place."]]]]

         [:> ui/Grid.Column
          [:> ui/Image {:src "img/hand.png"
                        :fluid true}]
          ]]

        ;; [:> ui/Grid.Row
        ;;  [:> ui/Grid.Column
        ;;   [parallax]
        ;;   [:div.anchor-offset {:id "how"}]]]


        [:> ui/Grid.Row {:columns 3
                         :class-name "light-blue padded-row padded-top"}
         (for [item [{:header "Step 1"
                      :src "img/how1.png"
                      :desc "Contact us and about pricing plans and information about data that's needed in order to make system operational"}
                     {:header "Step 2"
                      :src "img/how2.png"
                      :desc "We setup online services and mobile apps with data you provided"}
                     {:header "Step 3"
                      :src "img/how3.png"
                      :desc "You enjoy full control over the system while you customers have many perks one of which is knowing when bus is coming"}]]
           ^{:key (:header item)}
           [:> ui/Grid.Column
            [how item]
            ])]



        [:> ui/Grid.Row
         [:> ui/Grid.Column
          [:div.anchor-offset {:id "what"}]
          [what]
          ]]

        [:> ui/Grid.Row
         [:> ui/Grid.Column
          [:div.anchor-offset {:id "faq"}]
          [faq]
          ]
         ]

        [:> ui/Grid.Row
         [:> ui/Grid.Column
          [:div.anchor-offset {:id "contact"}]
          [contact]]
         ]

        [:> ui/Grid.Row {:id "footer"}
         [:> ui/Grid.Column
          [footer]]
         ]

        ]])))


(defn mobile [state]
  (let [show? (r/atom nil)
        active-item (r/atom nil)]
    (fn []
      [:div
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
                       :floated :right} "Bus Routes"]]


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
        [:> ui/Sidebar.Pusher {:dimmed @show?}
         [grid]


         ]]])))


(defn layout []
  (let [mobile? (r/atom nil)]
    (fn []
      [:> ui/Responsive {:fire-on-mount true
                         :on-update (fn [event view-obj]
                                      (reset! mobile?
                                              (>= (.getWidth view-obj)
                                                  (goog-obj/getValueByKeys ui/Responsive #js ["onlyMobile"
                                                                                              "maxWidth"]))))}


        ;; (if @mobile?
       ;; [grid]
       [mobile]
       ;; )

       ;; mobilna verzija ima samo ruku i sliku aplikacije
       ;; mobilna da bude float i da se skroluje menu
       ;; grid ima blur slike ljudi i ruku ispred toga
       ])))



(defn home []
  [layout])


;; define your app data so that it doesn't get over-written on reload
(defonce app-state (r/atom {:text "Hello world!"}))

(defn get-app-element []
  (gdom/getElement "app"))

(defn hello-world []
  [:div
   ;; [:h1 (:text @app-state)]
   ;; [:h3 "Edit this in src/routes/core.cljs and watch it change!"]
   [home]])

(defn mount [el]
  (r/render-component [hello-world] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (mount-app-element)
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)



;; plan
;; 1. rekreiraj sajt koristice semantic ui

;; 1. add re-frame
;; 2. try to recreate the site to be as lean as possible but to retain the look and feel i already trimmed it
;;
