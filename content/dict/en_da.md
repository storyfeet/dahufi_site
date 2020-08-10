{{export 
title = "English to Dahufi"
}}
<script src="/js/filter.js"></script>

<textarea id="filter">Some </textarea>
<button onclick='filter(getElementById("filter").value)'>Search</button>

<div class="dict">
{{for k v in  split (exec "dahufi" "-e") }}
<div class="dict_item">{{$k}} = {{$v}}</div>
{{/for}}
</div>

