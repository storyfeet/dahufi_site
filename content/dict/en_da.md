{{export
title = "English to Dahufi"
dahufi = " "	 
}}
<script src="/js/filter.js"></script>

<textarea id="filter">Some </textarea>
<button onclick='filter(getElementById("filter").value)'>Search</button>

<div class="dict">
{{for k v in  split (exec "dahufi" "-e") }}
<span class="dict_item">{{$v}}</span>
{{/for}}
</div>
