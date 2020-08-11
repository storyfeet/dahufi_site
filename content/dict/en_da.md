{{export
title = "English to Dahufi"
dahufi = " "	 
}}
<script src="/js/filter.js"></script>

<textarea id="filter">Some </textarea>
<button onclick='filter(getElementById("filter").value)'>Search</button>

<div class="dict">
{{for k v in  split (exec "dahufi" "-e") }}
{{if eq (mod $k 50) 0}} </div><br><div class="dict">{{/if}}
<div class="dict_item">{{$v}}</div>
{{/for}}
</div>
