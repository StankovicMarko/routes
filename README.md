# routes.core

FIXME: Write a one-line description of your library/project.

## Overview

FIXME: Write a paragraph about the library/project and highlight its goals.

## Development

To get an interactive development environment run:

    clojure -A:fig:build

This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    rm -rf target/public

To create a production build run:

	rm -rf target/public
	clojure -A:fig:min



# how to generate advanced build?
1. cp -avr resources/public/img/ .
2. clojure -A:prod -m figwheel.main --build-once prod

#### if you have problems with it
Probably externs cannot be inferred for all the calls you're making from your code to foreign-libs. Try adding this on top of one of the namespaces where you're doing interop and see if you get any warnings `(set! *warn-on-infer* true)` (edited)

You can also set `:pseudo-names` compiler option to `true` to see more clearly which part of your code is failing with advanced optimizations https://clojurescript.org/reference/compiler-options#pseudo-names


# how to connect domain and github pages
https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages


## License

Copyright © 2018 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
