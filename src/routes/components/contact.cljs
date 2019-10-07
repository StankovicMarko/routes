(ns routes.components.contact
  (:require [goog.object :as goog-obj]
            [cljsjs.semantic-ui-react :as ui]
            [reagent.core :as r]))


(defn contact-form [pc?]
  (let [form-data (r/atom {:gdpr false})
        company? (r/atom nil)]
    (fn []
      [:> ui/Grid.Row
       [:> ui/Grid.Column
        [:div
         [:> ui/Segment {:class-name "no-border segment-bg"}
          [:> ui/Container {:text-align :center}
           [:> ui/Segment {:placeholder true ;; for some reason this expands the row
                           :class-name "transparent-bg no-border padded-row"}
            [:div.anchor-offset {:id "contact"
                                 :style (when pc?
                                          {:top :-19vh})}]
            [:h2 "CONTACT US"]

            [:> ui/Form {:class-name "padded-row"
                         :action "https://formspree.io/hello@busroutes.io"
                         :method "post"}
             [:> ui/Form.Group {:widths "equal"}
              [:> ui/Form.Input {:placeholder "Your name"
                                 :fluid true
                                 :name "name"
                                 :required true}]
              [:> ui/Form.Input {:placeholder "E-mail address",
                                 :fluid true
                                 :name "email"
                                 :required true}]]
             [:> ui/Form.Group {:inline true
                                :widths "equal"}
              [:> ui/Form.Field
               [:> ui/Checkbox {:label "Are you representative of a company?"
                                :on-change (fn [e this]
                                             (reset! company? (goog-obj/get this #js ["checked"])))}]]]

             [:> ui/Form.Group {:widths "equal"}

              (when @company?
                [:> ui/Form.Input {:placeholder "Company website"
                                   :fluid true
                                   :name "website"
                                   :required true}])]

             [:> ui/Form.Group {:widths "equal"}
              [:> ui/Form.Input {:placeholder "Message topic"
                                 :fluid true
                                 :name "topic"
                                 :required true}]]
             [:> ui/Form.TextArea {:placeholder "Your message"
                                   :name "message"
                                   :required true}]
             [:> ui/Form.Checkbox {:label "I want to be informed about new features and information"
                                   :on-change #(swap! form-data assoc :gdpr (not (:gdpr @form-data)))
                                   :name "gdpr"
                                   :value (:gdpr @form-data)}]

             [:> ui/Form.Button {:inverted true
                                 :type "submit"} "Submit"]]]]]]]])))
