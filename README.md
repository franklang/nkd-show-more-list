# nkd-show-more-list
A ready-to-skin show more/show less jQuery/SASS component by [jlboes](https://github.com/jlboes) and [franklang](https://github.com/franklang).

Live demo: https://jsfiddle.net/j865xeg0/5/

Usage
-----

Just initialize the plug-in on an HTML UL/OL element, ID or class (on an UL/OL element), and set a value within the **data-visible-amount** attribute.
Keep HTML and classes structure.

```html
<script type="text/javascript">
  $(function(){
    nkdShowMoreList.init('#myList');
  });
</script>

<div class="nkd-show-more-list no-js">
  <ul id="myList" class="nkd-list nkd-has-hidden-content" data-visible-amount="4">
    <li class="nkd-list-item">item #01</li>
    <li class="nkd-list-item">item #02</li>
    <li class="nkd-list-item">item #03</li>
    <li class="nkd-list-item">item #04</li>
    <li class="nkd-list-item">item #05</li>
    <li class="nkd-list-item">item #06</li>
    <li class="nkd-list-item">item #07</li>
    <li class="nkd-list-item">item #08</li>
    <li class="nkd-list-item">item #09</li>
    <li class="nkd-list-item">item #10</li>    
  </ul>
  <p class="nkd-actions nkd-hidden">
    <a class="nkd-show-more">
      Show more...
    </a>
    <a class="nkd-show-less">
      Show less...
    </a>
  </p>
</div>
```
