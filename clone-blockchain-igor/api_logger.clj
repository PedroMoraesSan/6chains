(ns financeiro.api-logger
  (:require [cheshire.core :as json]
            [clojure.string :as str]))

;; ANSI color codes for terminal output
(def colors
  {:reset   "\u001B[0m"
   :red     "\u001B[31m"
   :green   "\u001B[32m"
   :yellow  "\u001B[33m"
   :blue    "\u001B[34m"
   :magenta "\u001B[35m"
   :cyan    "\u001B[36m"
   :white   "\u001B[37m"})

(defn colorize [color text]
  (str (get colors color (:reset colors)) text (:reset colors)))

(defn print-separator []
  (println (colorize :cyan (apply str (repeat 80 "=")))))

(defn print-header [text]
  (print-separator)
  (println (colorize :yellow (str "  " text)))
  (print-separator))

(defn format-json [data]
  (with-out-str
    (-> data
        (json/generate-string {:pretty true})
        println)))

(defn log-request [request]
  (print-header "API REQUEST")
  (println (colorize :green (str "Method: " (name (:request-method request)))))
  (println (colorize :green (str "URI: " (:uri request))))
  (when-let [params (:params request)]
    (when (seq params)
      (println (colorize :green "Query Parameters:"))
      (println (colorize :white (format-json params)))))
  (when-let [body (:body request)]
    (println (colorize :green "Request Body:"))
    (println (colorize :white (format-json body)))))

(defn log-response [response]
  (print-header "API RESPONSE")
  (println (colorize :blue (str "Status: " (:status response))))
  (when-let [body (:body response)]
    (println (colorize :blue "Response Body:"))
    (let [body-str (if (string? body) body (format-json body))]
      (println (colorize :white body-str))))
  (print-separator)
  (println))

(defn log-blockchain-state []
  (print-header "CURRENT BLOCKCHAIN STATE")
  (let [blockchain @financeiro.blockchain/blockchain]
    (println (colorize :magenta (str "Chain Length: " (count blockchain))))
    (println (colorize :magenta (str "Latest Block Index: " (:indice (last blockchain)))))
    (println (colorize :magenta "Latest Block Hash:"))
    (println (colorize :white (:hash (last blockchain))))
    (println)))

(defn log-transaction-added [transaction block]
  (print-header "TRANSACTION ADDED TO BLOCKCHAIN")
  (println (colorize :green "Transaction:"))
  (println (colorize :white (format-json transaction)))
  (println (colorize :green "In Block:"))
  (println (colorize :white (str "Index: " (:indice block))))
  (println (colorize :white (str "Hash: " (:hash block))))
  (println))

(defn wrap-api-logger [handler]
  (fn [request]
    (log-request request)
    (let [response (handler request)]
      (log-response response)
      (when (= (:uri request) "/blockchain")
        (log-blockchain-state))
      (when (and (= (:uri request) "/blockchain/transacao")
                 (= (:request-method request) :post))
        (let [blockchain @financeiro.blockchain/blockchain
              latest-block (last blockchain)]
          (log-transaction-added (:body request) latest-block)))
      response)))
