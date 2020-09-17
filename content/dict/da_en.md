{{export
title = "Dahufi to English"
dahufi = " "	 
}}
<script src="/js/filter.js"></script>

<textarea id="filter"></textarea>
<button onclick='filter(getElementById("filter").value)'>Search</button>

<div class="dict">
{{for k v in  split (exec "dahufi" "-m") }}
<span class="dict_item">{{$v}}</span>
{{/for}}
</div>
