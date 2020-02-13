# COPY 2 INPUT

jquery and css styler for html element to copy text to clipboard from a label or span

## Getting Started

Please install the prerequisites listed below to use and link "copy.js" script, an example is attached in index.html.
```
<script type=text/javascript src="https://rawcdn.githack.com/Skulldorom/Copy-Input/76cecd4c63a6e79bdcd9e0e6245743cfcd47e09b/copy.js"></script>
```
The "copy-input" and "copy-value" classes are requied for the code to work

There are 2 ways to use Copy-Input, the html within could be copied or adding the copytext attribute to the label/span whos value will be copied as shown below:

Example 1
```
<div class="field copy-input">
  <div class="control">
    <label class="input copy-value">Hello World</label> 
  </div>
</div>
```
Example 2
```
<div class="field copy-input">
  <div class="control">
    <label class="input copy-value" copytext="This text will be copied to your clipboard, Example 2">Click Me!</label> 
  </div>
</div>
```

style can be edited using bulma classes

### Prerequisites

FontAwsome
Jquery
Bulma CSS

```
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css">
<script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
```

## Built With

* [BULMA](https://bulma.io/) - Main CSS
* [JQUERY](https://jquery.com/) - Javascript Dependency
* [FONTAWSOME](https://fontawesome.com/) - Used to generate Icons

## Acknowledgments

* Bulma for the amazing css code
