# Warehouse Web Developer Exercise

In this excercise we would like you to build a web component similar to this [screenshot](recommendation_screenshot.png) using the [JSON](data/recommendations.json) provided. Creativity is accepted but do not alter the JSON. The componet you build should display images, prices and link to the product taking into consideration how it would work with i18n.

### Requirements
* Responsive
* Reusable code

Please fork this repository and commit your changes for review.

Amend this Readme in your forked repo and use your commits to outline the component you have created and the decisions that you have made.


-----------------------------------------------------------------------
Meral Ibrahim
25/06/2017

I've used LESS to style the Recommendations component, and I got help of JQUERY whilst building it.
-	LESS file is also available in css folder for review.

To accomplish responsiveness and a good user experience, I've used SLICK which is an opensource carousel component with many useful build in functions.
-	SLICK reference: http://kenwheeler.github.io/slick/

To localize the prices I’ve used the ISO country code I got from the linkURL of a product since there was no other localized information within the recommendations.json file. It would be better to add another field to the json file to specify the local/currency, which could be used in js instead of the linkURL.