(ns routes.events
  (:require [re-frame.core :as rf]
            [routes.db :as db]))

(rf/reg-event-db
 :initialize-db
 (fn [_ _]
   db/default-db))
